import React from 'react'
import heroImage from "../assets/home/heroSection/Rectangle 102.png";
import Group19 from "../assets/home/heroSection/Group 19.png";
import Group1351 from "../assets/home/heroSection/Group 1351.png";
import Group1416 from "../assets/home/heroSection/Group 1416.png";
import Group1417 from "../assets/home/heroSection/Group 1417.png";
import Group1418 from "../assets/home/heroSection/Group 1418.png";
function HomeSection1({viewModal, setViewModal, videoModal, setvideoModal, videoOutput, setVideoOutput}) {


    const videoLinks =[
        {
          id: 1,
          name : "video1",
          title: "How to enroll to courses?",
          link:'https://www.youtube.com/embed/E7wJTI-1dvQ'
        },
        {
          id: 2,
          name : "video2",
          title: "Why Our Courses?",
          link:'https://www.youtube.com/embed/5Eqb_-j3FDA'
        },
        {
          id: 3,
          name : "video3",
          title: "Why Microdegree?",
          link:'https://www.youtube.com/embed/ANX4UZlW2JA'
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
    <div className='flex'>
    <div className="w-full h-full flex items-center p-10 px-5 md:px-14">
      <div className=" px-5  min-w-[350px] overflow-visible basis-1/2 h-full text-left space-y-6">
        <div className="space-y-6 max-w-[450px]">
        <span className='text-orange-400 text-md font-semibold'>Save 15% on AWS</span>
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
          <img onClick={handleVideo1} className="w-36 " src={Group1416} alt="" />
          <img onClick={handleVideo2} className="w-36" src={Group1417} alt="" />
          <img onClick={handleVideo3} className="w-36" src={Group1418} alt="" />
        </div>
      </div>
      <div className='basis-1/2 min-w-fit flex items-center py-10 px-0'>
        <div className="hidden sm:block relative w-[350px] h-[350px] ">
        <img className="w-[350px] absolute top-0  object-contain  " src={heroImage} alt="" />
        <img className="w-[55px] absolute object-contain top-10 right-6 " src={Group1351} alt="" />
        <img className="w-[120px] absolute  object-contain top-1/2 -left-10" src={Group19} alt="" />
        </div>


      </div>
    </div>
  </div>
  )
}

export default HomeSection1