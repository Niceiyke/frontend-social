import React, { useContext } from "react";
import {FaRegThumbsUp, FaRegThumbsDown} from "react-icons/fa";
import AuthContext from "../contex/AuthContext";

const Downvote = ({ post }) => {
  const { AuthToken, fetchPost, profile } = useContext(AuthContext);

  const downVoteHandler = async (e) => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/post/${post.post_id}/dislike/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + `${AuthToken.access}`,
        },
        body: JSON.stringify({}),
      }
    );

    // not smooth transition on refresh and add color for post option

    if (response.status === 200) {
     fetchPost();
    }
  };
 return (
   <>
     {post.dislikes.length > 0 ? (
       <>
         {post.dislikes.filter((user) => user === profile.user).length > 0 ? (
           <>
             {post.dislikes
               .filter((user) => user === profile.user)
               .map((user, index) => {
                 return (
                   <div key={index}>
                     <span className="pl-4">{post.num_dislikes} </span>

                     <button className="" onClick={downVoteHandler}>
                       <FaRegThumbsDown size={20} color="red" />
                     </button>
                   </div>
                 );
               })}
           </>
         ) : (
           <div>
             <span className="pl-4">{post.num_dislikes} </span>

             <button className="" onClick={downVoteHandler}>
               <FaRegThumbsDown size={20} color="" />
             </button>
           </div>
         )}
       </>
     ) : (
       <div>
         <span className="pl-4">{post.num_dislikes} </span>

         <button  onClick={downVoteHandler}>
           <FaRegThumbsDown size={20} />
         </button>
       </div>
     )}
   </>
 );


};

export default Downvote;
