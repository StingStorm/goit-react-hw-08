import css from './Contact.module.css';
import Avatar from '../ui/Avatar/Avatar';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

import { IconButton } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const hrefPhoneNum = number.split('-').join('');

  const handleEvent = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleCallClick = () => {
    location.href = `tel:${hrefPhoneNum}`;
  };

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <div className={css.contactDescr}>
        <div>
          <Avatar />
          <p>{name}</p>
        </div>
        <div>
          <CallIcon className={css.icon} sx={{ color: 'green' }} />
          <span
            onClick={e => {
              handleEvent(e);
              handleCallClick();
            }}
          >
            {number}
          </span>
        </div>
      </div>
      <IconButton
        title="Delete"
        aria-label="delete"
        onClick={e => {
          handleEvent(e);
          handleDelete();
        }}
      >
        <DeleteForeverIcon color="accent" />
      </IconButton>
    </>
  );
};

export default Contact;
