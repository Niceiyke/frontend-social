import React from 'react'
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Widget from '../components/Widget';
import useAuth from '../hooks/useAuth';

const Home = () => {

    const{User,AuthToken}=useAuth()

  return (
    User?.id && AuthToken && 
    <div className='flex max-w-["1300"] mr-auto ml-auto px-2.5 py-0'>
    <Sidebar />
    <Feed/>
    <Widget/>
    </div>
  )
}

export default Home