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
    <div className=' p-10 sm:pl-28 sm:py-20 w-full h-full flex items-start justify-between '>

  <div className=" w-full sm:basis-2/5 sm:min-w-[500px]  text-left space-y-3 ">

  <div className='flex items-center space-x-3'><div className='bg-[#FF0049]   p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049] p-[0.15rem] h-[0.1rem] w-[0.1rem] rounded-xl'></div> <p className='uppercase font-bold text-gray-400 tracking-widest text-xs '>Expert Trainers</p> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> </div>

    <h1 className='text-4xl 2xl:text-6xl text-gray-800 tracking-wider'><span className="font-bold">Industry</span> <span>Trainers.</span></h1>
    <p className="text-sm 2xl:text-lg text-gray-700 w-[500px] ">Being one of the pioneers in teaching IT Skills in regional language, you will be learning these skills from our own ಕನ್ನಡಿಗ Trainers, who are industry experts with more than 12 years of experience.</p>
  </div>
  <div className=' hidden  w-[800px] 2xl:w-[1000px] -mr-[120px] md:flex overflow-x-scroll space-x-7'>

    <TrainerCard title='Vinay' top_logo={amazon_logo} desc='Vinay raj is an industry expert in cloud computing with more than 8+ years of experience. He has been a technical contributor to many large-scale projects at Walmart.  He is an expert at architecting, building, and maintaining complete DevOps/AWS/IoT/Service Management solutions using AWS technology. 
He has trained thousands of learners on latest tools required to build and deploy modern cloud-native applications with his vast experience as a senior system engineer. 
Most importantly he is a great communicator by nature and strive to make training sessions interesting, engaging and enjoyable for all learners.' profession='Cloud Engineer' bottom_logo={walmart} cardColor='bg-gray-100' propColor='text-white'></TrainerCard>


    <TrainerCard title='Mithun' top_logo={powerBi_logo} desc='Mithun S is a senior cloud engineer with more than 8+ years of experience, working at Harman, a highly successful datacentre. He has an expertise in AWS best practices & also specializes in architecting, deploying highly available clusters and other areas of IT infrastructure. 
Being an integral member of the team in serving customers, he is thoroughly trained and a highly skilled trainer and will provide you with the best technical skill and have expert knowledge to manage any AWS environments.' bottom_logo={harman} cardColor='bg-white' profession=' Senior Cloud Engineer' propColor='text-gray-200'></TrainerCard>



    <TrainerCard title='Ananth Krishna' top_logo={mern_logo} desc='Ananth Krishna is a Senior Security Engineer at Match Move. He comes with a rich working experience of more than 6+ years. Being an expert in DevOps security operations he explains curriculum in a very easy manner with lots of live examples and proper use of their tools. 
Having the experience of working in the industry for so many years, handling complex projects he is always able to bridge the gap between theory and practice. His teaching style is direct, simple and fast, this helps learners understand the concepts better.' profession='Senior Security Engineer' bottom_logo={matchmove} cardColor='bg-white' propColor='text-gray-200'></TrainerCard>

  </div>
</div>
  )
}

export default HomeSection6