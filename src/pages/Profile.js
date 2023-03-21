import React from 'react'
import ProfileBox from '../components/ProfileBox';
import Sidebar from '../components/Sidebar';
import Widget from '../components/Widget';

const Profile = () => {
  return (
    <div className='flex max-w-["1300"] mr-auto ml-auto px-2.5 py-0'>
    <Sidebar />
    <ProfileBox/>
    <Widget/>
    </div>
  )
}

export default Profile