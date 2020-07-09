import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyATalNNCQU4MtgC7tB-UCRj4qk4awCv4QY",
    authDomain: "crwn-db-d74d4.firebaseapp.com",
    databaseURL: "https://crwn-db-d74d4.firebaseio.com",
    projectId: "crwn-db-d74d4",
    storageBucket: "crwn-db-d74d4.appspot.com",
    messagingSenderId: "677070007488",
    appId: "1:677070007488:web:5c6df293a292fbca0c1125",
    measurementId: "G-K0PWB2TF46"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth=firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

    export const createUserProfileDocument = async (userAuth,additionalData) =>{
        if(!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`)
        const snapShot = await userRef.get();

        if(!snapShot.exists) {
            const {displayName, email} =userAuth;
            const createdAt = new Date();
            
            try {
                 await userRef.set({
                     displayName,
                     email,
                     createdAt,
                     ...additionalData
                 })
            } catch (error) {
                console.log('error creating user', error.message);
            }

        }
        return userRef;
      
    }
  

  export default firebase;

