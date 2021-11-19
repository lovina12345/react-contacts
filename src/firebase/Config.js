import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoYUu11B5qG0TuH10tdFiLGuHnLRXKqRQ",
  authDomain: "contactsrearedfire.firebaseapp.com",
  projectId: "contactsrearedfire",
  storageBucket: "contactsrearedfire.appspot.com",
  messagingSenderId: "587984831554",
  appId: "1:587984831554:web:32c1b714e397c4cf1059db",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;
