import React from 'react'
import jeevan from '../assets/homeWebp/section5/jeevan.webp'
import madhushree from '../assets/homeWebp/section5/madhushree.webp'
import pratik from '../assets/homeWebp/section5/pratik.webp'
import sanjana  from '../assets/homeWebp/section5/sanjana.webp'
import pallavi  from '../assets/homeWebp/section5/pallavi.webp'
import mallikarjun  from '../assets/homeWebp/section5/malikarjun.webp'
import PlacementCard from './PlacementCard'

function CmnSection2() {
  return (
    <div className='px-10 md:px-14 xl:px-18  2xl:px-20  py-10 w-full h-full space-y-5'>
    <div className='flex items-center space-x-3'><div className='bg-[#FF0049]   p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049] p-[0.15rem]   w-[0.1rem] rounded-xl'></div> <p className=' font-bold text-gray-400 tracking-[0.4em] text-xs xl:text-sm 2xl:text-base '>Success Stories</p> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> </div>
<div className="  space-y-10 text-left">
  <div className='w-full justify-between flex'>
  <h1 className="text-4xl sm:text-5xl 2xl:text-6xl  sm:tracking-[0.04em] space-x-2 text-gray-800"><span className="font-[600] text-gray-700">Placement</span> Diaries</h1>
  <div>
<a href="https://www.microdegree.work/testimonial">
      <button className="h-fit hidden sm:block  bg-[#FF0049] text-white text-base rounded-md px-5 py-2 ">View More</button>
      </a>
      </div>
  </div>
  <div className="flex w-full justify-between flex-nowrap overflow-x-scroll space-x-3">
    <PlacementCard title='Jeevan Kumar' desc='Cloud Engineer'  cardImg={jeevan} logoImg='https://gitlab.niveussolutions.com/uploads/-/system/appearance/header_logo/1/niveus_logo.png' ></PlacementCard>
    <PlacementCard title='Pratik Bhusanur' desc='DevOps Engineer' cardImg={pratik} logoImg='https://boomi.com/wp-content/uploads/2016/09/lt-infotech-logo.png' ></PlacementCard>
    <PlacementCard title='Madhushree' desc='Test Engineer' cardImg={madhushree} logoImg='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/qqrurs64kojuhxy8kyyr' ></PlacementCard>
    <PlacementCard title='Sanjana Ulvi' desc='Tech Support Engineer' cardImg={sanjana} logoImg='https://in.glowtouch.com/wp-content/uploads/2019/03/diyaLogo_GTCompany_Website.png' ></PlacementCard>
    <PlacementCard title='Pallavi Hebbar' desc='Scrum Master' cardImg={pallavi} logoImg='https://mangalore.biz/wp-content/uploads/2020/07/logo-1.png' ></PlacementCard>
    <PlacementCard title='Mallikarjun J P' desc='Software Developer' cardImg={mallikarjun} logoImg='https://images.thecompanycheck.com/companylogo/VNC_DIGITAL_SERVICES_PRIVATE_LIMITED.png' ></PlacementCard>

  </div>
</div>
<div>
<a href="https://www.microdegree.work/testimonial">
      <button className="h-fit sm:hidden bg-[#FF0049] text-white text-base rounded-md px-10 py-3 ">View More</button>
      </a>
      </div>
</div>
  )
}

export default CmnSection2