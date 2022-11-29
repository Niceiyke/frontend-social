import React, { useContext } from 'react'
import image from '../assets/images/image.png'
import '../styles/feed.css'
import {BiUpvote,BiDownvote } from "react-icons/bi";
import AuthContext from '../contex/AuthContext';


const Feed = () => {

  const{profile,posts}=useContext(AuthContext)
  return (
    <>
      { posts.map((post ,index)=>
       <div className='feedbox' key={index}>
      <img src={profile.picture} alt="Logo" height="45px" width="45px" />
      <div className='feedcontent'>
          <div className='feedauthor'>
              <span className='feedname'>{post.author}</span> @<span className='feednickname'>{post.author}</span>
          </div>
     
          <div className='feedpost'>
              <div className='feedtext'>
              <p>{ post.body}</p>
              </div>
              <div className='feedimage'>
              <img src={image} alt="Logo" height="200px" width="200px" />
              <img src={image} alt="Logo" height="200px" width="200px" />
              </div>
              <div className='feedreaction'>
                <span className='reaction'><BiUpvote size='2em'/></span> <span className='reaction'><BiDownvote size='2em' /></span>
              </div>

          </div>
      </div>
      </div>
      )}
 
  </>
  )}

  



export default Feed