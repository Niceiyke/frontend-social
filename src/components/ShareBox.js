import React from 'react'
import '../styles/shareBox.css'
import { FaUpload, FaPoll} from "react-icons/fa";
import { FcUpload, FcShare } from "react-icons/fc";
import image from '../assets/images/image.png'


const ShareBox = () => {
  return (
    <div className="shareContainer">
      <div className="shareheading">
        <h3>Home</h3>
      </div>
      <div className="imagebox">
        <img src={image} alt="Logo" height="75px" width="75px" />
        <div className="shareBox">
          <div className="shareContent">
            <textarea
              rows="2"
              cols="54"
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
            <button className="btn-sharebox">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareBox