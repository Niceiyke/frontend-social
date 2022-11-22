import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to='/'>Home</Link>
        <Link to='/'>Explore</Link>
        <Link to='/'>Bookmark</Link>
        <Link to='/'>Messages</Link>
        <Link to='/'>Notifications</Link>
        <Link to='/'>Profile</Link>
        <button className='btn-sidebar'>Share</button>
    </div>
  )
}

export default Sidebar