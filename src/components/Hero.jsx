import React from 'react'
import heroImage from "../assets/home/heroSection/Rectangle 102.png";
import heroImg1 from "../assets/home/heroSection/HeroImg1.png"
import Group19 from "../assets/home/heroSection/Group 19.png";
import Group1351 from "../assets/home/heroSection/Group 1351.png";
import Group1416 from "../assets/home/heroSection/Group 1416.png";
import Group1417 from "../assets/home/heroSection/Group 1417.png";
import Group1418 from "../assets/home/heroSection/Group 1418.png";
function Hero({viewModal, setViewModal, videoModal, setvideoModal, videoOutput, setVideoOutput}) {


    const videoLinks =[
        {
          id: 1,
          name : "video1",
          title: "How to enroll to courses?",
          link:'https://www.youtube.com/embed/YfmFWwzoLnQ'
        },
        {
          id: 2,
          name : "video2",
          title: "Why Our Courses?",
          link:'https://www.youtube.com/embed/01qSumyUrpU'
        },
        {
          id: 3,
          name : "video3",
          title: "Why Microdegree?",
          link:'https://www.youtube.com/embed/owYvziGyVZQ'
        },
      ]



      const handleVideo1 =()=>{
        setVideoOutput(videoLinks.filter((item)=>item.name.includes("video1"))[0])
        console.log(videoOutput)
        setvideoModal(!videoModal)
      }
      const handleVideo2 =()=>{
        setVideoOutput(videoLinks.filter((item)=>item.name.includes("video2"))[0])
        setvideoModal(!videoModal)
      }
      const handleVideo3 =()=>{
        setVideoOutput(videoLinks.filter((item)=>item.name.includes("video3"))[0])
        setvideoModal(!videoModal)
      }

  return (
    <div>
    <div className='sm:flex h-[650px] md:px-10 2xl:px-20  items-center hidden '>
    <div className="w-full h-full flex items-center pb-10 2xl:mt-14">
      <div className=" px-5 overflow-visible w-fit   h-fit min-w-[380px] text-left space-y-9">
        <div className="space-y-7 max-w-[450px] 2xl:max-w-[600px]">
        <span className='text-orange-400 text-md font-medium bg-gray-100 bg-opacity-50 px-2 2xl:text-lg py-1'>Save 15% on AWS</span>
        <h1 className='text-3xl 2xl:text-5xl font-bold leading-3 text-gray-700'>
          <span className='text-orange-400 w-full font-benne '>ಕನ್ನಡಿಗರಿಗೆ</span> IT Job Ready <span className='font-benne'>ಮಾಡುವ </span> <span className='text-orange-400 font-benne'> ಅಭಿಯಾನ</span> 
        </h1>
        <p className="text-sm 2xl:text-base font-medium">
          MicroDegree is an <span className='text-purple-700'> Ed-tech platform</span> teaching <span className='text-purple-700' >coding & job-ready </span>skills in Kannada at an affordable price.
        </p>
        <div className='space-x-8'>
          <button onClick={()=>setViewModal('77')} className=" p-3 px-9 bg-[#FF0049] text-white text-sm 2xl:text-base rounded-md">Free Consultation</button>
         <a href="https://courses.microdegree.work/pages/premium-courses"><button className='rounded-md p-2 px-5 border-2 font-medium border-purple-700 text-purple-700 text-sm'>All Courses</button></a>
        </div> 
        </div>

        <div className="w-full flex space-x-3 py-3 overflow-x-scroll scrollbar-hide">
          <img onClick={handleVideo1} className="w-44 2xl:w-56 " src={Group1416} alt="" />
          <img onClick={handleVideo2} className="w-44 2xl:w-56" src={Group1417} alt="" />
          <img onClick={handleVideo3} className="w-44 2xl:w-56" src={Group1418} alt="" />
        </div>
      </div>
      <div className='px-10'>
        <img className='2xl:w-[520px] w-[450px]' src={heroImg1} alt="" />
      </div>
      {/* basis-1 sm:px-14 flex-shrink flex sm:justify-start py-10 */}
    </div>
  </div>

  <div className='sm:hidden px-10 py-12 flex items-center pb-14'>
   <div className="text-left space-y-6">
         <div className="space-y-6 ">
         <span className='text-orange-400 text-md font-medium bg-gray-100 bg-opacity-50 px-2 py-1'>Save 15% on AWS</span>
         <h1 className='text-3xl font-bold text-gray-700'>
           <span className='text-orange-400'>ಕನ್ನಡಿಗರಿಗೆ</span> IT Job Ready ಮಾಡುವ <span className='text-orange-400'> ಅಭಿಯಾನ</span> 
         </h1>
         <p className="text-sm font-medium">
           MicroDegree is an Ed-tech platform teaching coding & job-ready
           skills in Kannada at an affordable price.
         </p>
         <div className='space-x-8'>
           <button onClick={()=>setViewModal('77')} className=" p-2 px-4 bg-[#FF0049] text-white text-sm rounded-md">Free Consultation</button>
         <a href="https://courses.microdegree.work/pages/premium-courses"><button className='rounded-md p-2 border border-blue-800 text-blue-800 text-sm'>All Courses</button></a>
         </div> 
        </div>
  <div className="w-full flex space-x-3 py-3 overflow-x-scroll">
  <img onClick={handleVideo1} className="w-44 " src={Group1416} alt="" />
   <img onClick={handleVideo2} className="w-44" src={Group1417} alt="" />
    <img onClick={handleVideo3} className="w-44" src={Group1418} alt="" />
   </div>
        </div>
  </div>
  </div>
  )
}

export default Hero