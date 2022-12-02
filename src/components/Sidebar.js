import React from 'react'
import { Link } from 'react-router-dom'
import {FaHome, FaArtstation,FaBuffer,FaCalendarAlt} from "react-icons/fa";


const Sidebar = () => {
  return (
    <div className='bg-dim-50 w-full h-full mt-4 pl-4 flex flex-col'>
     
      <div class="flex gap-3  mt-4   "> <span class="mt-0"><FaHome size='2em'/> </span><Link to='/'  className="font-bold text-xl mt-1 text-gray-600 hover:text-red-600 ">Home</Link></div>
      <div class="flex gap-3  mt-4  "> <span class="mt-0"><FaArtstation size='2em'/> </span><Link to='/'  className="font-bold text-xl mt-1 text-gray-600 hover:text-red-600 ">Profile</Link></div>
      <div class="flex gap-3  mt-4  "> <span class="mt-0"><FaBuffer size='2em'/> </span><Link to='/'  className="font-bold text-xl mt-1 text-gray-600 hover:text-red-600 ">Explore</Link></div>
      <div class="flex gap-3  mt-4  "> <span class="mt-0"><FaCalendarAlt size='2em'/> </span><Link to='/'  className="font-bold text-xl mt-1 text-gray-600 hover:text-red-600 ">Favourite</Link></div>
    </div>
  )
}

export default Sidebar