import { useEffect, useState } from 'react';
import './App.css';
import initialContacts from './initialContacts.json';
import Header from './components/AppHeader/AppHeader';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedData = localStorage.getItem('contacts');

    if (savedData) {
      return JSON.parse(savedData);
    }

    return initialContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = contactId => {
    console.log(contactId);
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });

    console.log(contacts);
  };

  const filteredContacts = contacts.filter(contact => {
    const isNameMatch = contact.name
      .toLocaleLowerCase()
      .includes(filter.toLowerCase().trim());
    const isNumberMatch = contact.number.includes(filter.trim());

    return isNameMatch || isNumberMatch;
  });

  return (
    <>
      <Header />
      <main>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={filteredContacts} onDelete={deleteContact} />
      </main>
    </>
  );
}

export default App;
