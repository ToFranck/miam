import React from 'react';
import boulangerie from '../fakedb/boulangerie.json'

export default function Boulangeries() {
  
  return (
    <div>
        <h1>Nos Boulangeries</h1>
        {
          boulangerie.map(post => {
            return(
              <div>
              <h4>{ post.title }</h4>
              <p>{ post.desc }</p>
              </div>
            )
          })
        }
    </div>
  )  
    
}
