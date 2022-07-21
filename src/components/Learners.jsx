import React from 'react'
import LearnerCard from './LearnerCard'

function CmnSection1() {
  return (
    <div className='space-y-10 py-14'>
        <div className="">
  <h1 className='text-5xl text-gray-800'> <span className="font-bold">Learner's</span> Talk</h1>
</div>
<div  className="p-3 row flex items-center overflow-x-scroll space-x-10">
<LearnerCard cardWidth='min-w-[300px]' vidSrc='https://www.youtube.com/embed/E7wJTI-1dvQ'></LearnerCard>
<LearnerCard cardWidth='min-w-[300px]' vidSrc='https://www.youtube.com/embed/E7wJTI-1dvQ'></LearnerCard>
<LearnerCard cardWidth='min-w-[350px]' vidSrc='https://www.youtube.com/embed/E7wJTI-1dvQ'></LearnerCard>
<LearnerCard cardWidth='min-w-[300px]' vidSrc='https://www.youtube.com/embed/E7wJTI-1dvQ'></LearnerCard>
<LearnerCard cardWidth='min-w-[300px]' vidSrc="https://www.youtube.com/embed/E7wJTI-1dvQ"></LearnerCard>
</div>
    </div>
  )
}

export default CmnSection1