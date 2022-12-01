import React, { useContext } from "react";
import {FaRegThumbsUp, FaRegThumbsDown} from "react-icons/fa";
import AuthContext from "../contex/AuthContext";

const Downvote = ({ post }) => {
  const { AuthToken, refreshPage, profile } = useContext(AuthContext);

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
      refreshPage();
    }
  };

const upVoteHandler = async () => {
      let response = await fetch(
        `http://127.0.0.1:8000/api/post/${post.post_id}/like/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + `${AuthToken.access}`,
          },
          body: JSON.stringify({}),
        }
      );
      let data = await response.json();

      // not smooth transition on refresh and add color for post option

      if (response.status === 200) {
        refreshPage();
      }
    };

   return (
     <>
       {(post.likes.length > 0) | (post.dislikes.length > 0) ? (
         <>
           {post.dislikes.map((user, index) => {
             return user === profile.user ? (
               <div key={index}>
                 <span>{post.num_likes} </span>

                 <button className="vote" onClick={upVoteHandler}>
                   <FaRegThumbsUp size="2em" />
                 </button>
                 <span>{post.num_dislikes} </span>

                 <button className="vote-active" onClick={downVoteHandler}>
                   <FaRegThumbsDown size="2em" />
                 </button>
               </div>
             ) :null
           })}
         </>
       ) : (
         <div>
           <span>{post.num_likes} </span>

           <button className="vote" onClick={upVoteHandler}>
             <FaRegThumbsUp size="2em" />
           </button>
           <span>{post.num_dislikes} </span>

           <button className="vote" onClick={downVoteHandler}>
             <FaRegThumbsDown size="2em" />
           </button>
         </div>
       )}
     </>
   );


};

export default Downvote;
