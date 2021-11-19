export const addContact = (newContact) => {
  // newContact.id = Math.random().toString(36).slice(2);
  // return {
  //   type: "ADD_CONTACT",
  //   payload: newContact,
  // };
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("contacts")
      .add(newContact)
      .then(() => {
        dispatch({
          type: "ADD_CONTACT",
          payload: newContact,
        });
      });
  };
};

// ----------------------action to delelte a user------------------------
export const deleteContact = (id) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("contacts")
      .doc(id)
      .delete()
      .then(() => {});
  };

  // return {
  //   type: "DELETE_CONTACT",
  //   payload: id,
  // };
};
// ------------------------------------------Edit a contact action----------------------------------

export const editContact = (id, updetedContact) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("contacts")
      .doc(id)
      .update(updetedContact)
      .then(() => {});
  };

  // return {
  //   type: "EDIT_CONTACT",
  //   payload: {
  //     id,
  //     updetedContact,
  //   },
  // };
};
// --------------------------------------------------get all users from the fireStore to the store------------
// action to retrieve a user from fireStore to the store
export const getAllContacts = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("contacts")
      .onSnapshot(
        (Snapshot) => {
          let contacts = [];
          Snapshot.forEach((doc) => {
            contacts.push({ ...doc.data(), id: doc.id });
          });
          console.log(contacts);
          dispatch({ type: "SET_ALL_CONTACTS", payload: contacts });
        },

        (error) => {}
      );
  };
};