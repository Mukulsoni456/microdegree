import React from 'react'
import group1 from '../assets/home/section8/Group1.png'
import imgOverlay from '../assets/home/section8/imgOverlay.png'
import playIcon from '../assets/home/section8/play-icon.png'
import CardImg from '../assets/home/section8/business-career.png'
import pratik from '../assets/home/section5/pratik.jpeg'
 

function Section8Card({ vidSrc, bottomImg, course_name, name}) {
  return (
<div className={`rounded-md relative shadow-lg min-w-[300px] hover:min-w-[350px] 2xl:min-w-[350px] 2xl:hover:min-w-[400px] duration-400 transition-all ease-in-out h-fit bg-white group`}>
<img src={CardImg} className='w-full rounded-md object-content' alt="" />
{/* <iframe className='h-full'
        src={vidSrc}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      /> */}
<div>


<iframe className=' absolute top-0 w-full h-full rounded-md' src={vidSrc}></iframe>
<div className='w-full h-full absolute top-0 group-hover:hidden'>
  <div className='w-full h-full relative '></div>

{/* <img className='absolute top-0 ' src={CardImg} alt="" /> */}
<img className='absolute top-0 ' src={imgOverlay} alt="" />
<img className='absolute  w-12 top-24 left-32' src={playIcon} alt="" />
{/* <img className='absolute w-36 right-12 -bottom-4' src={bottomImg} alt="" /> */}
<div className='right-12 -bottom-4 absolute  bg-white flex items-center justify-center w-fit p-2 rounded-md space-x-2'>
  <img className='w-7 h-7 object-content rounded-full' src={bottomImg} alt="" />
  <div className='text-left'>
    <h3 className='text-[0.7rem] font-bold text-gray-700 '>{name}</h3>
    <p className='text-[0.5rem] font-bold text-gray-400 '>{course_name}</p>
  </div>
</div>
</div>

</div>
</div>
  )
}

export default Section8Card