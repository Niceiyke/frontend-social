import React from 'react'
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Widget from '../components/Widget';

const Home = () => {
  return (
    <div className='flex max-w-["1300"] mr-auto ml-auto px-2.5 py-0'>
    <Sidebar />
    <Feed/>
    <Widget/>
    </div>
  )
}

export default Home