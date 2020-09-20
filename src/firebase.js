import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCx2i5177I-FgJf-RLI0j7rfYGq5Tky6o0",
  authDomain: "twitter-clone-a9f9d.firebaseapp.com",
  databaseURL: "https://twitter-clone-a9f9d.firebaseio.com",
  projectId: "twitter-clone-a9f9d",
  storageBucket: "twitter-clone-a9f9d.appspot.com",
  messagingSenderId: "1099170157049",
  appId: "1:1099170157049:web:57a57249dc3099924f2d28",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
