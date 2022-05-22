


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




const firebaseConfig = {
  apiKey: "AIzaSyCs7Dla7b3wbv8938TRQIVF7Mf-kFbFl4c",
  authDomain: "miam-b2f44.firebaseapp.com",
  databaseURL: "https://miam-b2f44-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "miam-b2f44",
  storageBucket: "miam-b2f44.appspot.com",
  messagingSenderId: "820414411868",
  appId: "1:820414411868:web:fb70a61fd8e356e9dda299",
  measurementId: "G-9E9LM123JW"
};

//Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBenRe5eitiOF3TxFu4_8k8fY1njh09HUs",
//   authDomain: "miam2-7164d.firebaseapp.com",
//   projectId: "miam2-7164d",
//   storageBucket: "miam2-7164d.appspot.com",
//   messagingSenderId: "880735639506",
//   appId: "1:880735639506:web:2381db978d75779e239a0b"
// };



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();




