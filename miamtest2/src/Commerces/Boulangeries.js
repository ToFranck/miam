import React from 'react';

import db from "../firebase";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from 'firebase/firestore';


export default function Boulangeries() {
 
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
      <p>
        {commerces.map(commerces => (
          <p> {commerces.name} </p>
          ) 
          )
        }
      </p>
  </div>
  )

    
}
