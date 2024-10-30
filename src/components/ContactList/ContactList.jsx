import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id} className={css.contactItem}>
            <Contact {...contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
