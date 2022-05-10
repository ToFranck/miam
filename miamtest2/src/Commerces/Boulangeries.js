import React from 'react';
import miamdb from '../fakedb/miamdb.json'

export default function Boulangeries() {
  
  return (
    <div>
        <h1>Nos Boulangeries</h1>
        {miamdb.map((postDetail, index)=> {
          return <p>{postDetail.name}</p>
        })}
    </div>
  )

}
