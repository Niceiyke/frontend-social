import React, { useContext } from 'react'
import image from '../assets/images/image.png'
import AuthContext from '../contex/AuthContext';
import Upvote from './Upvote';
import Downvote from './Downvote';


const Feed = () => {

  const{posts}=useContext(AuthContext)
  return (
    <>
      {posts.map((post, index) => (
        <div className="ml-1 flex mb-4 border-r-gray-500 border-b-4" key={index}>
          <img
            src={`http://127.0.0.1:8000/media/${post.author_picture}`}
            alt="Logo"
            class=" border rounded-md h-12 w-12 "
          />
          <div className="pl-4">
            <div className="inline">
              <span className="feedname">{post.author_name}</span> @
              <span className="feednickname">{post.author_email}</span>
            </div>

            <div className="feedpost">
              <div className="feedtext">
                <p>{post.body}</p>
              </div>
              <div className="flex">
                <img src={image} alt="Logo" className='h-24 w-24' />
                <img src={image} alt="Logo" className='h-24 w-24' />
           </div>
           <div className="feedreaction">
                <Upvote post={post} />
                <Downvote post={post}/>
              </div>   
            </div>
          </div>
        </div>
      ))}
    </>
  );}

  



export default Feed