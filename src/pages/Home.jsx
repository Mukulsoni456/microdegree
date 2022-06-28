import React from "react";
import Navbar from "../components/Navbar";
import elipse2 from "../assets/home/background/Ellipse 2.png";
import elipse3 from "../assets/home/background/Ellipse 3.png";
import elipse4 from "../assets/home/background/Ellipse 4.png";
import elipse5 from "../assets/home/background/Ellipse 5.png";
import elipse6 from "../assets/home/background/Ellipse 6.png";
import elipse7 from "../assets/home/background/Ellipse 7.png";
import elipse8 from "../assets/home/background/Ellipse 8.png";
import elipse9 from "../assets/home/background/Ellipse 9.png";
import elipse10 from "../assets/home/background/Ellipse 10.png";
import elipse11 from "../assets/home/background/Ellipse 11.png";
import heroImage from "../assets/home/heroSection/Rectangle 102.png";
import Group19 from "../assets/home/heroSection/Group 19.png";
import Group1351 from "../assets/home/heroSection/Group 1351.png";
import Group1416 from "../assets/home/heroSection/Group 1416.png";
import Group1417 from "../assets/home/heroSection/Group 1417.png";
import Group1418 from "../assets/home/heroSection/Group 1418.png";
import courseImg1 from '../assets/home/Section2/courseImg1.png'
import courseImg2 from '../assets/home/Section2/courseImg2.png'
import courseImg3 from '../assets/home/Section2/courseImg3.png'
import courseImg4 from '../assets/home/Section2/courseImg4.png'
import CourseCard from "../components/CourseCard";
import Section3Card from "../components/Section3Card";
import Section5Card from "../components/Section5Card";
import logo from '../assets/navbar/MicroDegree Web.png'
import brandLogo1 from '../assets/home/Section2/brandLogo1.png'
import brandLogo2 from '../assets/home/Section2/brandLogo2.png'
import brandLogo3 from '../assets/home/Section2/brandLogo3.png'
import brandLogo4 from '../assets/home/Section2/brandLogo4.png'
import brandLogo5 from '../assets/home/Section2/brandLogo5.png'
import section4Img from '../assets/home/section4/section4Img.png'
import placement1 from '../assets/home/section5/placement1.png'
import placement2 from '../assets/home/section5/placement2.png'
import placement3 from '../assets/home/section5/placement3.png'
import placement4 from '../assets/home/section5/placement4.png'
import edgeLogo from '../assets/home/section5/7edgeLogo.png'
import tataLogo from '../assets/home/section5/tataLogo.png'
import mindstalkLogo from '../assets/home/section5/mindstalkLogo.png'
import tetherLogo from '../assets/home/section5/tetherLogo.png'
import Section6Card from "../components/Section6Card";
import imageHolder from '../assets/home/section7/Image Holder.png'
import section8Img1 from '../assets/home/section8/Group 1362.png'
import section8Img2 from '../assets/home/section8/Group 1363.png'
import section8Img3 from '../assets/home/section8/Group 1364.png'
import section8Img4 from '../assets/home/section8/Group 1365.png'
import section8Img5 from '../assets/home/section8/Group 1366.png'
import section9Img1 from '../assets/home/section9/section9Img1.png'
import section9Img2 from '../assets/home/section9/section9Img2.png'
import section9Img3 from '../assets/home/section9/section9Img3.png'
import section9Img4 from '../assets/home/section9/section9Img4.png'
import rectangle40 from '../assets/home/section10/rectangle40.png'
import rectangle41 from '../assets/home/section10/rectangle41.png'
import section10bg from '../assets/home/section10/section10bg.png'
import fBg1 from '../assets/home/footer/fpart1/fBg1.png'
import overlay43 from '../assets/home/footer/fpart1/overlay43.png'
import Eclipse1 from '../assets/home/footer/fpart1/Eclipse1.png'
import Eclipse2 from '../assets/home/footer/fpart1/Eclipse2.png'
import Eclipse3 from '../assets/home/footer/fpart1/Eclipse3.png'
import phone1 from '../assets/home/footer/fpart1/phone1.png'
import phone2 from '../assets/home/footer/fpart1/phone2.png'
import playstore from '../assets/home/footer/fpart1/playstore.png'
import Qrcode from '../assets/home/footer/fpart1/Qrcode.png'
import { useState } from "react";
import { useEffect } from "react";
import Modal from "../components/Modal";


// test json file 

