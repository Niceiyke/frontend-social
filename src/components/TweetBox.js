import React from 'react'
import { Avatar, Button } from '@mui/material'


const TweetBox = () => {
  return (
    <div className='pb-2.5 border-b-8 border-solid border-gray-200 pr-2.5'>
        <form className='flex flex-col'>
            <div className=' flex items-center p-5'>
            <Avatar sx={{ width: 70, height: 70 }} src='https://img.freepik.com/free-photo/indoor-shot-glad-young-bearded-man-mustache-wears-denim-shirt-smiles-happily_273609-8698.jpg?size=626&ext=jpg&ga=GA1.2.497941786.1679395633&semt=sph'/>
            <input placeholder='What is on your mind?' className='p-5 flex-1 ml-5 text-xl focus:outline-main'/>
            </div>

            <Button className='bg-main text-white border-none font-black rounded-[30] w-20 h-10 mt-5 ml-auto'>Tweet</Button>
            
        </form>
    </div>
  )
}

export default TweetBox