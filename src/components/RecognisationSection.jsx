import React from 'react'
import RecognisationCard from "./RecognisatonCard";
import section3Img1 from "../assets/homeWebp/Section3/a1.webp"
import section3Img2 from "../assets/homeWebp/Section3/a2.webp"
import section3Img3 from "../assets/homeWebp/Section3/a3.webp"
import section3Img4 from "../assets/homeWebp/Section3/a4.webp"
import brandLogo1 from '../assets/homeWebp/Section3/brandLogo1.png'
import brandLogo2 from '../assets/homeWebp/Section3/brandLogo2.png'
import brandLogo3 from '../assets/homeWebp/Section3/brandLogo3.png'
import brandLogo4 from '../assets/homeWebp/Section3/brandLogo4.png'
import brandLogo5 from '../assets/homeWebp/Section3/brandLogo5.png'

function HomeSection3() {
  return (
    <div className='h-full sm:py-20 sm:px-14 xl:px-18 2xl:px-24  p-10 space-y-5 '>
    <div className='space-y-6'>
    <h1 className='text-4xl xl:text-[2.9rem] text-gray-700 2xl:text-6xl'>Our <span className='font-semibold'>Award's</span> & <span className='font-semibold'>Recognition</span></h1>
    <p className=" text-gray-600 text-xs xl:text-sm 2xl:text-base font-md">MicroDegree is proud to be acknowledged by some prominent publications and organizations</p>
    
    </div>

    <div className=" w-full h-full flex flex-wrap space-x-2 items-center justify-around 2xl:justify-center 2xl:space-x-6 align-center px-10 sm:px-24">
      <img className=" w-[89px] xl:w-36 2xl:w-[200px] sm:w-32 object-contain" src={brandLogo1} alt="" />
      <img className=" w-[89px] xl:w-36 2xl:w-[200px] sm:w-32 object-contain" src={brandLogo2} alt="" />
      <img className=" w-[89px] xl:w-36 2xl:w-[200px] sm:w-32 object-contain" src={brandLogo3} alt="" />
      <img className=" w-[89px] xl:w-36 2xl:w-[200px] sm:w-32 object-contain" src={brandLogo4} alt="" />
      <img className=" w-[89px] xl:w-36 2xl:w-[200px] sm:w-32 object-contain" src={brandLogo5} alt="" />
    </div>


    <div className=" w-full h-full flex flex-wrap items-center justify-around 2xl:justify-center sm:space-x-2 2xl:space-x-8 ">
      <RecognisationCard title='Recognized by KDM' desc='BTS event organised by Karnataka Digital Economy Mission ' date='21' month='nov' cardImg={section3Img1}></RecognisationCard>
      <RecognisationCard title='Winning Elevate' desc='Chosen as Top 100 startups by Govt of Karnataka ' date='20' month='mar' cardImg={section3Img2}></RecognisationCard>
      <RecognisationCard title='Recieving Award for IEEE' desc='Recognized by IEEE for impacting 3000+ rural tech talents ' date='21' month='feb' cardImg={section3Img3}></RecognisationCard>
      <RecognisationCard title='Bangalore Tech Summit' desc='With Honourable chief Minister of Karnataka ' date='21' month='nov' cardImg={section3Img4}></RecognisationCard>
    </div>
    

  
  </div>
  )
}

export default HomeSection3