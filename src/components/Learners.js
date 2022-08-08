import React, { useRef } from 'react'
import LearnerCard from './LearnerCard'
import Group1 from '../assets/home/section8/Group1.png'
import Group2 from '../assets/home/section8/Group2.png'
import Group3 from '../assets/home/section8/Group3.png'
import samanth from '../assets/home/section8/samanth.jpg'
import samanth2 from '../assets/home/section8/samanth2.jpg'
import keshav from '../assets/home/section8/keshav.jpg'
import keshavimg from '../assets/home/section8/keshavimg.jpg'
import akshay from '../assets/home/section8/akshay.jpg'
import akshay2 from '../assets/home/section8/akshay2.jpg'
import sakshya from '../assets/home/section8/sakshya.jpg'
import sakshya2 from '../assets/home/section8/sakshya2.jpg'
import Thousif from '../assets/home/section8/Thousif.jpg'
import Thousif2 from '../assets/home/section8/Thousif2.jpg'
function CmnSection1() {



  return (
    <div className='space-y-5 2xl:space-y-0 py-14 flex flex-col items-center'> 

              <div className='flex items-center space-x-3'><div className='bg-[#FF0049]   p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049] p-[0.15rem]   w-[0.1rem] rounded-xl'></div> <p className='uppercase font-bold text-gray-400 tracking-[0.3em] text-xs '>Testimonials</p> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> </div>


        <div className="">
  <h1 className='text-4xl xl:text-6xl 2xl:text-6xl text-gray-700'> <span className="font-bold">Learner's</span> Talk</h1>
</div>
<div  className="p-1 w-full row flex items-center overflow-x-scroll h-[280px] xl:h-[400px]  2xl:h-[450px] scrollbar-hide  space-x-10">
<LearnerCard   bottomImg={akshay} thumbnail={akshay2} name='Akshay Prabhu' course_name='Python Course Student'  vidSrc='https://www.youtube.com/embed/sK-psHYOe1A'></LearnerCard>
<LearnerCard  bottomImg={keshav} thumbnail={keshavimg} name='Keshav ' course_name='Python Course Student ' vidSrc='https://www.youtube.com/embed/snR2qTea6Fo'></LearnerCard>
<LearnerCard  bottomImg={sakshya}  thumbnail={sakshya2} name='Sakshya Shetty' course_name='Automation Testing Course Student' vidSrc='https://www.youtube.com/embed/ltirsj1pTj4'></LearnerCard>
<LearnerCard  bottomImg={Thousif} thumbnail={Thousif2} name='Thousif N M' course_name='Job Mela Candidate' vidSrc='https://www.youtube.com/embed/LaQRNri5zSo'></LearnerCard>
<LearnerCard  bottomImg={samanth} thumbnail={samanth2} name='Samanth Kumar ' course_name='Fullstack Developer Course ' vidSrc="https://www.youtube.com/embed/zhbGbE6N77I"></LearnerCard>
</div>
    </div>
  )
}


export default CmnSection1