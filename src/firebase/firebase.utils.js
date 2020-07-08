import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const config= {
    apiKey: "AIzaSyATalNNCQU4MtgC7tB-UCRj4qk4awCv4QY",
    authDomain: "crwn-db-d74d4.firebaseapp.com",
    databaseURL: "https://crwn-db-d74d4.firebaseio.com",
    projectId: "crwn-db-d74d4",
    storageBucket: "crwn-db-d74d4.appspot.com",
    messagingSenderId: "677070007488",
    appId: "1:677070007488:web:5c6df293a292fbca0c1125",
    measurementId: "G-K0PWB2TF46"
  };

 export const createUserProfileDocument = async (userAuth,additionalData) =>{
     if(!userAuth) return;
     console.log(firestore.doc('users/128fdashadu'))
 };
  firebase.initializeApp(config);
  export const auth=firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

