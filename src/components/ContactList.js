import React from "react";

function ContactList(props) {
  const Contacts = props.data;

  return (
    <div>
      {

      Contacts.map((Contact, index) => {
          return (
            <div key={index}>
              <h1>{Contact.name}</h1>
            <h3>{Contact.phonenumber}</h3>
            <h4>{Contact.location}</h4>
            </div>
          );
        })
      }
    </div>
  );
}
export default ContactList;