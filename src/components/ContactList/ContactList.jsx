import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useNavigate } from 'react-router-dom';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { setCurrentContact } from '../../redux/contacts/slice';

const ContactList = ({ onOpenDialog }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleSelect = (contact, badgeColor) => {
    dispatch(setCurrentContact(contact));
    navigate(contact.id, { state: { badgeColor } });
  };
  return (
    <>
      <ul className={css.contactList}>
        {filteredContacts.map(contact => {
          return (
            <li
              key={contact.id}
              className={css.contactItem}
              onClick={() => handleSelect(contact)}
            >
              <Contact contact={contact} onOpenDialog={onOpenDialog} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
