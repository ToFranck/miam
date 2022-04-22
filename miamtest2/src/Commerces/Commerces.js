import React from 'react'
import {Link, Outlet} from "react-router-dom"

export default function Commerces() {
  return (
    <div>
        <h1>Nos Commerces</h1>
        <nav>
          <Link to="/commerces/boulangeries">Boulangeries</Link>
          <Link to="/commerces/boucheries">Boucheries</Link>
        </nav>
        <Outlet />
    </div>
  )
}
