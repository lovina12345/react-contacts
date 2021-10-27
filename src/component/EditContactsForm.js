import React, { useState } from "react";
import {Button} from 'react-bootstrap'
import { connect } from "react-redux";
import { editContact } from "../actions/contactAction";
import "../App.css";

function ContactForms(props) {
  const [name, setName] = useState(props.contact.name);
  const [phoneNumber, setPhoneNumber] = useState(props.contact.phoneNumber);
  const [location, setLocation] = useState(props.contact.location);

  function handleAppContact(e) {
    // if (name && phoneNumber && location) {

    // }else {
    //   alert('Enter something to edit contact')
    // }

    let editedcontact = {
      name: name,
      phoneNumber: phoneNumber,
      location: location,
      id: props.contact.id,
    };
    props.editContact(editedcontact, props.contact.id);
    props.toggleModal();
  }

  return (
    <div className="formBox">
      <form >
        <div className="detail-input">
          <input
            type="text"
            placeholder="Enter your Fullname"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Enter your Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your Location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <Button onClick={(e) => handleAppContact(e)}>Save</Button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  editContact
}

export default connect(null, mapDispatchToProps) (ContactForms);
