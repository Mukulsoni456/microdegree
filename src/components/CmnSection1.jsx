import React from 'react'
import Section8Card from './Section8Card'

function CmnSection1() {
  return (
    <div className='space-y-10 py-14'>
        <div className="">
  <h1 className='text-5xl text-gray-800'> <span className="font-bold">Learner's</span> Talk</h1>
</div>
<div  className="p-3 row flex items-center overflow-x-scroll space-x-10">
<Section8Card cardWidth='min-w-[300px]' vidSrc='https://www.youtube.com/embed/E7wJTI-1dvQ'></Section8Card>
<Section8Card cardWidth='min-w-[300px]' vidSrc='https://www.youtube.com/embed/E7wJTI-1dvQ'></Section8Card>
<Section8Card cardWidth='min-w-[350px]' vidSrc='https://www.youtube.com/embed/E7wJTI-1dvQ'></Section8Card>
<Section8Card cardWidth='min-w-[300px]' vidSrc='https://www.youtube.com/embed/E7wJTI-1dvQ'></Section8Card>
<Section8Card cardWidth='min-w-[300px]' vidSrc="https://www.youtube.com/embed/E7wJTI-1dvQ"></Section8Card>
</div>
    </div>
  )
}

export default CmnSection1