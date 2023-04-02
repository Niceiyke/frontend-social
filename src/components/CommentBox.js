import React from 'react'

const CommentBox = () => {
  return (
    <div className='mt-4'>
      <form className="flex">
        <input
          type="text"
          name="reply"
          autoFocus={true}
          placeholder="Reply"
          className="p-5 flex-1 ml-2 w-11/12 text-xl mt-2 focus:outline-main bg-white focus:bg-white border-2 "
        />
        <button className="bg-main text-white border-none font-black rounded-xl  w-20 h-10 mt-6 ml-2 mr-2">
          Reply
        </button>
      </form>
    </div>
  );
}

export default CommentBox
