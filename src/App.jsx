import './App.css';
import Header from './components/AppHeader/AppHeader';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import { selectContatsState } from './redux/contactsSlice';
import Loader from './components/Loader/Loader';

function App() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContatsState);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Header />
      <main>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
        {isLoading && !error && <Loader />}
      </main>
    </>
  );
}

export default App;
