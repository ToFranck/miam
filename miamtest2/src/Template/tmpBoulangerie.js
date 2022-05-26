import React from 'react'

import db from "./firebase";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from 'firebase/firestore';


export default function tmpBoulangerie() {
  
  const [boulangerie, setboulangerie] = useState([]);
  useEffect(
    () =>  
      onSnapshot(collection(db,"COMMERCES"),(snapshot) => {
        setboulangerie(snapshot.docs.map(doc => doc.data()))
      }),
    []
  );

 
  return (
    <div>tmpboulangerie
      <p>
        {boulangerie.map(boulangerie => (
          <p> {boulangerie.name} </p>
          ) 
          )
        }
      </p>
  </div>
  )

}
