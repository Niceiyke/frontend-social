import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Avatar, Button} from '@mui/material'
import Post from './Post';

const ProfileBox = () => {
  return (
    <div className='flex flex-col w-5/12 '>
       <div className='sticky top-0 bg-white z-[100] border-solid border border-gray-400 px-5 py-4 min-w-fit rounded-md flex  items-center' >
            <KeyboardBackspaceIcon/>
            <div className='pl-4'>
            <h2 className='text-xl font-bold'>David iyke</h2>
            <h3 className='text-sm font-normal text-gray-600'>2005 tweets</h3>
            </div>
        </div>
        <div className='bg-gray-300'>
        <div className=' '>
             <Avatar className='mt-4 mx-auto' sx={{ width: 150, height: 150 }} src='https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.497941786.1679395633&semt=ais'/>
        </div>
        <div className=''>
          <div className='text-center'>
                <h2 className='text-xl font-bold'>David Iyke</h2>
                <h3 className='text-xs font-normal' >@niceiyke</h3>
            </div>
            <div className='flex justify-center'>
                <p className='pl-4 font-bold'>100 post</p> <p className='pl-4 font-bold'>10 following</p> <p className='pl-4 font-bold'>2000 followers</p>
            </div>
            <div className='flex justify-center gap-4'>
                <Button className='bg-main text-white border-none font-bold rounded-[30] w-20 h-10 my-5'>Follow</Button>
                <Button className='bg-main text-white border-none font-bold rounded-[30] w-20 h-10 my-5'>Message</Button>
            </div>
        </div>
        </div>
        <Post/>
   
        
  </div>
  )
}

export default ProfileBox