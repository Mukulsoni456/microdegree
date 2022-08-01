import React from 'react'

function Section5Card({title, desc, cardImg, logoImg,  }) {
  return (
    <>
<div className=" h-80 2xl:h-[420px]  mb-8 mx-auto relative w-[280px]  sm:w-60 2xl:w-[350px]  rounded-xl overflow-hidden shadow-lg">
  <div className='w-full h-44 2xl:h-64  '>
  <img className="w-full h-full rounded-xl object-cover p-2" src={cardImg} alt="Sunset in the mountains"/>
  </div>
  <div className="px-4 py-3 h-full bg-gray-100 text-center space-y-2">
    <h1 className="font-bold font-roboto text-lg  2xl:text-2xl mb-2">{title}</h1>
    <p className="text-gray-700 font-roboto font-[500] tracking-widest text-sm 2xl:text-lg p-1">
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