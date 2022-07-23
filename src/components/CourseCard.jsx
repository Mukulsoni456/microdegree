import React from 'react'
function CourseCard({cardImg, title, category, price, courseLink, desc, course_details }) {
  

  return (

    <>
    <div className='m-auto sm:m-0 relative w-60 h-full bg-white text-left group rounded-md shadow-lg'>
      <div>
  <a href={courseLink}>
    <div className='w-full h-full'>
<img className='w-full h-full object-contain' src={cardImg} alt="" />
  </div>
  <div className='h-full w-full p-4 space-y-3'>
  <div className='flex justify-between'>
        <p className=' bg-green-500 text-center p-1 rounded-md text-xs'>{category}</p>
        <div>Rs. {price}</div>
    </div>
    <p className="font-bold text-lg mb-2 truncate">{title}</p>
    <p className="text-gray-700 text-xs line-clamp-3">{desc}</p>
  </div>
  </a>
  </div>

  {/* layer */}

   <div className='absolute h-full top-0 hidden group-hover:block rounded-md'>
    <div>
  <div className='opacity-95 top-0 bg-gradient-to-br  from-yellow-400 to-red-500 w-full h-full'>
    <div className='text-left px-10 py-3 text-white space-y-3'>
      <h3 className='text-2xl  font-medium'>Course Details</h3>
      <ul className='list-disc space-y-1'>
      {
  course_details.map((para)=>(<li key={para} className='text-sm'>{para}</li>))
}
</ul>
<div>
<a href={courseLink}><button className='border border-white bg-transparent px-2 py-1 text-sm rounded-lg'>View Course</button></a>
</div>
</div>
</div>
    </div>
  </div> 

</div>
</>
  )
}

export default CourseCard