import React from 'react'

const FeedOptions = ({text,Component}) => {
  return (
    <div className='flex flex-col w-5/12 '>
    <div className='sticky top-0 bg-white z-[100] border-solid border border-gray-400 px-5 py-4 min-w-fit rounded-md' >
      <h2 className='text-xl font-extrabold'>{text}</h2>
    </div>
    <Component/>
    <Component/>
  </div>
  )
}

export default FeedOptions