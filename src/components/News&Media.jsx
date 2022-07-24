import React from 'react'
import section9Img1 from '../assets/home/section9/section9Img1.png'
import section9Img2 from '../assets/home/section9/section9Img2.png'
import section9Img3 from '../assets/home/section9/section9Img3.png'
import section9Img4 from '../assets/home/section9/section9Img4.png'


function HomeSection9() {
  return (
    <div className="md:px-28 md:min-h-[500px] py-10 px-10 space-y-10 text-left">
  <h1 className=" text-4xl sm:text-5xl sm:px-10"><samp className="font-semibold text-gray-800">News</samp>& <span className="font-semibold text-gray-900">Media</span> Talk </h1>

  <div className=" relative h-[360px] flex overflow-y-hidden space-x-4 md:px-14 overflow-x-scroll ">
    <div className='w-1/3 min-w-[200px] relative shadow-[inset_0px_-54px_75px_-5px_rgba(0,0,0,0.3)] '><img className='absolute -z-10' src={section9Img1} alt="" /></div>
    <div className=' relative w-1/3 min-w-[200px] shadow-[inset_0px_-54px_75px_-5px_rgba(0,0,0,0.3)] '><img className="absolute top-0 -z-10 " src={section9Img2} alt="" /></div>
    <div className=" relative w-1/3 min-w-[200px] h-full space-y-2 shadow-[inset_0px_-54px_75px_-5px_rgba(0,0,0,0.3)]">
      <div className='absolute -z-10 '><img className='' src={section9Img3} alt="" />
    <img className='absolute -z-10' src={section9Img4} alt="" /></div>
    </div>
  </div>
</div>
  )
}

export default HomeSection9