import React from 'react'
import amazon_logo from '../assets/home/section6/amazon.png'
import netflix_logo from '../assets/home/section6/netflix.png'
function Section6Card() {
  return (
<div class=" relative min-w-[250px] rounded overflow-hidden shadow-lg p-5 space-y-3">
    <h1 className=' text-left text-red-500 text-md font-bold'>Vinay</h1>
    <div className='flex space-x-1 '> <img className='w-8'  src={amazon_logo} alt="" />
    <p className='text-xs'>Instructor MicroDegree</p> </div>
    <p className=' text-left text-[0.7rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam accusantium odio reprehenderit adipisci error corrupti, doloribus voluptas omnis beatae nisi. Error quidem possimus optio vero distinctio ut delectus quos.</p>

    <div className=' w-full flex justify-between items-center'>
        <div className='space-y-1'>
            <p className='text-bold text-xs'>Cloud Engineer</p>
            <img className='w-24' src={netflix_logo} alt="" />
        </div>
        <p className='text-9xl h-14 mb-3 text-white'>❝</p>
    </div>
    </div>
  )
}

export default Section6Card