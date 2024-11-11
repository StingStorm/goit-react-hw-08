import css from './ContactsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

import { Outlet } from 'react-router-dom';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import Loader from '../../components/Loader/Loader';
import { selectContactsState } from '../../redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectContactsState);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={css.grid}>
        <div className={css.contactForm}>
          <ContactForm />
        </div>
        <div className={css.contatcsArea}>
          <SearchBox />
          <ContactList />
        </div>
        <div className={css.contactInfo}>
          <Outlet />
        </div>
        {loading && <Loader />}
      </div>
    </>
  );
};

export default ContactsPage;
