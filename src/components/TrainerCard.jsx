import React from 'react'
import amazon_logo from '../assets/home/section6/amazon.png'
import netflix_logo from '../assets/home/section6/netflix.png'
function Section6Card({title, desc, top_logo, bottom_logo, profession, cardColor, propColor}) {
  return (
<div className={`relative min-w-[250px] 2xl:min-w-[350px] 2xl:h-[400px] flex flex-col justify-center   ${cardColor} rounded-lg overflow-hidden shadow-lg p-5 2xl:p-10 space-y-3 2xl:space-y-4`}>
    <h1 className=' text-left text-xl 2xl:text-2xl text-[#FB4474]  font-bold'>{title}</h1>
    <div className='flex space-x-2 '> <img className='w-8 2xl:w-12'  src={top_logo} alt="" />
    <p className='text-xs 2xl:text-base text-gray-300'>Instructor MicroDegree</p> </div>
    <p className=' text-left text-gray-700 2xl:text-base text-[0.75rem] line-clamp-5'>{desc}</p>

    <div className=' w-full flex justify-between items-center'>
        <div className='space-y-1'>
            <p className='font-bold text-left text-xs 2xl:text-base'>{profession}</p>
            <img className='w-24 2xl:w-36 h-12 object-contain' src={bottom_logo} alt="" />
        </div>
        <p className={`text-9xl h-14 mb-3 ${propColor}`}>❝</p>
    </div>
    </div>
  )
}

export default Section6Card