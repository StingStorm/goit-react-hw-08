import css from './Contact.module.css';
import Avatar from '../ui/Avatar/Avatar';

import { IconButton } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Contact = ({ contact, onOpenDialog }) => {
  const hrefPhoneNum = contact.number.split('-').join('');

  const handleEvent = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleCall = () => {
    location.href = `tel:${hrefPhoneNum}`;
  };

  return (
    <>
      <div className={css.contactDescr}>
        <div>
          <Avatar id={contact.id} />
          <p>{contact.name}</p>
        </div>
        <div>
          <CallIcon className={css.icon} sx={{ color: 'green' }} />
          <span
            onClick={e => {
              handleEvent(e);
              handleCall();
            }}
          >
            {contact.number}
          </span>
        </div>
      </div>
      <IconButton
        title="Delete"
        aria-label="delete"
        onClick={e => {
          handleEvent(e);
          onOpenDialog(contact);
        }}
      >
        <DeleteForeverIcon color="accent" />
      </IconButton>
    </>
  );
};

export default Contact;
