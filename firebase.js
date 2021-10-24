/* // Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//import firebase from firebase
import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlIZyZTm-ekfUKdJuxhnLNNrT1nlyL0G8",
    authDomain: "rn-instagram-clone-dec69.firebaseapp.com",
    projectId: "rn-instagram-clone-dec69",
    storageBucket: "rn-instagram-clone-dec69.appspot.com",
    messagingSenderId: "303651097946",
    appId: "1:303651097946:web:cafa374d09a55c491e7763"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
!firebase.app().length ? initializeApp(firebaseConfig) : firebase.app()


export default firebase */