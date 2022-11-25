import React from 'react'
import Feed from '../components/Feed';
import ShareBox from '../components/ShareBox'
import "../styles/homepage.css";

const Homepage = () => {
  return (
    <div className="main">
      <ShareBox />
      <Feed />
      <Feed />
      <Feed />
    </div>
  );
}

export default Homepage