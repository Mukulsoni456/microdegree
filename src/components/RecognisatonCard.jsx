import React from 'react'

function Section3Card({title, desc, cardImg, date }) {
  return (
<div className=" mx-auto sm:mx-0 mb-7 h-72  relative w-[280px] sm:w-60 2xl:w-[300px] 2xl:h-[340px] rounded overflow-hidden shadow-lg">
  <img className="w-full object-contain " src={cardImg} alt="Sunset in the mountains"/>
  
  <div className="px-4 py-3 2xl:py-4 h-full bg-white text-left space-y-2">
    <div className="truncate font-medium text-lg 2xl:text-xl ">{title}</div>
    <p className=" text-gray-700 text-xs 2xl:text-base">
        {desc}
    </p>
  </div>
  <div className='absolute bottom-1 right-4 p-1 text-center font-medium text-[0.8rem]'>{date}</div>
</div>
  )
}

export default Section3Card