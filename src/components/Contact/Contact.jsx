import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const hrefPhoneNum = number.split('-').join('');
  return (
    <>
      <div className={css.contactDescr}>
        <div>
          <p>{name}</p>
        </div>
        <div>
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
