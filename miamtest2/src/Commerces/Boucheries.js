import React from 'react'

import db from '../firebase';
import { useEffect, useState } from "react";
import { collection, onSnapshot } from 'firebase/firestore';


export default function Boucheries() {
  const [boucherie, setboucherie] = useState([]);
  useEffect(
    () =>  
      onSnapshot(collection(db,"COMMERCE"),(snapshot) => {
        setboucherie(snapshot.docs.map(doc => doc.data()))
      }),
    []
  );

  return (
    <div>
      <p>
        {boucherie.map(boucherie => (
          <p> {boucherie.name} </p>
          ) 
          )
        }
      </p>
  </div>
  )
}
