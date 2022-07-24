import React from 'react'
import placement1 from '../assets/home/section5/placement1.png'
import placement2 from '../assets/home/section5/placement2.png'
import placement3 from '../assets/home/section5/placement3.png'
import placement4 from '../assets/home/section5/placement4.png'
import PlacementCard from './PlacementCard'
import edgeLogo from '../assets/home/section5/7edgeLogo.png'
import tataLogo from '../assets/home/section5/tataLogo.png'
import mindstalkLogo from '../assets/home/section5/mindstalkLogo.png'
import tetherLogo from '../assets/home/section5/tetherLogo.png'
function CmnSection2() {
  return (
    <div className='px-10 sm:px-28 md:px-40 2xl:px-44  py-10 w-full h-full space-y-5'>
    <div className='flex items-center space-x-3'><div className='bg-[#FF0049]   p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049] p-[0.15rem]   w-[0.1rem] rounded-xl'></div> <p className='uppercase font-bold text-gray-400 tracking-widest text-xs '>Success Stories</p> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> </div>
<div className="  space-y-10 text-left">

  <h1 className="text-4xl space-x-2 text-gray-600"><span className="font-bold text-gray-700">Placement</span> Diaries</h1>
  <div className="flex w-full justify-between flex-wrap ">
    <PlacementCard title='Mani Nair' desc='Assosciative Software Developer' cardImg={placement1} logoImg={edgeLogo} ></PlacementCard>
    <PlacementCard title='Mani Nair' desc='Software Developer' cardImg={placement2} logoImg={tataLogo} ></PlacementCard>
    <PlacementCard title='Mani Nair' desc='User Interface Designer' cardImg={placement3} logoImg={mindstalkLogo} ></PlacementCard>
    <PlacementCard title='Mani Nair' desc='Solution Architect' cardImg={placement4} logoImg={tetherLogo} ></PlacementCard>
  </div>
</div>
</div>
  )
}

export default CmnSection2