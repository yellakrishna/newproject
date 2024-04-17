import React from 'react'
import {NavLink } from 'react-router-dom'
import './style.css'

const Navbar = () => {
  return (
    <div className="nav-container">
        <img src='../images/card2.png' alt="logo" className='image' style={{height:50,width:50}}/>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/patnar">Partnar</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
