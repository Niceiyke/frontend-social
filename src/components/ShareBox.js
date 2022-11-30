import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/shareBox.css'
import { FaUpload, FaPoll} from "react-icons/fa";
import { FcUpload, FcShare } from "react-icons/fc";
import AuthContext from '../contex/AuthContext';




const ShareBox = () => {
  const{profile,fetchPost}=useContext(AuthContext)
  const navigate =useNavigate()
  const [body,setBody]=useState(null)
  const{AuthToken,refreshPage}=useContext(AuthContext)

  const createPost =async(e)=>{
    e.preventDefault()
    let response = await fetch("http://127.0.0.1:8000/api/",{
      method:"POST",
      headers: {
          "Content-Type": "application/json",
          'Authorization':  'Bearer '+`${AuthToken.access}` ,
        },
        body: JSON.stringify({
          body: e.target.body.value,
          
          author: profile.user}),
      })
  let data = await response.json()
  if (response.status ===201){

    refreshPage()

  }

  }
  
  return (
    <form onSubmit={createPost}>
    <div className="shareContainer">
      <div className="shareheading">
        <h3>Home</h3>
      </div>
      <div className="imagebox">
        <img src={profile.picture} alt="Logo" height="45px" width="45px" />
        <div className="shareBox">
          <div className="shareContent">
            <textarea
              rows="2"
              cols="54"
              name='body'
              placeholder="share your code !"
            ></textarea>
          </div>
          <div className="shareitems">
            <div className="shareadditions">
              <span>
                <FaUpload /> 
                <p>Share Betcode</p>
              </span>
              <span>
                <FcUpload />
                <p>Share Betcode</p>
              </span>
              <span>
                <FaPoll />
                <p>create a poll</p>
              </span>
              <span>
                <FcShare />
                <p>write an Article</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button className="btn-sharebox">Share</button>
    </form>
  );
}

export default ShareBox