import React from 'react'
import LearnerCard from './LearnerCard'
import Group1 from '../assets/home/section8/Group1.png'
import Group2 from '../assets/home/section8/Group2.png'
import Group3 from '../assets/home/section8/Group3.png'

function CmnSection1() {
  return (
    <div className='space-y-10 py-14'>
        <div className="">
  <h1 className='text-5xl text-gray-800'> <span className="font-bold">Learner's</span> Talk</h1>
</div>
<div  className="p-3 row flex items-center overflow-x-scroll h-[300px]  space-x-10">
<LearnerCard bottomImg={Group1} cardWidth='min-w-[300px] 'hoverWidth='min-w-[350px]' vidSrc='https://www.youtube.com/embed/sK-psHYOe1A'></LearnerCard>
<LearnerCard bottomImg={Group2} cardWidth='min-w-[300px]' hoverWidth='min-w-[350px]' vidSrc='https://www.youtube.com/embed/snR2qTea6Fo'></LearnerCard>
<LearnerCard bottomImg={Group1} cardWidth='min-w-[300px]' hoverWidth='min-w-[350px]' vidSrc='https://www.youtube.com/embed/ltirsj1pTj4'></LearnerCard>
<LearnerCard bottomImg={Group3} cardWidth='min-w-[300px]' hoverWidth='min-w-[350px]' vidSrc='https://www.youtube.com/embed/LaQRNri5zSo'></LearnerCard>
<LearnerCard bottomImg={Group1} cardWidth='min-w-[300px]' hoverWidth='min-w-[350px]'vidSrc="https://www.youtube.com/embed/zhbGbE6N77I"></LearnerCard>
</div>
    </div>
  )
}


export default CmnSection1