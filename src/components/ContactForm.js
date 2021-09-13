import React, { useState } from "react";

function ContactForm(props) {
  const [name, setName] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [location, setlocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    
    let Contact = {
      name: name,
      phonenumber: phonenumber,
      location: location,
    };


    props.addContact(Contact);


    setName("");
    setphonenumber("");
    setlocation("");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="phonenumber"
        name="phonenumber"
        value={phonenumber}
        onChange={(e) => setphonenumber(e.target.value)}
      />
      <input
        type="location"
        name="location"
        value={location}
        onChange={(e) => setlocation(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}
export default ContactForm;