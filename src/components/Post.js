import React from 'react'
import { Avatar } from '@mui/material'
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import EqualizerIcon from '@mui/icons-material/Equalizer';


const Post = ({displayName, verifyBaged, username, timestamp,post,image,avatar,likes,comment,views,retweet}) => {
  return (
    <>


    <div className='flex items-start border-b border-solid border-gray-300 pb-2.5 '>
        <div className='pl-5 mt-3'>
        <Avatar sx={{ width: 70, height: 70 }} src='https://img.freepik.com/free-photo/indoor-shot-glad-young-bearded-man-mustache-wears-denim-shirt-smiles-happily_273609-8698.jpg?size=626&ext=jpg&ga=GA1.2.497941786.1679395633&semt=sph'/>
        </div>
        {/*Body*/}
        <div className='flex-1 p-2.5'> 
            <div>
                <div>
                  
                    <h3 className='text-md font-black'>Iyke dave <span ><VerifiedOutlinedIcon className='text-sm text-main'/></span><span className='text-xs font-extrabold text-gray-500'>@niceiyke</span></h3>
                </div>
                <div>
                  
                  <p>"Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy."
- Thich Nhat Hanh</p>
                </div>
            </div>
            <img src='https://img.freepik.com/free-photo/confident-businessman-posing-outside_74855-1551.jpg?size=626&ext=jpg&ga=GA1.2.497941786.1679395633&semt=sph' alt=''  className='rounded-2xl w-full'/>
            <div className='flex justify-between mt-5'>
              {/*post footer*/}
              <FavoriteBorderOutlinedIcon fontSize='small'/>
              <ChatBubbleOutlineOutlinedIcon fontSize='small'/>
              <RepeatOutlinedIcon fontSize='small'/>
              <EqualizerIcon fontSize='small'/>
              <ShareOutlinedIcon fontSize='small'/>


            </div>
        </div>
    </div>
    <div className='flex items-start border-b border-solid border-gray-300 pb-2.5 '>
        <div className='pl-5 mt-3'>
        <Avatar sx={{ width: 70, height: 70 }} src='https://img.freepik.com/free-photo/indoor-shot-glad-young-bearded-man-mustache-wears-denim-shirt-smiles-happily_273609-8698.jpg?size=626&ext=jpg&ga=GA1.2.497941786.1679395633&semt=sph'/>
        </div>
        {/*Body*/}
        <div className='flex-1 p-2.5'> 
            <div>
                <div>
                  
                    <h3 className='text-md font-black'>Iyke dave <span ><VerifiedOutlinedIcon className='text-sm text-main'/></span><span className='text-xs font-extrabold text-gray-500'>@niceiyke</span></h3>
                </div>
                <div>
                  
                  <p>"Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy."
- Thich Nhat Hanh</p>
                </div>
            </div>
              <div className='flex gap-2.5'> <img src='https://images.unsplash.com/photo-1474447976065-67d23accb1e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt=''  className='rounded-2xl w-[45%]'/>
            <img src='https://images.unsplash.com/photo-1474447976065-67d23accb1e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt=''  className='rounded-2xl w-[45%]'/></div>
            <div className='flex justify-between mt-5'>
              {/*post footer*/}
              <FavoriteBorderOutlinedIcon fontSize='small'/>
              <ChatBubbleOutlineOutlinedIcon fontSize='small'/>
              <RepeatOutlinedIcon fontSize='small'/>
              <EqualizerIcon fontSize='small'/>
              <ShareOutlinedIcon fontSize='small'/>


            </div>
        </div>
    </div>
    <div className='flex items-start border-b border-solid border-gray-300 pb-2.5 '>
        <div className='pl-5 mt-3'>
        <Avatar sx={{ width: 70, height: 70 }} src='https://img.freepik.com/free-photo/indoor-shot-glad-young-bearded-man-mustache-wears-denim-shirt-smiles-happily_273609-8698.jpg?size=626&ext=jpg&ga=GA1.2.497941786.1679395633&semt=sph'/>
        </div>
        {/*Body*/}
        <div className='flex-1 p-2.5'> 
            <div>
                <div>
                  
                    <h3 className='text-md font-black'>Iyke dave <span ><VerifiedOutlinedIcon className='text-sm text-main'/></span><span className='text-xs font-extrabold text-gray-500'>@niceiyke</span></h3>
                </div>
                <div>
                  
                  <p>"Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy."
- Thich Nhat Hanh</p>
                </div>
            </div>
            <img src='https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt=''  className='rounded-2xl w-full'/>
            <div className='flex justify-between mt-5'>
              {/*post footer*/}
              <FavoriteBorderOutlinedIcon fontSize='small'/>
              <ChatBubbleOutlineOutlinedIcon fontSize='small'/>
              <RepeatOutlinedIcon fontSize='small'/>
              <EqualizerIcon fontSize='small'/>
              <ShareOutlinedIcon fontSize='small'/>


            </div>
        </div>
    </div>
    </>
  )
}

export default Post