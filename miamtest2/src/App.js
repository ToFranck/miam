

import './App.css';

import db from "./firebase";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from 'firebase/firestore';


// import Home from './components/Home';
// import Commerces from './Commerces/Commerces';

// import {Routes, Route}from "react-router-dom";
// import Profile from './components/Profile';
// import Navbar from  './Navbar/Navbar';
// import Boucheries from './Commerces/Boucheries';
// import Boulangeries from './Commerces/Boulangeries';


function App() {
  const [users, setUsers] = useState([]);


  useEffect(
    () =>  
      onSnapshot(collection(db,"users"),(snapshot) => {
        setUsers(snapshot.docs.map(doc => doc.data()))
      }),
    []
  );

  return (
   <div className='root'>


     
     <p>Hey 
       {users.map(users => (
         <p> {users.name} </p>
        ) )}
     </p>


     
   </div>
  );
      
}

export default App;
