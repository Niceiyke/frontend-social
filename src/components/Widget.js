import React from 'react'
import TopPost from './TopPost'
import WhoToFollow from './WhoToFollow'

const Widget = () => {
  return (
    <div className='hidden md:block pl-2.5 pr-2.5 mt-5 border-l-2 min-w-[350px] '>
      <TopPost/>
      <WhoToFollow/>

    </div>
  )
}

export default Widget