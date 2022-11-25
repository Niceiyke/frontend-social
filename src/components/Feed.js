import React from 'react'
import image from '../assets/images/image.png'
import '../styles/feed.css'
import {BiUpvote,BiDownvote } from "react-icons/bi";

const Feed = () => {
  return (

    <div className='feedbox'>
        <img src={image} alt="Logo" height="75px" width="75px" />
        <div className='feedcontent'>
            <div className='feedauthor'>
                <sapn className='feedname'>first Nmae</sapn> @<span className='feednickname'>nickname</span>
            </div>
            <div className='feedpost'>
                <div className='feedtext'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ac tortor dignissim convallis aenean et tortor at risus viverra. Vulputate odio ut enim blandit. Luctus accumsan tortor posuere ac.
                      Viverra vitae congue eu consequat ac felis. Felis donec et odio pellentesque diam volutpat commodo sed egestas. 
                      Nec feugiat in fermentum posuere urna nec. Nulla facilisi cras fermentum odio eu feugiat.
                     Diam volutpat commodo sed egestas egestas fringilla phasellus. Placerat duis ultricies lacus sed turpis tincidunt id.
                </p>
                </div>
                <div className='feedimage'>
                <img src={image} alt="Logo" height="200px" width="200px" />
                <img src={image} alt="Logo" height="200px" width="200px" />
                </div>
                <div className='feedreaction'>
                  <span className='reaction'><BiUpvote size='2em'/></span> <span className='reaction'><BiDownvote size='2em' /></span>
                </div>

            </div>
        </div>
    </div>

    
  )
}

export default Feed