import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EditContactsForm from "./EditContactsForm";
import "../App.css";
import { connect } from "react-redux";
import {deleteContact} from "../actions/contactAction"

function ContactList(props) {
  const contact = props.contact;

  //handle modal state
  const [showModal, setShowModal] = useState(false);

  //function to toggle modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <p>Name: {contact.name}</p>
      <p>Number: {contact.phoneNumber}</p>
      <p>Location: {contact.location}</p>
      <Button
        className="btn delete-btn"
        variant="danger"
        onClick={() => {
          const confirm = window.confirm("Do you want to delete contact");
          if (confirm === false) {
            alert("Thanks for staying");
          } else {
            props.deleteContact(contact.id);
            alert("contact was deleted");
          }
        }}
      >
        Delete contact
      </Button>
      <Button
        variant="light"
        className="btn edit-btn"
        onClick={() => toggleModal()}
      >
        Edit contact
      </Button>

      {/* modal to eidt contact */}
      <Modal className="modal" show={showModal} onHide={() => toggleModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <EditContactsForm
            contact={contact}
            editContact={props.editContact}
            toggleModal={toggleModal}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="close-btn"
            variant="secondary"
            onClick={() => toggleModal()}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}



const mapDispatchToProps = {
  deleteContact
}

export default connect(null, mapDispatchToProps) (ContactList)

