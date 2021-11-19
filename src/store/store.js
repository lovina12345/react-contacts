import reducer from "../reducers/contactReducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import firebase from "../firebase/Config";

import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";

const Store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
  )
);

export default Store;