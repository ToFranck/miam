// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyDElB_zRZBQEekO5msnSOPWlO6pV7fHdxQ",
  authDomain: "miam2-c6b31.firebaseapp.com",
  projectId: "miam2-c6b31",
  storageBucket: "miam2-c6b31.appspot.com",
  messagingSenderId: "212951029764",
  appId: "1:212951029764:web:669344d8b9f7a3b4febd51"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
