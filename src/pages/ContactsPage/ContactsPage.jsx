import css from './ContactsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';
import { selectContactsState } from '../../redux/contacts/selectors';
import { setCurrentContact } from '../../redux/contacts/slice';

import { Outlet } from 'react-router-dom';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import Loader from '../../components/Loader/Loader';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { loading, currentContact } = useSelector(selectContactsState);
  const [openDialog, setOpenDialog] = useState(false);
  const [contactToDelete, setContactToDelete] = useState('');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleOpenDialog = contact => {
    setOpenDialog(true);
    setContactToDelete(contact);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDeleteContact = () => {
    dispatch(deleteContact(contactToDelete.id));

    if (contactToDelete.id === currentContact?.id) {
      dispatch(setCurrentContact(null));
    }

    setOpenDialog(false);
  };

  return (
    <>
      {loading && <Loader />}
      <div className={css.grid}>
        <div className={css.contactForm}>
          <ContactForm />
        </div>
        <div className={css.contatcsArea}>
          <SearchBox />
          <ContactList onOpenDialog={handleOpenDialog} />
        </div>
        <div className={css.contactInfo}>
          <Outlet context={handleOpenDialog} />
        </div>
      </div>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-describedby="delete-confirmation-dialog-slide-description"
      >
        <DialogTitle>
          Are you sure you want to delete <span>{contactToDelete.name}</span>{' '}
          contact?{' '}
        </DialogTitle>
        <DialogActions>
          <Button
            variant="outlined"
            color="border"
            sx={{ color: '#fafafa' }}
            onClick={handleCloseDialog}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="accent"
            onClick={handleDeleteContact}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ContactsPage;
