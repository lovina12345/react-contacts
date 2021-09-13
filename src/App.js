import React, { useState } from "react";
import "./App.css";
import ContactsForm from "./components/ContactForm";
import ContactsList from "./components/ContactList";

function App() {
  const [Contacts, setContacts] = useState([]);

  function addContact(Contact) {
    setContacts([...Contacts, Contact]);
  }

  return (
    <div className="App">
      <ContactsForm addContact={addContact} />
      <ContactsList data={Contacts} />
    </div>
  );
}

export default App;
