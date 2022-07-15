import React from "react";
import heroImage from "../assets/home/heroSection/Rectangle 102.png";
import Group19 from "../assets/home/heroSection/Group 19.png";
import Group1351 from "../assets/home/heroSection/Group 1351.png";
import Group1416 from "../assets/home/heroSection/Group 1416.png";
import Group1417 from "../assets/home/heroSection/Group 1417.png";
import Group1418 from "../assets/home/heroSection/Group 1418.png";
import CourseCard from "../components/CourseCard";
import Section3Card from "../components/Section3Card";
import section3Img1 from "../assets/home/Section3/a1.png"
import section3Img2 from "../assets/home/Section3/a2.png"
import section3Img3 from "../assets/home/Section3/a3.png"
import section3Img4 from "../assets/home/Section3/a4.png"
import brandLogo1 from '../assets/home/Section2/brandLogo1.png'
import brandLogo2 from '../assets/home/Section2/brandLogo2.png'
import brandLogo3 from '../assets/home/Section2/brandLogo3.png'
import brandLogo4 from '../assets/home/Section2/brandLogo4.png'
import brandLogo5 from '../assets/home/Section2/brandLogo5.png'
import section4Img from '../assets/home/section4/section4Img.png'
import Section6Card from "../components/Section6Card";
import imageHolder from '../assets/home/section7/Image Holder.png'
import section9Img1 from '../assets/home/section9/section9Img1.png'
import section9Img2 from '../assets/home/section9/section9Img2.png'
import section9Img3 from '../assets/home/section9/section9Img3.png'
import section9Img4 from '../assets/home/section9/section9Img4.png'
import rectangle40 from '../assets/home/section10/rectangle40.png'
import rectangle41 from '../assets/home/section10/rectangle41.png'
import section10bg from '../assets/home/section10/section10bg.png'
import { useState } from "react";
import { useEffect } from "react";
import Modal from "../components/Modal";
import CmnSection1 from "../components/CmnSection1";
import CmnSection2 from "../components/CmnSection2";
import Footer from "../components/Footer";
import VideoModal from "../components/VideoModal";
import { PencilAltIcon } from "@heroicons/react/solid";
import db from "../features/firebase";
import { addDoc, query, collection } from "firebase/firestore";

const q = query(collection(db, "client"));
// test json file 

const Course = [
  {
    id:1,
    img: require('../assets/home/Section2/courseImg1.png'),
    category:'Cloud Computing',
    title:'AWS & DevOps Certification',
    price:'6000',
    courseLink:'https://courses.microdegree.work/courses/aws-developer-certification-live',
    status:'live',
  },
  {
    id:2,
    img: require('../assets/home/Section2/courseImg2.png'),
    category:'Data Science',
    title:'Power BI + Tableau Developer Course',
    price:'20,000',
    courseLink:'https://courses.microdegree.work/courses/power-bi-tableau-certification',
    status:'live',
  },
  {
    id:3,
    img: require('../assets/home/Section2/courseImg3.png'),
    category:'Data Science',
    title:'Python - Live Certification',
    price:'4,900',
    courseLink:'https://courses.microdegree.work/courses/python',
    status:'Hybrid',
  },
  {
    id:4,
    img: require('../assets/home/Section2/courseImg4.png'),
    category:'DataBase',
    title:'MySQL Certification',
    price:'FREE',
    courseLink:'https://courses.microdegree.work/courses/mysql',
    status:'pre recorded',
  },
]


const videoLinks =[
  {
    id: 1,
    name : "video1",
    title: "How to enroll to courses?",
    link:'https://www.youtube.com/embed/E7wJTI-1dvQ'
  },
  {
    id: 2,
    name : "video2",
    title: "Why Our Courses?",
    link:'https://www.youtube.com/embed/5Eqb_-j3FDA'
  },
  {
    id: 3,
    name : "video3",
    title: "Why Microdegree?",
    link:'https://www.youtube.com/embed/ANX4UZlW2JA'
  },
]


// ## ***************************************** contact page *********************************



