import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <>
    <div className="navbar">
        <div className='logo'>
            <h1> Future one </h1>
        </div>
        <div className="navbar-container">
            <ul className="navbar-list">
                <li className="navbar-item"> 
                <Link to='/' className="navbar-links"> Overview </Link>
                </li>
                <li className="navbar-item"> 
                <Link to='/' className="navbar-links"> About </Link>
                </li>
                <li className="navbar-item"> 
                <Link to='/' className="navbar-links"> Resources</Link>
                </li>
                <li className="navbar-item"> 
                <Link to='/' className="navbar-links"> Network </Link>
                </li>
                <li className="navbar-item"> 
                <Link to='/' className="navbar-links"> Cloud </Link>
                </li>
                <li className="navbar-item"> 
                <Link to='/' className="navbar-links"> Download </Link>
                </li>
                <li className="navbar-item"> 
                <Link to='/' className="navbar-links"> Contact </Link>
                </li>
            </ul>
        </div>
        <div className="navbar-contact-button">
        <button className='btn-primary btn-small'> Contact Us </button>
        </div>
    </div>
    </>
  )
}

export default Navbar