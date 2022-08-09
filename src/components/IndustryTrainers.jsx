import React from 'react'
import TrainerCard from "./TrainerCard";
import amazon_logo from '../assets/home/section6/amazon.png'
import powerBi_logo from '../assets/home/section6/powerBi.png'
import mern_logo from '../assets/home/section6/mern.png'
import matchmove from '../assets/home/section6/matchmove.png'
import walmart from '../assets/home/section6/walmart.png'
import harman from '../assets/home/section6/harman.png'

function HomeSection6() {
  return (
    <div>
    <div className=' hidden  p-9 sm:pl-28 sm:py-20 w-full h-full sm:flex items-start justify-between '>

  <div className=" w-full sm:basis-2/5 sm:min-w-[500px]  text-left space-y-3 ">

  <div className='flex items-center space-x-3'><div className='bg-[#FF0049]   p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049] p-[0.15rem] h-[0.1rem] w-[0.1rem] rounded-xl'></div> <p className=' font-bold text-gray-400 tracking-[0.3rem] text-xs '>Expert Trainers</p> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> </div>

    <h1 className=' text-4xl xl:text-5xl whitespace-nowrap 2xl:text-6xl text-gray-700 tracking-wide'><span className="font-bold">Industry</span> <span>Trainers.</span></h1>
    <p className="text-sm xl:text-sm xl:w-[440px] 2xl:text-base 2xl:w-[500px] text-gray-700 sm:w-[420px] ">Get an opportunity to learn directly from these industry veterans who work at top companies. They have joined our mission to give back to the Kannada community. Their vision is to empower every Kannadiga to get their dream job.</p>
  </div>
  <div className=' hidden  w-[800px] xl:w-[900px] 2xl:w-[920px] -mr-[120px] md:flex overflow-x-scroll space-x-7'>

    <TrainerCard title='Vinay' top_logo={amazon_logo} desc='Vinay sir is an industry leading trainer with wide experience teaching students from top companies. He works as a cloud architect  managing the network infrastructure.' profession='Cloud Engineer' bottom_logo={walmart} cardColor='bg-gray-100' propColor='text-white'></TrainerCard>


    <TrainerCard title='Mithun' top_logo={powerBi_logo} desc='Mithun sir is the top architect in his organization. He has expertise in scaling systems to millions of web traffic.' bottom_logo={harman} cardColor='bg-white' profession=' Senior Cloud Engineer' propColor='text-gray-200'></TrainerCard>



    <TrainerCard title='Ananth Krishna' top_logo={mern_logo} desc='Ananth krishna sir is a udemy top AWS trainer. He has speciality experience in training students from US and other countries.' bottom_logo={matchmove} cardColor='bg-white' propColor='text-gray-200'></TrainerCard>

{/* added for scroll functionability */}
<div className='min-w-[80px]'>.</div>

  </div>
</div>
<div className='sm:hidden px-8 py-10 space-y-8'>
<div className=" w-full flex flex-col justify-center items-start text-left space-y-3 ">

<div className='flex items-center space-x-3'><div className='bg-[#FF0049]   p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049] p-[0.15rem] h-[0.1rem] w-[0.1rem] rounded-xl'></div> <p className=' font-bold text-gray-400 tracking-[0.3rem] text-xs '>Expert Trainers</p> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> </div>

  <h1 className=' text-4xl  whitespace-nowrap text-gray-700 tracking-wide'><span className="font-bold">Industry</span> <span>Trainers.</span></h1>
  <p className="text-sm  text-gray-700  ">Get an opportunity to learn directly from these industry veterans who work at top companies. They have joined our mission to give back to the Kannada community. Their vision is to empower every Kannadiga to get their dream job.</p>
</div>
<div className='min-w-{100%} space-x-5 flex overflow-x-scroll'>
<TrainerCard title='Vinay' top_logo={amazon_logo} desc='Vinay sir is an industry leading trainer with wide experience teaching students from top companies. He works as a cloud architect  managing the network infrastructure.' profession='Cloud Engineer' bottom_logo={walmart} cardColor='bg-gray-100' propColor='text-white'></TrainerCard>


<TrainerCard title='Mithun' top_logo={powerBi_logo} desc='Mithun sir is the top architect in his organization. He has expertise in scaling systems to millions of web traffic.' bottom_logo={harman} cardColor='bg-white' profession=' Senior Cloud Engineer' propColor='text-gray-200'></TrainerCard>



<TrainerCard title='Ananth Krishna' top_logo={mern_logo} desc='Ananth krishna sir is a udemy top AWS trainer. He has speciality experience in training students from US and other countries.' bottom_logo={matchmove} cardColor='bg-white' propColor='text-gray-200'></TrainerCard>

{/* added for scroll functionability */}
<div className='min-w-[80px]'>.</div>
</div>
</div>
</div>
  )
}

export default HomeSection6