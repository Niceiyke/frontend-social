import React, { useContext } from 'react'
import image from '../assets/images/image.png'
import AuthContext from '../contex/AuthContext';
import Upvote from './Upvote';
import Downvote from './Downvote';
import PostImage from './PostImage';


const Feed = () => {

  const{posts}=useContext(AuthContext)
  return (
    <>
      {posts.map((post, index) => (
        <div className="ml-1 flex mb-4 border-b-4 w-10/12" key={index}>
          <img
            src={`http://127.0.0.1:8000/media/${post.author_picture}`}
            alt="Logo"
            className=" border rounded-full w-14 h-14 shrink-0"
          />
          <div className="pl-4">
            <div className="inline">
              <span className="font-bold text-2xl">{post.author_name}</span>
              <span className="font-md text-sm pl-2 text-red-500">
                @{post.author_email}
              </span>
            </div>

            <div className="">
              <div className="text-md">
                <p>{post.body}</p>
              </div>
              <div className="flex flex-wrap">
                <PostImage post={post} />
              </div>
              <div className="flex">
                <Upvote post={post} />
                <Downvote post={post} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );}

  



export default Feed