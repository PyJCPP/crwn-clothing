import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC-1gPFr4oWsqttiteYwrNRqjaWMt2JEQw",
  authDomain: "crwn-db-cf039.firebaseapp.com",
  databaseURL: "https://crwn-db-cf039.firebaseio.com",
  projectId: "crwn-db-cf039",
  storageBucket: "",
  messagingSenderId: "332760201298",
  appId: "1:332760201298:web:59c4d9caaa8cf6ab"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;