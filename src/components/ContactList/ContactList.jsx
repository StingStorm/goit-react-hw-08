import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { Link } from 'react-router-dom';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.contactList}>
        {filteredContacts.map(contact => {
          return (
            <li key={contact.id} className={css.contactItem}>
              <Link to={contact.id} className={css.contactLink}>
                <Contact {...contact} />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
