import { useState } from "react";
import "./App.css";
import Contact from "./component/Contact";
import ContactForms from "./component/ContactForms";

function App() {
  
  const [contacts, setContacts] = useState([]);

  
  const handleDeleteContact = (contactId) => {
    const filterContact = contacts.filter((contact) => {
      return contactId !== contact.id;
    });

    setContacts(filterContact);
  };

  
  const handleEditContact = (newContact, contactId) => {
    
    setContacts(
      contacts.map((contact) => {
        if (contactId === contact.id) {
          return newContact;
        } else {
          return contact;
        }
      })
    );
  };

  return (
    <div className>
      <div>React Contact App</div>
      <ContactForms/>
      <Contact
        deleteContact={handleDeleteContact}
        editContact={handleEditContact}
      />
    </div>
  );
}

export default App;
