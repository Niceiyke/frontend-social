import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { SidebarOptions } from './SidebarOptions';

const Sidebar = () => {
  return (
    <div className=''>
    <div className=' pl-5 pr-5 mt-5 border-r-2 w-3/12 min-w-[250px] sticky top-0 '>
        <TwitterIcon fontSize='large' className='text-main text-3xl '/>
        <SidebarOptions Icon={HomeOutlinedIcon} text='Home' />
        <SidebarOptions Icon={ExploreOutlinedIcon} text='Explore' />
        <SidebarOptions Icon={Person2OutlinedIcon} text='Profile' />
    </div>
    </div>

  )
}

export default Sidebar