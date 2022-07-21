import { CheckIcon } from '@heroicons/react/solid'
import React from 'react'

function PricingCard({cardColor, Price, title, desc, textColor }) {
  return (
    <div className={`w-64 h-full p-5 bg-blue-200 ${cardColor} text-left text-sm space-y-4 rounded-md`}>
        <div className=''>
            <p className='flex items-center text-sm '><span className={`text-4xl font-bold ${textColor} mr-2`} >{Price}</span>/month</p>
        </div>
        <div className='pr-5 space-y-5'>
        <div className="space-y-1">
            <h3 className='text-lg font-bold '>{title}</h3>
            <p>{desc}</p>
        </div>
        <div className='space-y-2 text-[0.8rem]' > 
        <div className='flex space-x-2'> <CheckIcon className='w-4 text-green-600'></CheckIcon>
          <p>Lorem ipsum dolor sit amet. </p></div>
        <div className='flex space-x-2'> <CheckIcon className='w-4 text-green-600'></CheckIcon>
          <p>Lorem ipsum dolor sit amet. </p></div>
        <div className='flex space-x-2'> <CheckIcon className='w-4 text-green-600'></CheckIcon>
          <p>Lorem ipsum dolor sit amet. </p></div>
        <div className='flex space-x-2'> <CheckIcon className='w-4 text-green-600'></CheckIcon>
          <p>Lorem ipsum dolor sit amet. </p></div>
        </div>
        </div>
        <button className='bg-white px-2 py-1 w-full text-[0.8rem] rounded-md' >Start Free Course</button>

        
    </div>
  )
}

export default PricingCard