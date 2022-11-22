import React from 'react'
import '../styles/shareBox.css'
import { FaUpload, FaPoll} from "react-icons/fa";
import { FcUpload, FcShare } from "react-icons/fc";


const ShareBox = () => {
  return (
    <div className="shareContainer">
      <div className="shareheading">
        <h3>Home</h3>
      </div>
      <div className="shareBox">
        <div className="shareContent">
          <textarea
            rows="2"
            cols="53"
            placeholder="share your mind !"
          ></textarea>
        </div>
        <div className="shareitems">
          <div className="shareadditions">
            <span>
              <FaUpload />
            </span>
            <span>
              <FcUpload />
            </span>
            <span>
              <FaPoll />
            </span>
            <span>
              <FcShare />
            </span>
          </div>
          <button className="btn-sharebox">Share</button>
        </div>
      </div>
    </div>
  );
}

export default ShareBox