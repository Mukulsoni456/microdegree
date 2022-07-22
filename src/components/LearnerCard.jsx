import React from 'react'
import group1 from '../assets/home/section8/Group1.png'
import imgOverlay from '../assets/home/section8/imgOverlay.png'
import playIcon from '../assets/home/section8/play-icon.png'
import CardImg from '../assets/home/section8/business-career.png'
import Group1365 from '../assets/home/section8/Group 1365.png'

function Section8Card({cardWidth, vidSrc, bottomImg}) {
  return (
<div className={`rounded-md relative shadow-lg ${cardWidth} h-full bg-white`}>
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
<div className='w-full h-full absolute top-0 hover:hidden'>
  <div className='w-full h-full relative '></div>

<img className='absolute top-0 ' src={CardImg} alt="" />
<img className='absolute top-0 ' src={imgOverlay} alt="" />
<img className='absolute  w-12 top-24 left-32' src={playIcon} alt="" />
<img className='absolute w-36 right-12 -bottom-4' src={bottomImg} alt="" />
</div>

</div>
</div>
  )
}

export default Section8Card