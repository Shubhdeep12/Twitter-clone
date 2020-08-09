import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCjGKFPdIoEGn8qqxEbMdT3eFp9MyXiUhE",
  authDomain: "twitter-clone-33d2d.firebaseapp.com",
  databaseURL: "https://twitter-clone-33d2d.firebaseio.com",
  projectId: "twitter-clone-33d2d",
  storageBucket: "twitter-clone-33d2d.appspot.com",
  messagingSenderId: "913377932738",
  appId: "1:913377932738:web:2948d4041bc47e513d925b",
  measurementId: "G-YZHK79KJNN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
