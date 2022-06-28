import React from 'react'

function Section5Card({title, desc, cardImg, logoImg }) {
  return (
<div class=" relative w-60 rounded overflow-hidden shadow-lg">
  <img class="w-full" src={cardImg} alt="Sunset in the mountains"/>
  <div class="px-4 py-3 bg-gray-100 text-center space-y-2">
    <div class="font-bold text-lg mb-2">{title}</div>
    <p class="text-gray-700 text-xs">
        {desc}
    </p>
    <img className='w-24 m-auto' src={logoImg} alt="" />
  </div>
</div>
  )
}

export default Section5Card