import React from 'react'
import group1 from '../assets/home/section8/Group1.png'
import imgOverlay from '../assets/home/section8/imgOverlay.png'
import playIcon from '../assets/home/section8/play-icon.png'
import CardImg from '../assets/home/section8/business-career.png'

function Section8Card({cardWidth, vidSrc}) {
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
<img className='absolute top-0  ' src={imgOverlay} alt="" />
<img className='absolute  w-12 top-24 left-32' src={playIcon} alt="" />
<img className='absolute w-36 right-12 -bottom-4' src={group1} alt="" />
</div>
</div>
  )
}

export default Section8Card