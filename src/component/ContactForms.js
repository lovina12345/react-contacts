import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "../App.css";
import {connect} from "react-redux";
import {addContact} from "../actions/contactAction";

function ContactForms(props) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [text, setText] = useState("");

  function handleAppContact(e) {
    e.preventDefault();

    if (name && phoneNumber && location) {
      let contact = {
        name: name,
        phoneNumber: phoneNumber,
        location: location,
        id: uuid(),
      };

      props.addNewContact(contact);

      setName("");
      setPhoneNumber("");
      setLocation("");

      let i = 0;
      let txt = "You are welcome, your details are safe with us.";
      let speed = 100;

      let typeWriter = (props) => {
        if (i < txt.length) {
        

          setText(txt.substring(0, i++));
          setTimeout(typeWriter, speed);
        }
      };

      typeWriter();
    }else {
      alert('Enter something')
    }
  }


  return (
    <div className>
      <form onSubmit={(e) => handleAppContact(e)}>
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
        <button>Submit</button>

        <div>{text}</div>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
    addNewContact: addContact
}

export default connect(null, mapDispatchToProps)(ContactForms);