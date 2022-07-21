import React from 'react'
import section9Img1 from '../assets/home/section9/section9Img1.png'
import section9Img2 from '../assets/home/section9/section9Img2.png'
import section9Img3 from '../assets/home/section9/section9Img3.png'
import section9Img4 from '../assets/home/section9/section9Img4.png'


function HomeSection9() {
  return (
    <div className="md:px-28 md:min-h-[500px] py-10 px-10 space-y-10 text-left">
  <h1 className=" text-4xl sm:text-5xl sm:px-10"><samp className="font-bold">News</samp>& <span className="font-bold">Media</span> Talk </h1>

  <div className="flex overflow-y-hidden space-x-4 md:px-14 overflow-x-scroll">
    <img className='w-1/3 min-w-[200px] shadow-inner' src={section9Img1} alt="" />
    <img className="w-1/3 min-w-[200px] shadow-[inset_0_40px_60px_0px_rgba(0,0,1)]  " src={section9Img2} alt="" />
    <div className="w-1/3 min-w-[200px] h-full space-y-2"><img src={section9Img3} alt="" />
    <img className='' src={section9Img4} alt="" /></div>
  </div>
</div>
  )
}

export default HomeSection9