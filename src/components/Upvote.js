import React, { useContext } from "react";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import AuthContext from "../contex/AuthContext";

const Upvote = ({ post }) => {
  const { AuthToken, refreshPage, profile, fetchPost } =
    useContext(AuthContext);

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
       fetchPost();
    }
  };




 return (
   <>
     {post.likes.length > 0 ? (
       <>
         {post.likes.filter((user) => user === profile.user).length > 0 ? (
           <>
             {post.likes
               .filter((user) => user === profile.user)
               .map((user, index) => {
                 return (
                   <div key={index}>
                    <span className="">{post.num_likes} </span>

                     <button className="" onClick={upVoteHandler}>
                       <FaRegThumbsUp size={20} color="red" />
                     </button>
                   </div>
                 );
               })}
           </>
         ) : (
           <div >
             <span className="">{post.num_likes} </span>

             <button className="" onClick={upVoteHandler}>
               <FaRegThumbsUp size={20} color="" />
             </button>
           </div>
         )}
       </>
     ) : (
       <div>
         <span>{post.num_likes} </span>

         <button className="" onClick={upVoteHandler}>
           <FaRegThumbsUp size={20} />
         </button>
       </div>
     )}
   </>
 );

};

export default Upvote;
