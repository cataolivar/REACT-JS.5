import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
  return (
  <nav>
    <h1> - GENDER FREE STORE - </h1>
    <ul>
      <li>
        Inicio 
      </li>
      <li>
      Productos
      </li>
      <li>
        Contacto
      </li>
      <li>
        <CartWidget/>
      </li>
    </ul>
  </nav> 
  )
}

export default NavBar;