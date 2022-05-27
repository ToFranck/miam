import React from 'react'

import { Link}from "react-router-dom";


import db from "../firebase";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from 'firebase/firestore';
import PCommerce from './PCommerce.js';



export default function Commerces() {
  
  const [commerces, setcommerces] = useState([]);
  useEffect(
    () =>  
      onSnapshot(collection(db,"COMMERCE"),(snapshot) => {
        setcommerces(snapshot.docs.map(doc => doc.data()))
      }),
    []
  );
  const data = {
    name : commerces.name,
    id : commerces.id, 
    type : commerces.type,
    location : commerces.location,


  }
 
  return (
      <div>
      <h1>Nos Commerces</h1>

        {commerces.map(commerces => ( 
          <li key = {commerces.id}>
            <Link to={`/commerces/${commerces.id}`} state={[commerces.name, commerces.type, commerces.location]}>{commerces.name}</Link> 
          </li>

          ) 
          )
        }
      
  </div>
  )
  // return (
  //   <div>
  //       <h1>Nos Commerces</h1>
  //       <nav>
  //         <Link to="/commerces/boulangeries">Boulangeries</Link>
  //         <Link to="/commerces/boucheries">Boucheries</Link>
  //       </nav>
  //       <Outlet />
  //   </div>
  // )
}
