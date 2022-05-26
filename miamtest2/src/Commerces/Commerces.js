import React from 'react'
import {Link, Outlet} from "react-router-dom"

import db from "../firebase";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from 'firebase/firestore';
import {BrowserRouter as Router, Route, Routes}from "react-router-dom";



export default function Commerces() {
  
  const [commerces, setcommerces] = useState([]);
  useEffect(
    () =>  
      onSnapshot(collection(db,"COMMERCE"),(snapshot) => {
        setcommerces(snapshot.docs.map(doc => doc.data()))
      }),
    []
  );

 
  return (
    <div>
      <h1>Nos Commerces</h1>
      <p>
        {/* <Route path="/pcommerces/:name" element={<commerces/>} /> */}
        {commerces.map(commerces => (
          <p> {commerces.name} </p>
          ) 
          )
        }
      </p>
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
