// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRlAv85oQTbs4nr35HHaw6Vq6pV7H0DlQ",
  authDomain: "pantryapp-ea038.firebaseapp.com",
  projectId: "pantryapp-ea038",
  storageBucket: "pantryapp-ea038.appspot.com",
  messagingSenderId: "338827981824",
  appId: "1:338827981824:web:53c8aaa9884431210a54e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {app, firestore}