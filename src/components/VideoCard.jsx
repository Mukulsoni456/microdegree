import React from 'react'
import imageoverlay from '../assets/home/heroSection/overlayimg.png'
import playicon from '../assets/home/heroSection/playicon.png'
function VideoCard({handleVideo, vidthumb, title}) {
  return (
    <div onClick={handleVideo} className=' cursor-pointer rounded-md bg-gray-100  min-w-[11rem] h-[8rem] sm:w-[11rem] 2xl:w-52 2xl:h-40 sm:h-[9rem]'>
      <div className='h-3/4  relative rounded-t-md w-full'>
      <img className='w-full rounded-t-md h-full shrink-0 object-cover' src={vidthumb} alt="" />
      <img src={imageoverlay} className='absolute w-full h-full top-0' alt="" />
      <img src={playicon} className='absolute top-10 left-20 w-1/6' alt="" />
      </div>
      

      <div>
        <p className='px-2 py-2 text-gray-800 text-sm whitespace-nowrap'>{title}</p>
      </div>
    </div>
  )
}

export default VideoCard