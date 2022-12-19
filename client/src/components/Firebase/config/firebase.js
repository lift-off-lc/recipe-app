import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, setPersistence, browserSessionPersistence } from "firebase/auth";
// import { getFirestore, addDoc, collection } from 'firebase/firestore';
// import { useState } from "react";
// import UserCheck from "./userCheck";


// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const firebaseDB = getFirestore();
const auth = getAuth(app);

// const sendUserCred = userCred => {
//   return userCred.user;
// }

// const signUpUser = async (email, password) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       await addDoc(collection(firebaseDB, "users"), {
//         uid: user.uid,
//         email: user.email,
//         displayName: user.displayName
//       });
//       alert("Account info sent to auth server");
//       return true;
    
//   } catch (error) {
//     alert({ error: error.message });
//     return { error: error.message };
//   }
// };

// const logInUser = async (email, password) => {
//   setPersistence(auth, browserSessionPersistence).then(async () => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       if (userCredential.user) {
//         return true;
//       }
//     } catch (error) {
//       console.log({ error: error.message });
//       alert({ error: error.message });
//       return (
//         { error: error.message }
//       );
//     }
//   });


// };

// const signOutUser = async () => {
//   try {
//     await signOut(auth);
//     alert("Successfully signed out");
//     return true;
//   } catch (error) {
//     alert({ error: error.message });
//     return false;
//   }
// };


export default auth;