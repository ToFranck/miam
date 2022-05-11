import React from 'react';
import miamdb from '../fakedb/miamdb.json'

export default function Boulangeries() {
  
  return (
    <div>
        <h1>Nos Boulangeries</h1>
        {
          miamdb.commerces.map(post => {
            return(
              <div>
              <h4>{ post.title }</h4>
              <p>{ post.conetent }</p>
              </div>
            )
          })
        }
    </div>
  )  
    
}
