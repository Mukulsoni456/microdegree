import React from 'react'
import TrainerCard from "./TrainerCard";
import amazon_logo from '../assets/home/section6/amazon.png'
import netflix_logo from '../assets/home/section6/netflix.png'
import mern_logo from '../assets/home/section6/mern.png'
import accenture_logo from '../assets/home/section6/accenture.png'
import flipkart_logo from '../assets/home/section6/flipkart.png'
import powerBi_logo from '../assets/home/section6/powerBi.png'

function HomeSection6() {
  return (
    <div className=' p-10 sm:pl-28 sm:py-20 w-full h-full flex items-center justify-between '>

  <div className=" w-full sm:basis-2/5 sm:min-w-[500px] text-left space-y-3 ">

  <div className='flex items-center space-x-3'><div className='bg-[#FF0049]   p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049] p-[0.15rem] h-[0.1rem] w-[0.1rem] rounded-xl'></div> <p className='uppercase font-bold text-gray-400 tracking-widest text-xs '>Expert Trainers</p> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> </div>

    <h1 className='text-4xl'><span className="text-bold">Industry</span> <span>Trainers.</span></h1>
    <p className="sm">Jumpstart your career in IT by getting the best training from industry experts, with more than 10 years of experience working in companies like</p>
  </div>
  <div className=' hidden  w-[800px] -mr-[120px] md:flex overflow-x-hidden space-x-7'>
    <TrainerCard title='Vinay' top_logo={amazon_logo} desc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, ullam. Fugit reprehenderit veritatis rerum delectus quae, adet quam, Sunt architecto perspiciatis vel dolores itaque' profession='Power BI Developer' bottom_logo={netflix_logo} cardColor='bg-gray-100' propColor='text-white'></TrainerCard>

    <TrainerCard title='Suhas' top_logo={powerBi_logo} desc='Lorem ipsum dolor sit amet consectetur, adipisiit reprehenderit veritatis rerum delectus quae, ad quam, iusto, omnis alias repudiandae. Sunt architecto perspiciatis vel dolores itaque' profession='Power BI Developer' bottom_logo={accenture_logo} cardColor='bg-white' propColor='text-gray-200'></TrainerCard>

    <TrainerCard title='Vinod' top_logo={mern_logo} desc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, ullam. Fugisfsss sfsfsf sgdgjhkhjk sdht reprehenderit veritatis rerum delectus quae, adipisci fuga cum it' profession='Power BI Developer' bottom_logo={flipkart_logo} cardColor='bg-white' propColor='text-gray-200'></TrainerCard>

  </div>
</div>
  )
}

export default HomeSection6