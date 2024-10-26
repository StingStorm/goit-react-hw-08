import './App.css';
import Header from './components/AppHeader/AppHeader';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </main>
    </>
  );
}

export default App;
