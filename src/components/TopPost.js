import React from 'react'

const TopPost = () => {
  return (
    <div className='rounded-2xl bg-[#f7f9f9]'>
        <h2 className='text-xl font-extrabold '>Trending Post </h2>
        <div>
            <h3 className='text-xs font-medium text-gray-900 mt-4 pl-4'>1. Trending </h3>
            <h2 className='text-xl font-extrabold pl-4'>#PeterObiChallangefff</h2>
            <h3 className='text-xs font-medium text-gray-900 mt-2 pl-5 pb-4'>1900k tweet</h3>
        </div>
        <div>
            <h3 className='text-xs font-medium text-gray-900 mt-4 pl-4'>2. Trending </h3>
            <h2 className='text-xl font-extrabold pl-4'>Tinubu</h2>
            <h3 className='text-xs font-medium text-gray-900 mt-2 pl-5 pb-4'>1900k tweet</h3>
        </div>
    </div>
  )
}

export default TopPost