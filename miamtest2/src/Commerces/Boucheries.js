import React from 'react'
import boucherie from '../fakedb/boucherie.json'

export default function Boucheries() {
  return (
    <div>
        <h1>Nos Boucheries</h1>
        {
          boucherie.map(post => {
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
