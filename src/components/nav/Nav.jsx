import React from 'react'
import "./Nav.css"
import { Link } from "react-scroll";


const Nav = () => {
  const items = ["home", "about", "skills", "services", "portfolio", "clients", "contact"];
  return (
    <nav className="nav">
      <div className="nav-menu">
      {items.map((item, index) => (
        <Link 
        to={'#${item}'} 
        key={index} 
        className="nav-link">{item}</Link>
      ))}
      </div>
    </nav>
  )
}

export default Nav