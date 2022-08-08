import React from 'react'
import section9Img1 from '../assets/home/section9/section9Img1.png'
import section9Img2 from '../assets/home/section9/section9Img2.png'
import section9Img3 from '../assets/home/section9/section9Img3.png'
import section9Img4 from '../assets/home/section9/section9Img4.png'


function HomeSection9() {
  return (
    <>
    <div className="hidden w-full sm:block md:px-28 2xl:px-28 md:min-h-[500px] mx-auto h-full py-14 px-10 space-y-2  text-left">
    <div className='flex px-10 items-center space-x-3'><div className='bg-[#FF0049]    p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049] p-[0.15rem]   w-[0.1rem] rounded-xl'></div> <p className=' font-bold text-gray-400 tracking-[0.3em] text-xs '>News</p> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> </div>
    <div className='space-y-10'>
  <h1 className=" text-gray-700 text-4xl sm:text-6xl 2xl:text-6xl sm:px-10"><samp className="font-semibold text-gray-700">News</samp>& <span className="font-semibold text-gray-700">Media</span> Talk </h1>

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
</div>

{/* for Mobile */}
<div className='sm:hidden font-poppins p-5 space-y-7'>
  <div className='space-y-1  flex flex-col items-center text-left'>
    <div className='text-left'>
    <h1 className=" -500 text-3xl tracking-[0.2rem] text-gray-700 "> News & </h1>
  <h1 className=" text-5xl uppercase  font-bold text-gray-700"> Media Talk</h1>
  </div>
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