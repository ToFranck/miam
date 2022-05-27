import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
        <Link to="/">Acceuil</Link>
        <Link to="/commerces" >Commerces</Link>
        <Link to ="/profil" >Profil</Link>
        
    </nav>
  )
}
