import { IoMdPerson } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa6';
import css from './Contact.module.css';

const Contact = ({ name, phoneNumber, id, onDelete }) => {
  const hrefPhoneNum = phoneNumber.split('-').join('');
  return (
    <>
      <div className={css.contactDescr}>
        <div>
          <IoMdPerson size={'18px'} className={css.icon} />
          <p>{name}</p>
        </div>
        <div>
          <FaPhone size={'15px'} className={css.icon} />
          <a href={`tel:+38048${hrefPhoneNum}`}>{phoneNumber}</a>
        </div>
      </div>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
