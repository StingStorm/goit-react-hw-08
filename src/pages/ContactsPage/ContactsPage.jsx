import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectContatsState } from '../../redux/contacts/selectors';
import Loader from '../../components/Loader/Loader';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectContatsState);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.grid}>
      <div className={css.contactForm}>
        <ContactForm />
      </div>
      <div className={css.contatcsArea}>
        <SearchBox />
        <ContactList />
      </div>
      <div className={css.contactInfo}></div>
      {isLoading && <Loader />}
    </div>
  );
};

export default ContactsPage;
