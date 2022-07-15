import React from 'react'
function CourseCard({cardImg, title, category, price, courseLink }) {
  return (
<div className=" m-auto sm:m-0 w-60 min-h-[350px] h-full rounded overflow-hidden shadow-lg">
  <a href={courseLink}>
  <img className="w-full h-[160px]" src={cardImg} alt="Sunset in the mountains"/>
  <div className="px-4 py-3 h-full bg-white text-left space-y-2">
    <div className='flex justify-between'>
        <p className=' bg-green-500 text-center p-1 rounded-md text-xs'>{category}</p>
        <div>Rs. {price}</div>
    </div>
    <div className="font-bold text-lg mb-2 ">{title}</div>
    <p className="text-gray-700 text-xs">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  </a>
</div>
  )
}

export default CourseCard