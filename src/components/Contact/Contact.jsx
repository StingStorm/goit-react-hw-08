import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import CallIcon from '@mui/icons-material/Call';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const hrefPhoneNum = number.split('-').join('');
  return (
    <>
      <div className={css.contactDescr}>
        <div>
          <div className={css.contact}></div>
          <p>{name}</p>
        </div>
        <div>
          <CallIcon className={css.icon} />
          <a href={`tel:+38048${hrefPhoneNum}`}>{number}</a>
        </div>
      </div>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </>
  );
};

export default Contact;
