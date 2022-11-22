import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

const Header = () => {
  return (
    <div className='navbar'>

    <div className='logo'>
        <h1 ><Link to='/'>LOGO</Link> </h1>
    </div>

    <nav className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>
    </nav>
    </div>
  )
}

export default Header