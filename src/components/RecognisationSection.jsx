import React from 'react'
import RecognisationCard from "./RecognisatonCard";
import section3Img1 from "../assets/home/Section3/a1.png"
import section3Img2 from "../assets/home/Section3/a2.png"
import section3Img3 from "../assets/home/Section3/a3.png"
import section3Img4 from "../assets/home/Section3/a4.png"
import brandLogo1 from '../assets/home/Section2/brandLogo1.png'
import brandLogo2 from '../assets/home/Section2/brandLogo2.png'
import brandLogo3 from '../assets/home/Section2/brandLogo3.png'
import brandLogo4 from '../assets/home/Section2/brandLogo4.png'
import brandLogo5 from '../assets/home/Section2/brandLogo5.png'

function HomeSection3() {
  return (
    <div className='h-full sm:py-20 sm:px-28 2xl:px-36  p-10 space-y-10 '>
    <div className='space-y-4'>
    <h1 className='text-4xl text-gray-700 2xl:text-6xl'>Our <span className='font-semibold'>Award</span> & <span className='font-semibold'>Recognization</span></h1>
    <p className=" text-gray-600 text-xs 2xl:text-base font-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    
    </div>

    <div className=" w-full h-full flex flex-wrap space-x-2 items-center justify-around align-center  px-10">
      <img className=" w-[89px] 2xl:w-[200px] sm:w-32 object-contain" src={brandLogo1} alt="" />
      <img className=" w-[89px] 2xl:w-[200px] sm:w-32 object-contain" src={brandLogo2} alt="" />
      <img className=" w-[89px] 2xl:w-[200px] sm:w-32 object-contain" src={brandLogo3} alt="" />
      <img className=" w-[89px] 2xl:w-[200px] sm:w-32 object-contain" src={brandLogo4} alt="" />
      <img className=" w-[89px] 2xl:w-[200px] sm:w-32 object-contain" src={brandLogo5} alt="" />
    </div>


    <div className=" w-full h-full flex flex-wrap items-center justify-between sm:space-x-2 ">
      <RecognisationCard title='Recognized by KDM' desc='BTS event organised by Karnataka Digital Economy Mission ' date='Bangalore | Nov 2021 ' cardImg={section3Img1}></RecognisationCard>
      <RecognisationCard title='Winning Elevate' desc='Chosen as Top 100 startups by Govt of Karnataka ' date='Bangalore | March 2020' cardImg={section3Img2}></RecognisationCard>
      <RecognisationCard title='Recieving Award for IEEE' desc='Recognized by IEEE for Impacting 3000+ tech talents ' date='Mangaluru | Eeb 2021' cardImg={section3Img3}></RecognisationCard>
      <RecognisationCard title='Banagalore Tech Summit' desc='With Honourable chief Minister of Karnataka ' date='Bangalore | Nov 2021' cardImg={section3Img4}></RecognisationCard>
    </div>
    

  
  </div>
  )
}

export default HomeSection3