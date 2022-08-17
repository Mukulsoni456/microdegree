import React from 'react'
import imgOverlay from '../assets/homeWebp/section8/imgOverlay.png'
import playIcon from '../assets/homeWebp/section8/play-icon.png'
import CardImg from '../assets/homeWebp/section8/business-career.webp'

 

function Section8Card({ vidSrc, bottomImg, course_name, name, thumbnail, learnerVideo, setLearnerVideo, setLearnerModal, learnerModal}) {
  const handleClick = ()=>{
    setLearnerVideo(vidSrc)
    setLearnerModal(!learnerModal);

  }
  return (
<div onClick={handleClick} className={` group rounded-md relative shadow-lg min-w-[300px] hover:min-w-[350px] xl:min-w-[350px] xl:hover:min-w-[500px]  2xl:min-w-[450px] 2xl:hover:min-w-[550px] duration-400 transition-all ease-in-out h-fit bg-white group`}>
<img src={CardImg} className='w-full rounded-md object-content' alt="" />
{/* <iframe className='h-full'
        src={vidSrc}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      /> */}
<div>


{/* <iframe className=' absolute  top-0 w-full h-full rounded-md' src={vidSrc}></iframe> */}
<div className='w-full h-full absolute top-0 '>
  <div className='w-full h-full relative '></div>

{/* <img className='absolute top-0 ' src={CardImg} alt="" /> */}
 <img className=' w-full h-full top-0 absolute object-cover' src={thumbnail} alt="" />
<img className='absolute w-full h-full top-0  ' src={imgOverlay} alt="" />
<img className='absolute group-hover:top-[140px] group-hover:left-[200px] 2xl:group-hover:top-[160px] 2xl:group-hover:left-[240px] w-12 2xl:group-hover:w-20 2xl:w-16  top-24 left-36 2xl:top-[140px] 2xl:left-[200px] ' src={playIcon} alt="" />
{/* <img className='absolute w-36 right-12 -bottom-4' src={bottomImg} alt="" /> */}
<div className='right-12 2xl:-bottom-8 2xl:right-10 -bottom-4 absolute   bg-white flex items-center justify-center w-fit p-2 rounded-md space-x-2'>
  <img className='w-7 xl:w-8 xl:h-8 2xl:w-8 2xl:h-8 h-7 object-content rounded-full' src={bottomImg} alt="" />
  <div className='text-left'>
    <h3 className='text-[0.7rem] xl:text-sm 2xl:text-base font-bold text-gray-700 '>{name}</h3>
    <p className='text-[0.5rem] xl:text-[0.6rem] 2xl:text-[0.7rem] font-bold text-gray-400 '>{course_name}</p>
  </div>
</div>
</div>

</div>
</div>
  )
}

export default Section8Card