import React from 'react'

function Section5Card({title, desc, cardImg, logoImg }) {
  return (
<div className=" mb-8 mx-auto relative w-60 rounded overflow-hidden shadow-lg">
  <img className="w-full" src={cardImg} alt="Sunset in the mountains"/>
  <div className="px-4 py-3 h-full bg-gray-100 text-center space-y-2">
    <div className="font-bold text-lg mb-2">{title}</div>
    <p className="text-gray-700 text-xs">
        {desc}
    </p>
    <div className='flex items-center justify-center'>
    <img className='w-24 ' src={logoImg} alt="" />
    </div>
  </div>
</div>
  )
}

export default Section5Card