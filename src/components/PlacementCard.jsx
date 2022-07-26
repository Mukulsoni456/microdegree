import React from 'react'

function Section5Card({title, desc, cardImg, logoImg,  }) {
  return (
    <>
<div className=" h-80  mb-8 mx-auto relative w-[280px] sm:w-60 2xl:w-[300px]   rounded overflow-hidden shadow-lg">
  <div className='w-full h-44'>
  <img className="w-full h-full object-cover" src={cardImg} alt="Sunset in the mountains"/>
  </div>
  <div className="px-4 py-3 h-full bg-gray-100 text-center space-y-2">
    <h1 className="font-bold text-lg mb-2">{title}</h1>
    <p className="text-gray-700 font-normal tracking-wider text-sm p-1">
        {desc}
    </p>
    <div className='flex h-14 items-center justify-center'>
    <img className='w-24 h-10 flex items-center object-contain' src={logoImg} alt="" />
    </div>
  </div>
</div>

</>
  )
}

export default Section5Card