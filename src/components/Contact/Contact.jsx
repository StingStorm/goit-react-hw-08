import { IoMdPerson } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa6';
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
          <IoMdPerson size={'18px'} className={css.icon} />
          <p>{name}</p>
        </div>
        <div>
          <FaPhone size={'15px'} className={css.icon} />
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
