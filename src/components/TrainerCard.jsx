import React from 'react'
import amazon_logo from '../assets/home/section6/amazon.png'
import netflix_logo from '../assets/home/section6/netflix.png'
function Section6Card({title, desc, top_logo, bottom_logo, profession, cardColor, propColor}) {
  return (
<div className={`relative min-w-[250px] ${cardColor} rounded overflow-hidden shadow-lg p-5 space-y-3`}>
    <h1 className=' text-left text-red-500 text-md font-bold'>{title}</h1>
    <div className='flex space-x-1 '> <img className='w-8'  src={top_logo} alt="" />
    <p className='text-xs'>Instructor MicroDegree</p> </div>
    <p className=' text-left text-[0.7rem]'>{desc}</p>

    <div className=' w-full flex justify-between items-center'>
        <div className='space-y-1'>
            <p className='text-bold text-xs'>{profession}</p>
            <img className='w-24' src={bottom_logo} alt="" />
        </div>
        <p className={`text-9xl h-14 mb-3 ${propColor}`}>❝</p>
    </div>
    </div>
  )
}

export default Section6Card