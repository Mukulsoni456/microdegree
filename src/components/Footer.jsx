import React from 'react'
import fBg1 from '../assets/home/footer/fpart1/fBg1.png'
import overlay43 from '../assets/home/footer/fpart1/overlay43.png'
import Eclipse1 from '../assets/home/footer/fpart1/Eclipse1.png'
import Eclipse2 from '../assets/home/footer/fpart1/Eclipse2.png'
import Eclipse3 from '../assets/home/footer/fpart1/Eclipse3.png'
import phone1 from '../assets/home/footer/fpart1/phone1.png'
import phone2 from '../assets/home/footer/fpart1/phone2.png'
import playstore from '../assets/home/footer/fpart1/playstore.png'
import Qrcode from '../assets/home/footer/fpart1/Qrcode.png'
import {Link} from 'react-scroll'

function Footer() {
  return (
<footer className=''>
  <section className="md:block hidden relative w-full h-fit  overflow-hidden">
    <img className=' object-fit' src={fBg1} alt="" />
    <img className='absolute z-10  -left-28 -bottom-28 ' src={Eclipse1} alt="" />
    <img className='absolute z-10  top-10 right-20' src={Eclipse2} alt="" />
    <img className='absolute z-10  top-40 right-[500px]' src={Eclipse3} alt="" />
    <img className="absolute z-10 top-0 " src={overlay43} alt="" />

    <div className=' absolute top-0 z-20 flex h-full w-full'>
      <div className=" basis-1/2 text-left text-white px-36 py-14 space-y-6">
        <h1 className='text-5xl'><span className="text-5xl">Download</span><br />Our App</h1>
        <p className='text-sm'>Get up to date with the latest technologies and certification with IT skills. Download our app now & be part of fastest growing sector of the Indian economy.</p>
        <div className="flex justify-between items-center">
         <a href="https://play.google.com/store/apps/details?id=org.microdegree.com.app.exp"> <img className='object-contain w-24' src={Qrcode} alt="" /></a>
          <a href="https://play.google.com/store/apps/details?id=org.microdegree.com.app.exp"><img className='w-36 object-contain' src={playstore} alt="" /></a>
        </div>
      </div>

      <div className=" relative basis-1/2 overflow-hidden h-full px-10">
        <img className="absolute  object-contain w-52 -bottom-48 left-[170px]" src={phone1} alt="" />
        <img className="absolute  object-contain w-52 -bottom-36 " src={phone2} alt="" />
      </div>

    </div>

  </section>

  {/* footer section 2 startts from here  */}
  <section className="hidden sm:block h-full w-full bg-[#364045] pt-10 px-20">
  <div className="flex  border-b-[0.1rem] border-gray-600 py-6 ">
    <div className="basis-1/4 text-left text-white space-y-4">
      <h1 className='text-2xl text-left'> <span className='text-center'>Micro </span> <br/> <span className="font-medium text-left">Degree</span></h1>
      <p className="text-xs text-gray-400 ">MicroDegree promotes the idea of practical learning with its various recorded and live courses, where students are trained by industry experts and can enhance their career.</p>
    </div>
    <div className="basis-1/4 flex items-center justify-center h-full">
      <ul className="space-y-1 text-left">
        <li className='font-medium text-gray-200'>Company</li>
        <a href="https://pages.microdegree.work/about.html"><li className='text-sm text-gray-400'>About</li></a>
        <a href="https://courses.microdegree.work/pages/premium-courses"><li className='text-sm text-gray-400'>Courses</li></a>
        <li className='text-sm text-gray-400'>Scholarships</li>
        <li className='text-sm text-gray-400'>Contact us</li>
      </ul>
    </div>
    <div className="basis-1/4 flex items-center justify-center h-full">
      <ul className="space-y-1 text-left">
        <li className='font-medium text-gray-200'>Useful Links</li>
       <a href="https://blog.microdegree.work/"> <li className='text-sm text-gray-400'>Blogs</li></a>
        <a href="https://t.me/microdegreekannada"><li className='text-sm text-gray-400'>Community</li></a>
        <li className='text-sm text-gray-400'>Pricing</li>
        <li className='text-sm text-gray-400'>FAQ</li>
        <li className='text-sm text-gray-400'>Sitemap</li>
      </ul>
    </div>
    <div className="basis-1/4 text-left space-y-2 text-xs text-gray-400 px-10">
      <h3 className='text-gray-300 text-base'>Contact us</h3>
      <p>+918310882795</p>
      <p>hello@microdegree.work</p>
      <p>3rd Floor, Plama Center, Bejai - Kapikad Rd, Mangaluru, Karnataka 575004</p>
    </div>
  </div>
  <div className='py-3 flex justify-between text-gray-400 text-xs'>
    <p>Copyright @2022 Microdegree All rights reserved</p>
    <div className="flex w-64 justify-between ">
      <a href="https://pages.microdegree.work/termsnconditions.html"><p>Terms & Conditions</p></a>
      <a href="https://www.microdegree.work/privacy"><p>Legal & Privacy</p></a>
    </div>
    
  </div>
  </section> 
  {/* mobile version footer  */}
  <div className='sm:hidden bg-[#364045] px-14 p-10 flex flex-col  justify-center text-white  text-left space-y-6'>
    <div className='text-left  space-y-2'>
      <h1 className='text-3xl '>Micro<span className='text-bold'>Degree</span> </h1>
      <p className='text-sm '>MicroDegree promotes the idea of practical learning with its various recorded and live courses, where students are trained by industry experts and can enhance their career.</p>
    </div>

    <div className='text-left text-sm space-y-2'>
      <h2 className='text-lg'>Site Links</h2>
      <a href="https://blog.microdegree.work/"><p className='w-full bg-[#2E3133] p-2'>Blogs</p></a>
      <a href="https://t.me/microdegreekannada"><p className='w-full bg-[#2E3133] p-2'>Community</p></a>
      <a href="https://pages.microdegree.work/review.html"><p className='w-full bg-[#2E3133] p-2'>Reviews</p></a>
    </div>

    <div className='text-[0.8rem]'>
      <h2 className='text-lg font-semibold'>Company</h2>
      <a href="https://courses.microdegree.work/pages/premium-courses"><p>Courses</p></a>
      <p>Scholarship</p>
      <Link to='hero' activeClass="active"
     spy={true}
     smooth={true}
     offset={-100}
     duration={500}>Contact us</Link>

    </div>
  </div>
</footer>
  )
}

export default Footer