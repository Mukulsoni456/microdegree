import React, { useRef } from 'react'
import LearnerCard from './LearnerCard'

import samanth from '../assets/homeWebp/section8/samanth.webp'
import samanth2 from '../assets/homeWebp/section8/samanth2.webp'
import keshav from '../assets/homeWebp/section8/keshav.webp'
import keshavimg from '../assets/homeWebp/section8/keshavimg.webp'
import akshay from '../assets/homeWebp/section8/akshay.webp'
import akshay2 from '../assets/homeWebp/section8/akshay2.webp'
import sakshya from '../assets/homeWebp/section8/sakshya.webp'
import sakshya2 from '../assets/homeWebp/section8/sakshya2.webp'
import Thousif from '../assets/homeWebp/section8/Thousif.webp'
import Thousif2 from '../assets/homeWebp/section8/Thousif2.webp'
function CmnSection1({setLearnerVideo, setLearnerModal, learnerModal,learnerVideo}) {



  return (
    <div className='space-y-5 2xl:space-y-0 py-14 flex flex-col items-center'> 

              <div className='flex items-center space-x-3'><div className='bg-[#FF0049]   p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049] p-[0.15rem]   w-[0.1rem] rounded-xl'></div> <p className=' font-bold text-gray-400 tracking-[0.3em] text-xs '>Testimonials</p> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> </div>


        <div className="">
  <h1 className='text-4xl xl:text-6xl 2xl:text-6xl text-gray-700'> <span className="font-bold">Learner's</span> Talk</h1>
</div>
<div  className="p-1 w-full row flex items-center overflow-x-scroll h-[280px] xl:h-[400px]  2xl:h-[450px] scrollbar-hide  space-x-10">
<LearnerCard setLearnerModal={setLearnerModal} learnerModal={learnerModal} learnerVideo={learnerVideo} setLearnerVideo={setLearnerVideo} bottomImg={akshay} thumbnail={akshay2} name='Akshay Prabhu' course_name='Python Course Student'  vidSrc='https://www.youtube.com/embed/sK-psHYOe1A'></LearnerCard>
<LearnerCard setLearnerModal={setLearnerModal} learnerModal={learnerModal} setLearnerVideo={setLearnerVideo} bottomImg={keshav} thumbnail={keshavimg} name='Keshav ' course_name='Python Course Student ' vidSrc='https://www.youtube.com/embed/snR2qTea6Fo'></LearnerCard>
<LearnerCard setLearnerModal={setLearnerModal} learnerModal={learnerModal} setLearnerVideo={setLearnerVideo} bottomImg={sakshya}  thumbnail={sakshya2} name='Sakshya Shetty' course_name='Automation Testing Course Student' vidSrc='https://www.youtube.com/embed/ltirsj1pTj4'></LearnerCard>
<LearnerCard setLearnerModal={setLearnerModal} learnerModal={learnerModal} setLearnerVideo={setLearnerVideo} bottomImg={Thousif} thumbnail={Thousif2} name='Thousif N M' course_name='Job Mela Candidate' vidSrc='https://www.youtube.com/embed/LaQRNri5zSo'></LearnerCard>
<LearnerCard setLearnerModal={setLearnerModal} learnerModal={learnerModal} setLearnerVideo={setLearnerVideo} bottomImg={samanth} thumbnail={samanth2} name='Samanth Kumar ' course_name='Fullstack Developer Course ' vidSrc="https://www.youtube.com/embed/zhbGbE6N77I"></LearnerCard>
</div>
    </div>
  )
}


export default CmnSection1