import React, { useContext } from 'react'
import image from '../assets/images/image.png'
import '../styles/feed.css'
import AuthContext from '../contex/AuthContext';
import Upvote from './Upvote';
import Downvote from './Downvote';


const Feed = () => {

  const{posts}=useContext(AuthContext)
  return (
    <>
      {posts.map((post, index) => (
        <div className="feedbox" key={index}>
          <img
            src={`http://127.0.0.1:8000/media/${post.author_picture}`}
            alt="Logo"
            height="45px"
            width="45px"
          />
          <div className="feedcontent">
            <div className="feedauthor">
              <span className="feedname">{post.author_name}</span> @
              <span className="feednickname">{post.author_email}</span>
            </div>

            <div className="feedpost">
              <div className="feedtext">
                <p>{post.body}</p>
              </div>
              <div className="feedimage">
                <img src={image} alt="Logo" height="200px" width="200px" />
                <img src={image} alt="Logo" height="200px" width="200px" />
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