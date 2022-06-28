import React from 'react'
// import courseImg1 from '../assets/home/Section2/courseImg1.pmg'
import courseImg2 from '../assets/home/Section2/courseImg2.png'
function CourseCard({cardImg, title, category, price }) {
  return (
<div class=" m-auto sm:m-0 w-60 rounded overflow-hidden shadow-lg">
  <img class="w-full" src={cardImg} alt="Sunset in the mountains"/>
  <div class="px-4 py-3 bg-white text-left space-y-2">
    <div className='flex justify-between'>
        <p className=' bg-green-500 text-center p-1 rounded-md text-xs'>{category}</p>
        <div>Rs. {price}</div>
    </div>
    <div class="font-bold text-lg mb-2">{title}</div>
    <p class="text-gray-700 text-xs">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
</div>
  )
}

export default CourseCard