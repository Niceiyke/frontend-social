import React from 'react'
import Post from './Post'
import TweetBox from './TweetBox'

const Feed = () => {
  return (
    <div className="flex flex-col  w-full md:w-6/12">
      <div className="sticky top-0 bg-white z-[100] border-solid border border-gray-400 px-5 py-4 min-w-fit rounded-md">
        <h2 className="text-xl font-extrabold">Home</h2>
      </div>
      <TweetBox />
      <Post />
    </div>
  );
}

export default Feed