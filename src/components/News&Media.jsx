import React from 'react'
import section9Img1 from '../assets/home/section9/section9Img1.png'
import section9Img2 from '../assets/home/section9/section9Img2.png'
import section9Img3 from '../assets/home/section9/section9Img3.png'
import section9Img4 from '../assets/home/section9/section9Img4.png'


function HomeSection9() {
  return (
    <>
    <div className="hidden w-full sm:block md:px-28 2xl:px-28 md:min-h-[500px] mx-auto h-full py-14 px-10 space-y-10 text-left">
  <h1 className=" text-4xl sm:text-5xl 2xl:text-6xl sm:px-10"><samp className="font-semibold text-gray-700">News</samp>& <span className="font-semibold text-gray-900">Media</span> Talk </h1>

  <div className=" h-[340px] 2xl:h-[500px] w-full flex justify-center  space-x-4 md:px-14 overflow-y-hidden  ">

    <div className='h-full w-96 xl:w-1/3 2xl:w-1/3 relative shadow-[inset_0px_-54px_75px_-5px_rgba(0,0,0,0.3)] '>
    <img className='absolute object-cover h-full w-full -z-10' src={section9Img1} alt="" />
    </div>

    <div className='h-full w-96 xl:w-1/3 2xl:w-1/3 relative shadow-[inset_0px_-54px_75px_-5px_rgba(0,0,0,0.3)] '>
    <img className='absolute h-full w-full -z-10' src={section9Img2} alt="" />
    </div>

    <div>
    {/* <div className='w-96 2xl:w-1/3 h-full relative shadow-[inset_0px_-54px_75px_-5px_rgba(0,0,0,0.4)]'>
    <div className='h-full absolute w-full -z-10'>
    <img className='w-full h-1/2 absolute top-0 -z-10 object-contain' src={section9Img3} alt="" />
    <img className='w-full h-1/2 absolute bottom-0 -z-10 object-contain' src={section9Img4} alt="" />
    </div>
    </div> */}

    <div className='h-full w-96 l:w-1/3 2xl:w-[400px] relative shadow-[inset_0px_-54px_75px_-5px_rgba(0,0,0,0.3)] '>
      <div className='h-full absolute w-full -z-10'>
    <img className='w-full h-1/2 object-cover' src={section9Img3} alt="" />
    <img className='w-full h-1/2  object-cover' src={section9Img4} alt="" />
        </div>
    </div>
    </div>
  </div>
</div>

{/* for Mobile */}
<div className='sm:hidden p-5 space-y-7'>
  <div className='space-y-1'><h1 className=" text-5xl "> News & </h1>
  <h1 className=" text-xl uppercase tracking-[0.3rem] font-bold text-gray-900"> Media Tak</h1>
  </div>
  <div className='flex flex-col items-center space-y-7'>
    <div className='w-72 h-80 relative shadow-[inset_0px_-54px_75px_-5px_rgba(0,0,0,0.4)]'>
    <img className='w-full h-full absolute -z-10 object-cover ' src={section9Img1} alt="" />
    </div>

    <div className='w-72 h-80 relative shadow-[inset_0px_-54px_75px_-5px_rgba(0,0,0,0.4)]'>
    <img className='w-full h-full absolute -z-10 object-cover ' src={section9Img2} alt="" />
    </div>

    <div className='w-72 h-80 relative shadow-[inset_0px_-54px_75px_-5px_rgba(0,0,0,0.4)]'>
    <img className='w-full h-1/2 absolute top-0 -z-10 object-contain' src={section9Img3} alt="" />
    <img className='w-full h-1/2 absolute bottom-0 -z-10 object-contain' src={section9Img4} alt="" />
    </div>
  </div>
</div>
</>
  )
}

export default HomeSection9