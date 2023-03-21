import React from 'react'
import TopPost from './TopPost'
import WhoToFollow from './WhoToFollow'

const Widget = () => {
  return (
    <div className='pl-2.5 pr-2.5 mt-5 border-l-2 w-4/12 min-w-[250px]'>
      <TopPost/>
      <WhoToFollow/>

    </div>
  )
}

export default Widget