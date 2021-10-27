import ContactList from "./ContactList";
import "../App.css";
import { connect } from "react-redux";


function Contact(props) {
  const contacts = props.addContact;

  return contacts.map((contact, index) => {
    return (
        <div key={index} className="list-box">
          <ContactList
            contact={contact}
            key={contact.id}
            deleteContact={props.deleteContact}
            editContact={props.editContact}
          />
        </div>
    );
  });
}

const mapStateToProps = (state) => {
  return {
    addContact: state.contacts
  }
}

export default connect(mapStateToProps) (Contact);