const Course = [
  {
    id:1,
    img: require('../assets/home/Section2/courseImg1.png'),
    category:'Cloud Computing',
    title:'AWS & DevOps Certification',
    price:'6000',
    status:'live',
  },
  {
    id:1,
    img: require('../assets/home/Section2/courseImg2.png'),
    category:'Data Science',
    title:'Power BI + Tableau Developer Course',
    price:'20,000',
    status:'live',
  },
  {
    id:1,
    img: require('../assets/home/Section2/courseImg3.png'),
    category:'Data Science',
    title:'Python - Live Certification',
    price:'4,900',
    status:'Hybrid',
  },
  {
    id:1,
    img: require('../assets/home/Section2/courseImg4.png'),
    category:'DataBase',
    title:'MySQL Certification',
    price:'FREE',
    status:'pre recorded',
  },
]


function Home() {

const [status, setStatus] = useState('')
const [courseOutput, setCourseOutput] = useState(Course)
const [viewModal, setViewModal] = useState(false)


useEffect(() => {

    if(status==''){
      setCourseOutput(Course)
    }
    else{
      setCourseOutput(Course.filter((item)=>item.status.toLowerCase().includes(status)))
    }
}, [status])

  return (
    <div className="relative overflow-x-hidden">
      <div className='space-y-4'>
        <img className="w-52 absolute top-10 -left-20  " src={elipse2} alt="" />
        <img className="w-52 absolute top-40 right-0" src={elipse3} alt="" />
        <img className="w-52 absolute top-60 left-96" src={elipse4} alt="" />
        <img
          className="w-52 absolute top-[500px] left-0"
          src={elipse5}
          alt=""
        />
        <img
          className="w-52 absolute top-[700px] right-20"
          src={elipse6}
          alt=""
        />
        <img
          className="w-52 absolute top-[850px] left-96"
          src={elipse7}
          alt=""
        />
        <img
          className="w-52 absolute top-[1050px] left-10"
          src={elipse8}
          alt=""
        />
        <img
          className="w-52 absolute top-[1150px] right-10"
          src={elipse9}
          alt=""
        />
        <img
          className="w-52 absolute top-[1550px] -left-24"
          src={elipse2}
          alt=""
        />
        <img
          className="w-52 absolute top-[1750px] right-0"
          src={elipse3}
          alt=""
        />
        <img
          className="w-52 absolute top-[1950px] left-96"
          src={elipse4}
          alt=""
        />
        <img
          className="w-52 absolute top-[2450px] right-10"
          src={elipse6}
          alt=""
        />
        <img
          className="w-52 absolute top-[2650px] left-96"
          src={elipse7}
          alt=""
        />
        <img
          className="w-52 absolute top-[2850px] left-10"
          src={elipse8}
          alt=""
        />
        <img
          className="w-52 absolute top-[3150px] left-96"
          src={elipse11}
          alt=""
        />
        <img
          className="w-52 absolute top-[3350px] right-5"
          src={elipse10}
          alt=""
        />
      </div>


      {/* main hone section starts from here */}


      <div className="main_container relative">
        {
          viewModal && 
          <Modal viewModal={viewModal} setViewModal={setViewModal} ></Modal>
        }
                <Navbar></Navbar>

{/* ************************************* Hero section ********************************  */}

        <section className='flex'>
          <div className="w-full h-full flex items-center">
            <div className="p-10 min-w-[400px] basis-1/2 h-full md:p-20 text-left space-y-5 overflow-x-hidden">
              <span className='text-orange-400 text-md font-semibold'>Save 15% on AWS</span>
              <h1 className='text-4xl'>
                <span>Non</span>IT Job Ready shfhskfh <span>shfsfjskfh</span>
              </h1>
              <p className="text-sm font-medium">
                MicroDegree is an Ed-tech platform teaching coding & job-ready
                skills in Kannada at an affordable price.
              </p>
              <div className='space-x-8'>
                <button onClick={()=>setViewModal('77')} className=" p-2 px-4 bg-[#FF0049] text-white text-sm rounded-md">Free Consultation</button>
                <button className='rounded-md p-2 border border-blue-800 text-blue-800 text-sm'>All Courses</button>
              </div> 

              <div className="flex space-x-3 py-3">
                <img className="w-36 " src={Group1416} alt="" />
                <img className="w-36" src={Group1417} alt="" />
                <img className="w-36" src={Group1418} alt="" />
              </div>
            </div>
            <div className='basis-1/2 min-w-fit flex items-center'>
              <div className="w-[350px] h-[350px] relative ">
              <img className="w-[350px] absolute top-0  object-contain  " src={heroImage} alt="" />
              <img className="w-[55px] absolute object-contain top-10 right-6 " src={Group1351} alt="" />
              <img className="w-[120px] absolute  object-contain top-1/2 -left-10" src={Group19} alt="" />
              </div>


            </div>
          </div>
        </section>

{/* ************************************Section 2 starts**************************************************** */}

        <section className="w-full h-full p-10 md:px-20  space-y-5">
          <div className='w-full flex flex-col items-start space-y-3 '>
          <h1 className='sm:text-5xl text-4xl mb-4'>Popular Courses</h1>
          <p className="max-w-[680px] text-left text-base">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt utlabore et dolore magna aliquyam.</p>
          <div className=" w-full flex justify-between items-center ">
            <div className ='flex m-auto my-5 sm:m-0 '>
            <button onClick={()=>setStatus('live')} className='bg-gray-300 hover:bg-[#FF0049] hover:text-white px-3 py-2 rounded-sm text-sm'>Live</button>
            <button onClick={()=>setStatus('hybrid')} className='bg-gray-300 hover:bg-[#FF0049] hover:text-white px-3 py-2 rounded-sm text-sm ' >Hybrid</button>
            <button onClick={()=>setStatus('pre recorded')} className='bg-gray-300 hover:bg-[#FF0049] hover:text-white px-3 py-2 rounded-sm text-sm ' >Pre Recorded</button>
            </div>
            <button className=" hidden sm:block h-fit  bg-blue-700 text-white text-sm rounded-md px-3 py-2 ">See All Courses</button>
            </div>
          </div>
          <div className="flex w-full h-full items-center space-x-8 flex-wrap space-y-8 md:space-y-0 ">

            {
              courseOutput.map(item=>(
                <CourseCard key={item.id} title={item.title} category={item.category} cardImg={item.img} price={item.price} ></CourseCard>
              ))
            }
          </div>
        </section>

        {/* ****************section 3 starts from here******************************* */}

        <section className='h-full sm:p-28 p-10 space-y-8 '>
          <div className='space-y-4'>
          <h1 className='text-3xl'>Our <span className='font-semibold'>Award</span> & <span className='font-semibold text-red-500'>Recognization</span></h1>
          <p className=" text-gray-600 text-xs font-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          
          </div>

          <div className=" w-full h-full flex flex-wrap space-x-2 items-center justify-around align-center  px-10">
            <img className=" w-20 sm:w-32 object-contain" src={brandLogo1} alt="" />
            <img className=" w-20 sm:w-32 object-contain" src={brandLogo2} alt="" />
            <img className=" w-20 sm:w-32 object-contain" src={brandLogo3} alt="" />
            <img className=" w-20 sm:w-32 object-contain" src={brandLogo4} alt="" />
            <img className=" w-20 sm:w-32 object-contain" src={brandLogo5} alt="" />
          </div>


          <div className=" w-full h-full flex flex-wrap items-center justify-between space-x-2 space-y-6">
            <Section3Card title='Recognized by KDM' desc='BTS event organised by Karnataka Digital Economy Mission ' date='21 Nov' cardImg={courseImg1}></Section3Card>
            <Section3Card title='Recognized by KDM' desc='BTS event organised by Karnataka Digital Economy Mission ' date='21 Nov' cardImg={courseImg1}></Section3Card>
            <Section3Card title='Recognized by KDM' desc='BTS event organised by Karnataka Digital Economy Mission ' date='21 Nov' cardImg={courseImg1}></Section3Card>
            <Section3Card title='Recognized by KDM' desc='BTS event organised by Karnataka Digital Economy Mission ' date='21 Nov' cardImg={courseImg1}></Section3Card>
          </div>
          

        
        </section>

{/* ***********************************Section4 starts here******************************************** */}
        <section className="px-10 sm:px-28 py-10 w-full space-y-10 h-full mb-10">
          <div className='w-full pb-10 flex justify-center items-center flex-wrap sm:space-x-14 space-y-7 '>
            <h1 className=" h-full text-4xl  max-w-md text-left">How to join Million <br/> course from <span className='text-red-500'>MicroDegree</span> </h1>
            <p className=" text-sm  text-gray-700 sm:mr-20 max-w-lg text-left">Loem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis esse modi impedit repudiandae est ullam quasi minima. Pariatur eos minus consequuntur fuga eum alias illo sapiente reiciendis quos! Libero, fuga.</p>
          </div>
            <div className=" w-full flex items-center justify-center ">
              <img className='hidden sm:block w-1/2 ' src={section4Img} alt="" />
              <div className=" w-80 px-4 py-14 px-8  bg-gray-100 rounded-md w-96 flex-shrink space-y-7">
              <h3 className="text-3xl font-semibold text-left">How we execute</h3>
              <div className="w-full  space-y-4 ">
                <div className=" w-full flex justify-between  ">
                  <p>1.</p>
                  <div>icon</div>
                  <div className="text-left"><h5>Explore Course</h5>
                  <p className='text-[0.6rem]'>This is first step you should take to join</p></div>
                </div>
                <div className=" w-full flex justify-between ">
                  <p>1.</p>
                  <div>icon</div>
                  <div className="text-left"><h5>Explore Course</h5>
                  <p className='text-[0.6rem]'>This is first step you should take to join</p></div>
                </div>
                <div className=" w-full flex justify-between ">
                  <p>1.</p>
                  <div>icon</div>
                  <div className="text-left"><h5>Explore Course</h5>
                  <p className='text-[0.6rem]'>This is first step you should take to join</p></div>
                </div>
                <div className=" w-full flex justify-between ">
                  <p>1.</p>
                  <div>icon</div>
                  <div className="text-left"><h5>Explore Course</h5>
                  <p className='text-[0.6rem]'>This is first step you should take to join</p></div>
                </div>
              </div>

            </div>
            </div>
        </section>

{/* **************************************Section 5 start here******************************** */}

<section className="px-10 sm:px-28 py-10 w-full h-full space-y-10 text-left">
  <h1 className="text-4xl space-x-2 text-gray-600"><span className="font-bold text-gray-700">Placement</span> Diaries</h1>
  <div className="flex justify-between flex-wrap space-y-6 sm:s">
    <Section5Card title='Mani Nair' desc='Assosciative Software Developer' cardImg={placement1} logoImg={tataLogo} ></Section5Card>
    <Section5Card title='Mani Nair' desc='Assosciative Software Developer' cardImg={placement1} logoImg={tataLogo} ></Section5Card>
    <Section5Card title='Mani Nair' desc='Assosciative Software Developer' cardImg={placement1} logoImg={tataLogo} ></Section5Card>
    <Section5Card title='Mani Nair' desc='Assosciative Software Developer' cardImg={placement1} logoImg={tataLogo} ></Section5Card>
  </div>
</section>


{/* ***********************Section6 starts here************************************* */}

<section className=' p-10 sm:pl-28 sm:py-20 w-full h-full flex items-center justify-between '>
  <div className=" w-full sm:basis-2/5 sm:min-w-[500px] text-left space-y-3 ">
    <h1 className='text-4xl'><span className="text-bold">Industry</span> <span>Trainers.</span></h1>
    <p className="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque, quidem dicta incidunt commodi quaerat, adipisci accusamus velit deserunt sed illo aspernatur nobis pariatur nemo odit facere consequuntur recusandae. Eos.
    </p>

  </div>
  <div className=' hidden  w-[800px] -mr-[120px] md:flex overflow-x-hidden space-x-7'>
    <Section6Card></Section6Card>
    <Section6Card></Section6Card>
    <Section6Card></Section6Card>
  </div>
</section>

{/* *************************************Section7 starts here************************ */}

<section className="py-10">
  <div className="h-96  relative overflow-hidden">
    <img className='absolute top-10 min-w-[800px] w-full h-fit overflow-x-hidden ' src={imageHolder} alt="" />
    <div className='h-64 z-10 relative flex '>
      <div className=" hidden h-full basis-1/2 md:flex flex-col items-center justify-center mt-8 ">
        <div className="text-white text-left space-y-2">
        <p className="text-sm ">A good discount opportunity</p>
        <h3 className='text-4xl '>Save 15% on AWS</h3>
        <p className='text-xs text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, earum?</p>
        </div>

      </div>
      <div className=" w-full md:basis-1/2 flex justify-center md:block">
      <div className=" w-72 h-fit bg-gray-100 rounded-md ">
        <div className="head rounded-md bg-[#FCAA2D] px-5 py-4 flex flex-col items-center justify-center space-y-2 text-white">
          <h3 className="text-xl">Signup for Free</h3>
          <p className='text-xs w-48'>And recieve over 100+ free quality courses</p>
        </div>
        <div className="p-5 px-7 space-y-4 ovrflow-visible">
          <input className='text-sm p-2 w-full' type="text" placeholder='Your Name' name="" id="" />
          <input className='text-sm p-2 w-full ' type="text" placeholder='Email' name="" id="" />
          <input className='text-sm p-2 w-full ' type="text" placeholder='Mobile' name="" id="" />
        </div>
        <button className="my-2 py-2 px-3 bg-[#FCAA2D] rounded-md text-sm text-white">Get it Now</button>
      </div>
      </div>

    </div>

  </div>
</section>

{/* *********************************section8 starts from here******************************  */}

<section className="space-y-10 py-14">
<div className="">
  <h1 className='text-5xl text-gray-800'> <span className="font-bold">Learner's</span> Talk</h1>
</div>
<div  className="p-3 row flex overflow-x-scroll space-x-10">

  <img className='w-72 object-contain' src={section8Img2} alt="" />
  <img className='w-72 object-contain' src={section8Img3} alt="" />
  <img className="w-96 object-contain" src={section8Img1} alt="" />
  <img className='w-72 object-contain' src={section8Img4} alt="" />
  <img className='w-72 object-contain' src={section8Img5} alt="" />
</div>
</section>


{/* **********************Section 9 starts from here****************************** */}

<section className="md:px-28 py-10 px-10 space-y-10 text-left">
  <h1 className=" text-4xl sm:text-5xl sm:px-10"><samp className="font-bold">News</samp>& <span className="font-bold">Media</span> Talk </h1>

  <div className="flex  space-x-4 md:px-14">
    <img className='w-1/3 object-contain shadow-inner' src={section9Img1} alt="" />
    <img className="w-1/3 shadow-[inset_0_40px_60px_0px_rgba(0,0,1)]  " src={section9Img2} alt="" />
    <div className="w-1/3 h-full space-y-2"><img src={section9Img3} alt="" />
    <img className='' src={section9Img4} alt="" /></div>
  </div>
</section>


{/* *************************************section 10 starts from here********************** */}

<section className="flex px-28 py-20">
<div className=' basis-1/2 relative px-5 '>
<div className="absolute  top-9 right-4 ">
  <img className=' w-80  object-contain' src={section10bg} alt="" />
</div>
<div className="w-72 absolute right-4 top-4 z-10  ">
  <div className="relative w-full h-full">
  <img className="object-fit absolute" src={rectangle40} alt="" />
    <img className="object-fit z-10 absolute" src={rectangle41} alt="" />
    <div className=" absolute w-full h-full top-0 left-0 p-14 space-y-3  z-20">
      <input className='w-full text-sm text-gray-700 p-1 px-2 rounded-sm outline-none bg-[rgba(255,255,255,0.85)]' type="text" name="" placeholder="Your name" id="" />
      <input className='w-full text-sm text-gray-700 p-1 px-2 rounded-sm outline-none bg-[rgba(255,255,255,0.85)]' type="text" name="" placeholder="Your name" id="" />
      <input className='w-full text-sm text-gray-700 p-1 px-2 rounded-sm outline-none bg-[rgba(255,255,255,0.85)]' type="text" name="" placeholder="Your name" id="" />
      <input className='w-full text-sm text-gray-700 p-1 px-2 rounded-sm outline-none bg-[rgba(255,255,255,0.85)]' type="text" name="" placeholder="Your name" id="" />

      <textarea className='text-sm w-full rounded-sm p-2 bg-[rgba(255,255,255,0.85)] outline-none text-gray-800 ' name="" id="" cols="24" placeholder='hello' rows="4"></textarea>

      <button className='bg-blue-600 px-4 py-2 rounded-sm text-xs text-white '>Submit Request</button>
    </div>
  </div>

  </div>
</div>

{/* secttion10 part 2 */}
<div className=" sm:block hidden basis-1/2">
  <div className="p-5 w-[480px] text-left space-y-4 ">
  <h1 className=" text-4xl text-gray-800 ">Multilingual <br /> <span className="font-bold">IT Skilling</span> Platform <br />for <span className="font-bold"> Bharat</span> </h1>
  <p className='text-gray-800 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis nulla enim quasi assumenda voluptatum eligendi et praesentium, voluptate ipsam nisi?</p>
  <ul className=" w-full text-sm text-gray-800">
    <li className='w-full flex items-center space-x-3'> <div className="rounded-full w-2 h-2 bg-gray-800"></div> <p>Lorem ipsum dolor sit amet</p>.</li>
    <li className='w-full flex items-center space-x-3'> <div className="rounded-full w-2 h-2 bg-gray-800"></div> <p>Lorem ipsum dolor sit amet</p>.</li>
    <li className='w-full flex items-center space-x-3'> <div className="rounded-full w-2 h-2 bg-gray-800"></div> <p>Lorem ipsum dolor sit amet</p>.</li>
    <li className='w-full flex items-center space-x-3'> <div className="rounded-full w-2 h-2 bg-gray-800"></div> <p>Lorem ipsum dolor sit amet</p>.</li>

  </ul>
  <div>
    Join our Telegram
  </div>
  </div>
</div>
</section>

{/* *******************************footer starts from here ************************** */}

<footer className='h-full'>
  <section className=" relative w-full h-fit bg-red-500 mt-28 overflow-hidden">
    <img className=' object-fit' src={fBg1} alt="" />
    <img className='absolute z-10  -left-28 -bottom-28 ' src={Eclipse1} alt="" />
    <img className='absolute z-10  top-10 right-20' src={Eclipse2} alt="" />
    <img className='absolute z-10  top-40 right-[500px]' src={Eclipse3} alt="" />
    <img className="absolute z-10 top-0 " src={overlay43} alt="" />

    <div className=' absolute top-0 z-20 flex h-full w-full'>
      <div className=" basis-1/2 text-left text-white px-36 py-14 space-y-6">
        <h1 className='text-5xl'><span className="text-5xl">Download</span><br />Our App</h1>
        <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis, eos accusantium, nostrum ipsa odio eveniet ea in atque tenetur error at explicabo id doloremque earum ab necessitatibus, odit vitae saepe suscipit?</p>
        <div className="flex justify-between">
          <img className='object-contain w-24' src={Qrcode} alt="" />
          <img className='w-36 object-contain' src={playstore} alt="" />
        </div>
      </div>

      <div className=" relative basis-1/2 overflow-hidden h-full px-10">
        <img className="absolute  object-contain w-52 -bottom-48 left-[170px]" src={phone1} alt="" />
        <img className="absolute  object-contain w-52 -bottom-36 " src={phone2} alt="" />
      </div>

    </div>

  </section>

  {/* footer section 2 startts from here  */}
  <section className="h-full w-full bg-[#364045] pt-10 px-20">
  <div className="flex  border-b-[0.1rem] border-gray-600 py-6 ">
    <div className="basis-1/4 text-left text-white space-y-4">
      <h1 className='text-2xl text-left'> <span className='text-center'>Micro </span> <br/> <span className="font-bold text-left">Degree</span></h1>
      <p className="text-xs text-gray-400 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempore, voluptatum enim id tenetur commodi.</p>
    </div>
    <div className="basis-1/4 flex items-center justify-center h-full">
      <ul className="space-y-1 text-left">
        <li className='font-bold text-gray-200'>Company</li>
        <li className='text-sm text-gray-400'>About</li>
        <li className='text-sm text-gray-400'>Courses</li>
        <li className='text-sm text-gray-400'>Scholarships</li>
        <li className='text-sm text-gray-400'>Courses</li>
        <li className='text-sm text-gray-400'>Contact us</li>
      </ul>
    </div>
    <div className="basis-1/4 flex items-center justify-center h-full">
      <ul className="space-y-1 text-left">
        <li className='font-bold text-gray-200'>Useful Links</li>
        <li className='text-sm text-gray-400'>Blogs</li>
        <li className='text-sm text-gray-400'>Community</li>
        <li className='text-sm text-gray-400'>Pricing</li>
        <li className='text-sm text-gray-400'>FAQ</li>
        <li className='text-sm text-gray-400'>Sitemap</li>
      </ul>
    </div>
    <div className="basis-1/4 text-left space-y-2 text-xs text-gray-400 px-10">
      <h3 className='text-gray-300 text-base'>Contact us</h3>
      <p>+918310882795</p>
      <p>hello@microdegree.work</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, excepturi? Voluptatem corrupti et maiores accusantium voluptatibus. Iusto ut nulla obcaecati.</p>
    </div>
  </div>
  <div className='py-3 flex justify-between text-gray-400 text-xs'>
    <p>Copyright @2022 Microdegree All rights reserved</p>
    <div className="flex w-64 justify-between ">
      <p>Terms & Conditions</p>
      <p>Legal & Privacy</p>
    </div>
    
  </div>
  </section>
</footer>
      </div>
    </div>
  );
}

export default Home;
