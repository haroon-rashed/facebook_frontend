import React from 'react'
import Navbar from '../home/Navbar'
import VideoSidebar from './VideoSidebar'
import GetVideos from './GetVideos'

const Videos = () => {
  return (
    <>
     <Navbar/> 
     <div className="grid  grid-cols-12">
      <div className='col-span-3'>
        <VideoSidebar/>
      </div>
      <div className=' h-[89vh] overflow-y-scroll hide-scrollbar col-span-9'>
        <GetVideos/>
      </div>
     </div>
    </>
  )
}

export default Videos
