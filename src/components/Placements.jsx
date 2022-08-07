import React from 'react'
import placement1 from '../assets/home/section5/placement1.png'
import placement2 from '../assets/home/section5/placement2.png'
import placement3 from '../assets/home/section5/placement3.png'
import placement4 from '../assets/home/section5/placement4.png'
import jeevan from '../assets/home/section5/jeevan.jpeg'
import ajay from '../assets/home/section5/ajay.jpeg'
import madhushree from '../assets/home/section5/madhushree.jpeg'
import pratik from '../assets/home/section5/pratik.jpeg'
import sanjana  from '../assets/home/section5/sanjana.jpg'
import pallavi  from '../assets/home/section5/pallavi.jpg'
import mallikarjun  from '../assets/home/section5/malikarjun.jpg'
import PlacementCard from './PlacementCard'
import edgeLogo from '../assets/home/section5/7edgeLogo.png'
import tataLogo from '../assets/home/section5/tataLogo.png'
import mindstalkLogo from '../assets/home/section5/mindstalkLogo.png'
import tetherLogo from '../assets/home/section5/tetherLogo.png'
function CmnSection2() {
  return (
    <div className='px-10 sm:px-28 xl:px-20  2xl:px-20  py-10 w-full h-full space-y-5'>
    <div className='flex items-center space-x-3'><div className='bg-[#FF0049]   p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049] p-[0.15rem]   w-[0.1rem] rounded-xl'></div> <p className=' font-bold text-gray-400 tracking-[0.4em] text-xs xl:text-sm 2xl:text-base '>Success Stories</p> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> </div>
<div className="  space-y-10 text-left">

  <h1 className="text-4xl sm:text-5xl 2xl:text-6xl  sm:tracking-[0.04em] space-x-2 text-gray-800"><span className="font-[600] text-gray-700">Placement</span> Diaries</h1>
  <div className="flex w-full justify-between flex-wrap sm:flex-nowrap sm:overflow-x-scroll sm:space-x-3">
    <PlacementCard title='Jeevan Kumar' desc='Cloud Engineer'  cardImg={jeevan} logoImg='https://gitlab.niveussolutions.com/uploads/-/system/appearance/header_logo/1/niveus_logo.png' ></PlacementCard>
    <PlacementCard title='Pratik Bhusanur' desc='DevOps Engineer' cardImg={pratik} logoImg='https://boomi.com/wp-content/uploads/2016/09/lt-infotech-logo.png' ></PlacementCard>
    <PlacementCard title='Madhushree' desc='Test Engineer' cardImg={madhushree} logoImg='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/qqrurs64kojuhxy8kyyr' ></PlacementCard>
    <PlacementCard title='Sanjana Ulvi' desc='Tech Support Engineer' cardImg={sanjana} logoImg='https://in.glowtouch.com/wp-content/uploads/2019/03/diyaLogo_GTCompany_Website.png' ></PlacementCard>
    <PlacementCard title='Pallavi Hebbar' desc='Scrum Master' cardImg={pallavi} logoImg='https://mangalore.biz/wp-content/uploads/2020/07/logo-1.png' ></PlacementCard>
    <PlacementCard title='Mallikarjun J P' desc='Software Developer' cardImg={mallikarjun} logoImg='https://images.thecompanycheck.com/companylogo/VNC_DIGITAL_SERVICES_PRIVATE_LIMITED.png' ></PlacementCard>

  </div>
</div>
<div>
<a href="https://courses.microdegree.work/pages/premium-courses">
      <button className="h-fit sm:hidden bg-[#FF0049] text-white text-base rounded-md px-10 py-3 ">View More</button>
      </a>
      </div>
</div>
  )
}

export default CmnSection2