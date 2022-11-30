import React, { useContext } from 'react'
import {BiDownvote} from "react-icons/bi";
import AuthContext from '../contex/AuthContext';

const Downvote = ({post}) => {

    const{AuthToken,refreshPage,profile}=useContext(AuthContext)

    const downVoteHandler= async(e)=>{
        let response = await fetch(`http://127.0.0.1:8000/api/post/${post.post_id}/dislike/`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization':  'Bearer '+`${AuthToken.access}` ,
                
              },
              body: JSON.stringify({
                
                }),
            })

        // not smooth transition on refresh and add color for post option

        if (response.status ===200){
            refreshPage()
        }
  
    }

    return(
      <>
      {post.dislikes.map((p)=>{
          console.log(p,profile.user)
          
  
          p===profile.user ? <div><span>{post.num_dislikes} </span><button className='upvote-active' onClick={downVoteHandler}><BiDownvote size="2em"  /></button></div> :<div> <span>{post.num_dislikes}</span><button  onClick={downVoteHandler}><BiDownvote size="2em"  /></button></div>
          
      })
      
      }
  
  </> )
}

export default Downvote