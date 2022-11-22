import React from 'react'
import '../styles/shareBox.css'

const ShareBox = () => {
  return (
    <div className='shareContainer'>
        <div className='shareheading'>
            <h3>Home</h3>
        </div>
        <div className='shareBox'>
            <div className='shareContent'>
            <textarea rows="2" cols="53"  placeholder ='share your mind !'></textarea> 
            </div>
            <div className='shareitems'>
            <div className='shareadditions'>
                <span><h4>med</h4></span>
                <span><h4>poll</h4></span>
            </div>
            <button className='btn-sharebox'>Share</button>
            </div>

        </div>
    </div>
  )
}

export default ShareBox