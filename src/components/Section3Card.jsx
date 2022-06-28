import React from 'react'

function Section3Card({title, desc, cardImg, date }) {
  return (
<div class=" m-auto sm:m-0 relative w-60 rounded overflow-hidden shadow-lg">
  <img class="w-full" src={cardImg} alt="Sunset in the mountains"/>
  <div className='absolute top-2 left-2  bg-white rounded-full w-9 p-1 text-center font-bold text-[0.6rem]'>{date}</div>
  <div class="px-4 py-3 bg-white text-left space-y-2">
    <div class="font-bold text-lg mb-2">{title}</div>
    <p class=" text-gray-700 text-xs">
        {desc}
    </p>
  </div>
</div>
  )
}

export default Section3Card