function Home() {

const [status, setStatus] = useState('')
const [courseOutput, setCourseOutput] = useState(Course)
const [viewModal, setViewModal] = useState(false)
const [videoOutput, setVideoOutput]= useState()
const [videoModal, setvideoModal] = useState(false)


// form data 
const [Name, setName] = useState('')
const [Email, setEmail] = useState('')
const [ContactNo, setContactNo] = useState('')

const onSubmit= async (e) => {
  e.preventDefault();
  console.log("hi this is mukul");
  await addDoc(q, {
    name: Name,
    email: Email,
    contactNo: ContactNo,
  });

  setViewModal(false);
};

useEffect(() => {

    if(status===''){
      setCourseOutput(Course)
    }
    else{
      setCourseOutput(Course.filter((item)=>item.status.toLowerCase().includes(status)))
    }
}, [status])

const handleVideo1 =()=>{
  setVideoOutput(videoLinks.filter((item)=>item.name.includes("video1"))[0])
  setvideoModal(!videoModal)
}
const handleVideo2 =()=>{
  setVideoOutput(videoLinks.filter((item)=>item.name.includes("video2"))[0])
  setvideoModal(!videoModal)
}
const handleVideo3 =()=>{
  setVideoOutput(videoLinks.filter((item)=>item.name.includes("video3"))[0])
  setvideoModal(!videoModal)
}


  return (
    <div className="relative overflow-x-hidden">
      {/* main hone section starts from here */}


      <div className="main_container relative">
        {
          viewModal && 
          <Modal  viewModal={viewModal} setViewModal={setViewModal} ></Modal>
        }
        {
          videoModal && 

          <VideoModal vidLink={videoOutput.link} vidTitle={videoOutput.title} setvideoModal={setvideoModal} videoModal={videoModal}></VideoModal>
        }


{/* ************************************* Hero section ********************************  */}

        <section className='flex'>
          <div className="w-full h-full flex items-center p-10 px-5 md:px-14">
            <div className=" px-5  min-w-[350px] overflow-visible basis-1/2 h-full text-left space-y-6">
              <div className="space-y-6 max-w-[450px]">
              <span className='text-orange-400 text-md font-semibold'>Save 15% on AWS</span>
              <h1 className='text-3xl font-bold text-gray-700'>
                <span className='text-orange-400'>ಕನ್ನಡಿಗರಿಗೆ</span> IT Job Ready ಮಾಡುವ <span className='text-orange-400'> ಅಭಿಯಾನ</span> 
              </h1>
              <p className="text-sm font-medium">
                MicroDegree is an Ed-tech platform teaching coding & job-ready
                skills in Kannada at an affordable price.
              </p>
              <div className='space-x-8'>
                <button onClick={()=>setViewModal('77')} className=" p-2 px-4 bg-[#FF0049] text-white text-sm rounded-md">Free Consultation</button>
               <a href="https://courses.microdegree.work/pages/premium-courses"><button className='rounded-md p-2 border border-blue-800 text-blue-800 text-sm'>All Courses</button></a>
              </div> 
              </div>

              <div className="w-full flex space-x-3 py-3 overflow-x-scroll">
                <img onClick={handleVideo1} className="w-36 " src={Group1416} alt="" />
                <img onClick={handleVideo2} className="w-36" src={Group1417} alt="" />
                <img onClick={handleVideo3} className="w-36" src={Group1418} alt="" />
              </div>
            </div>
            <div className='basis-1/2 min-w-fit flex items-center p-10'>
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
            <a href="https://courses.microdegree.work/pages/premium-courses">
            <button className=" hidden sm:block h-fit  bg-blue-700 text-white text-sm rounded-md px-3 py-2 ">See All Courses</button>
            </a>
            </div>
          </div>
          <div className="px-5 flex justify-around items-center w-full h-full  md:space-x-8 flex-wrap md:space-y-0 space-y-14 ">

            {
              courseOutput.map(item=>(
                <CourseCard key={item.id} courseLink={item.courseLink} title={item.title} category={item.category} cardImg={item.img} price={item.price} ></CourseCard>
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


          <div className=" w-full h-full flex flex-wrap items-center justify-between sm:space-x-2 space-y-6">
            <Section3Card title='Recognized by KDM' desc='BTS event organised by Karnataka Digital Economy Mission ' date='21 Nov' cardImg={section3Img1}></Section3Card>
            <Section3Card title='Winning Elevate' desc='Chosen as Top 100 startups by Govt of Karnataka ' date='21 Nov' cardImg={section3Img2}></Section3Card>
            <Section3Card title='Recieving Award for IEEE' desc='Recognized by IEEE for Impacting 3000+ tech talents ' date='21 Nov' cardImg={section3Img3}></Section3Card>
            <Section3Card title='Banagalore Tech Summit' desc='With Honourable chief Minister of Karnataka ' date='21 Nov' cardImg={section3Img4}></Section3Card>
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
              <div className="py-14 px-8  bg-gray-100 rounded-md w-96 flex-shrink space-y-7">
              <h3 className="text-3xl font-semibold text-left">How we execute</h3>
              <div className="w-full  space-y-4 ">
                <div className=" w-full flex justify-between items-center ">
                  <p>1.</p>
                  <PencilAltIcon className='w-5 text-gray-600'></PencilAltIcon>
                  <div className="text-left"><h5>Explore Course</h5>
                  <p className='text-[0.6rem]'>This is first step you should take to join</p></div>
                </div>
                <div className=" w-full flex justify-between items-center">
                  <p>1.</p>
                  <PencilAltIcon className='w-5 text-gray-600'></PencilAltIcon>
                  <div className="text-left"><h5>Explore Course</h5>
                  <p className='text-[0.6rem]'>This is first step you should take to join</p></div>
                </div>
                <div className=" w-full flex justify-between items-center">
                  <p>1.</p>
                  <PencilAltIcon className='w-5 text-gray-600'></PencilAltIcon>
                  <div className="text-left"><h5>Explore Course</h5>
                  <p className='text-[0.6rem]'>This is first step you should take to join</p></div>
                </div>
                <div className=" w-full flex justify-between items-center ">
                  <p>1.</p>
                    <PencilAltIcon className='w-5 text-gray-600'></PencilAltIcon>
                  <div className="text-left"><h5>Explore Course</h5>
                  <p className='text-[0.6rem]'>This is first step you should take to join</p></div>
                </div>
              </div>

            </div>
            </div>
        </section>

{/* **************************************Section 5 start here******************************** */}

<CmnSection2></CmnSection2>


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
      <form onSubmit={onSubmit} action="">
      <div className=" w-72 h-fit bg-gray-100 rounded-md ">
        <div className="head rounded-md bg-[#FCAA2D] px-5 py-4 flex flex-col items-center justify-center space-y-2 text-white">
          <h3 className="text-xl">Signup for Free</h3>
          <p className='text-xs w-48'>And recieve over 100+ free quality courses</p>
        </div>
        <div className="p-5 px-7 space-y-4 ovrflow-visible">
          <input onChange={(e)=>{setName(e.target.value)}} className='text-sm p-2 w-full' type="text" placeholder='Your Name' name="" id="" />
          <input onChange={(e)=>{setEmail(e.target.value)}} className='text-sm p-2 w-full ' type="text" placeholder='Email' name="" id="" />
          <input onChange={(e)=>{setContactNo(e.target.value)}} className='text-sm p-2 w-full ' type="text" placeholder='Mobile' name="" id="" />
        </div>
        <button className="my-2 py-2 px-3 bg-[#FCAA2D] rounded-md text-sm text-white">Get it Now</button>
      </div>
      </form>
      </div>

    </div>

  </div>
</section>

{/* *********************************section8 starts from here******************************  */}

<CmnSection1></CmnSection1>


{/* **********************Section 9 starts from here****************************** */}

<section className="md:px-28 py-16 px-10 space-y-10 text-left">
  <h1 className=" text-4xl sm:text-5xl sm:px-10"><samp className="font-bold">News</samp>& <span className="font-bold">Media</span> Talk </h1>

  <div className="flex  space-x-4 md:px-14 overflow-x-scroll">
    <img className='w-1/3 min-w-[200px] object-contain shadow-inner' src={section9Img1} alt="" />
    <img className="w-1/3 min-w-[200px] shadow-[inset_0_40px_60px_0px_rgba(0,0,1)]  " src={section9Img2} alt="" />
    <div className="w-1/3 min-w-[200px] h-full space-y-2"><img src={section9Img3} alt="" />
    <img className='' src={section9Img4} alt="" /></div>
  </div>
</section>


{/* *************************************section 10 starts from here********************** */}

<section className="flex  px-3 md:px-28 py-20 w-full ">
<div className=' w-full  sm:basis-1/2 flex-none '>
  <div className="  relative w-full px-5 h-[450px]">
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
</div>

{/* secttion10 part 2 */}
<div className=" sm:block hidden shrink basis-1/2">
  <div className="p-5 w-full text-left space-y-4 ">
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

<Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
