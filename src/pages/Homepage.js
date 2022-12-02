import React from 'react'
import Feed from '../components/Feed';
import ShareBox from '../components/ShareBox'


const Homepage = () => {
  return (
    <div className="mt-4 ">
      <div className="hidden md:block"><ShareBox /></div>
      <div className='mx-auto'><Feed /></div>
      
      
    </div>
  );
}

export default Homepage