import React from 'react'
import Feed from '../components/Feed';
import ShareBox from '../components/ShareBox'


const Homepage = () => {
  return (
    <div className="mt-4 ">
      <div className=" md:block"><ShareBox /></div>
      <div className='mx-auto mt-4'><Feed /></div>
      
      
    </div>
  );
}

export default Homepage