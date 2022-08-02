import React from 'react'

function Section3Card({title, desc, cardImg, date }) {
  return (
<div className=" mx-auto sm:mx-0 mb-7 h-72  relative w-[260px] 2xl:w-[330px] 2xl:h-[350px] rounded overflow-hidden shadow-lg">
  <img className="w-full object-contain " src={cardImg} alt="Sunset in the mountains"/>
  
  <div className="px-4 py-3 2xl:py-4 h-full bg-white text-left space-y-2">
    <h1 className="truncate font-mediu font-roboto tracking-wider 2xl:font-semibold text-lg 2xl:text-xl ">{title}</h1>
    <p className=" text-gray-700 text-xs font-roboto 2xl:text-base">
        {desc}
    </p>
  </div>
  <div className='absolute bottom-1 right-4 p-1 text-center font-roboto font-medium text-[0.8rem]'>{date}</div>
</div>
  )
}

export default Section3Card