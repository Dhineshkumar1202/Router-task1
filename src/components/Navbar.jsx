import React from 'react'


import './Navbar.css';


import { Link } from 'react-router-dom'

export const Navbar = () => {
  return <nav>
    <ul>
        <li>
            <Link to='/'>All |</Link>
        </li>
        <li>
            <Link to='/Full-Stack-Development'>Full Stack Development |</Link>
        </li>
        <li>
            <Link to='/Data-Science'>Data Science |</Link>
        </li>
        <li>
            <Link to='/Cyber-Security'>Cyber Security |</Link>
        </li>
        <li>
            <Link to='/Career'>Career</Link>
        </li>
    </ul>
  </nav>
}
