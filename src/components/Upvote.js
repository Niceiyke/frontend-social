import React, { useContext } from 'react'
import {BiUpvote} from "react-icons/bi";
import AuthContext from '../contex/AuthContext';

const Upvote = ({post}) => {
    const{AuthToken,refreshPage,profile}=useContext(AuthContext)

  
 
   
    const upVoteHandler= async()=>{
        let response = await fetch(`http://127.0.0.1:8000/api/post/${post.post_id}/like/`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization':  'Bearer '+`${AuthToken.access}` ,
                
              },
              body: JSON.stringify({
                
                }),
            })
        let data = await response.json()

        // not smooth transition on refresh and add color for post option

        if (response.status ===200){
            refreshPage()
        }
    }

  return(
    <>
    {post.likes.map((p)=>{
        console.log(p,profile.user)
        

        p===profile.user ? <div><span>{post.num_likes} </span><button className='upvote-active' onClick={upVoteHandler}><BiUpvote size="2em"  /></button></div> :<div> <span>{post.num_likes}</span><button className='upvote' onClick={upVoteHandler}><BiUpvote size="2em"  /></button></div>
        
    })
    
    }

</> )
}

export default Upvote

