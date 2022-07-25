import React from 'react'
import section9Img1 from '../assets/home/section9/section9Img1.png'
import section9Img2 from '../assets/home/section9/section9Img2.png'
import section9Img3 from '../assets/home/section9/section9Img3.png'
import section9Img4 from '../assets/home/section9/section9Img4.png'


function HomeSection9() {
  return (
    <>
    <div className="hidden sm:block md:px-28 md:min-h-[500px] h-full py-14 px-10 space-y-10 text-left">
  <h1 className=" text-4xl sm:text-5xl sm:px-10"><samp className="font-semibold text-gray-800">News</samp>& <span className="font-semibold text-gray-900">Media</span> Talk </h1>

  <div className=" relative md:h-[340px] h-[200px]  flex  space-x-4 md:px-14 overflow-x-scroll ">

    <div className='w-1/3 h-fit md:h-full min-w-[200px] relative shadow-[inset_0px_-54px_75px_-5px_rgba(0,0,0,0.3)] '><img className='absolute object-contain  -z-10' src={section9Img1} alt="" /></div>

    <div className=' relative h-fit md:h-full  w-1/3 min-w-[200px] shadow-[inset_0px_-54px_75px_-5px_rgba(0,0,0,0.3)] '><img className="absolute object-contain top-0 -z-10 " src={section9Img2} alt="" /></div>

    <div className=" relative h-fit md:h-full  w-1/3 min-w-[200px] space-y-2 shadow-[inset_0px_-54px_75px_-5px_rgba(0,0,0,0.3)]">
      <div className='absolute object-contain h-full -z-10 '><img className='' src={section9Img3} alt="" />
    <img className='absolute object-contain -z-10' src={section9Img4} alt="" /></div>
    </div>
  </div>
</div>

{/* for Mobile */}
<div className='sm:hidden p-5 space-y-7'>
  <div className='space-y-1'><h1 className=" text-6xl "> News & </h1>
  <h1 className=" text-xl uppercase tracking-[0.3rem] font-bold text-gray-900"> Media Tak</h1>
  </div>
  <div className='flex flex-col items-center space-y-7'>
    <img className='w-64 object-contain' src={section9Img1} alt="" />
    <img className='w-64 object-contain' src={section9Img2} alt="" />
    <div>
    <img className='w-64 object-contain' src={section9Img3} alt="" />
    <img className='w-64 object-contain' src={section9Img4} alt="" />
    </div>
  </div>
</div>
</>
  )
}

export default HomeSection9