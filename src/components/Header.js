import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai";


const Header = () => {

  const[toggle,setToggle]=useState(false)

  const handleToggle =()=>{
    console.log('toggled')
    setToggle(!toggle)
  }

  return (
    < >
    <div className='flex justify-between bg-dim-50 md:bg-dim-100 '>
    <h1 ><Link to='/' className='uppercase font-bold text-3xl text-red-600 hover:text-gray-600'>LOGO</Link> </h1>
    <div className='md:flex  fixed hidden left-4 top-0 mt-12 md:flex-row md:justify-between md:static md:mt-1.5  '>
        <Link className='pr-8 pb-8 md:pb-0 uppercase hover:text-gray-600 ease-in text-md font-bold' to='/'>Home</Link>
        <Link  className='pr-8 pb-8 md:pb-0 uppercase hover:text-gray-600 ease-in text-md font-bold'to='/contact'>Contact</Link>
        <Link className='pr-8 pb-8 md:pb-0 uppercase hover:text-gray-600 ease-in text-md font-bold' to='/about'>About</Link>
        <Link className='pr-8 pb-8 md:pb-0 uppercase hover:text-gray-600 ease-in text-md font-bold' to='/profile'>Profile</Link>
    </div>

    <div className={!toggle ? 'fixed left-[-100%] ': ' ease-in-out duration-300 md:hidden bg-gray-900 w-60 text-dim-50 fixed left-0 top-0 mt-5 flex flex-col'}>
        <Link className=' pl-4 mt-4 pb-8 md:pb-0 uppercase hover:text-gray-600 ease-in text-md font-bold' to='/'>Home</Link>
        <Link  className='pl-4 pb-8 md:pb-0 uppercase hover:text-gray-600 ease-in text-md font-bold'to='/contact'>Contact</Link>
        <Link className=' pl-4 pb-8 md:pb-0 uppercase hover:text-gray-600 ease-in text-md font-bold' to='/about'>About</Link>
        <Link className=' pl-4 pb-8 md:pb-0 uppercase hover:text-gray-600 ease-in text-md font-bold' to='/profile'>Profile</Link>
    </div>




        <div className='pr-8 mt-2 md:hidden 'onClick={handleToggle}>
          {toggle ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
    </div>

 






    </>
  )
}

export default Header