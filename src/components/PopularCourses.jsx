import React from 'react'
import { useEffect } from "react";
import { useState } from 'react';
import CourseCard from "./CourseCard";
function PopularCourses() {


    // json starts from here 

    const Courses = [
        {
          id:1,
          "course_img": require('../assets/Course Images/AWSDevOpsCertification.png'),
          "course_category":'Cloud Computing',
          "course_name":'AWS & DevOps Certification',
          "course_price":'6000',
          "course_desc":'Master AWS & DevOps from Cloud industry experts to become a solid Computing Professional',
          "course_link":'https://courses.microdegree.work/courses/aws-developer-certification-live',
          "course_status":['daily live'],
          trending:'True',
          course_details:["60 Hrs of LIVE Online Training",
          "Concepts Explained in Kannada",
          "Completion Certificate",
          "Build Interactive Projects",
          "Doubt Clarification",
          "Interview Preparation",
          "Career Assistance",
        ],
        },
        {
          id:2,
          "course_img": require('../assets/Course Images/powerBi.png'),
          "course_category":'Data Science',
          "course_name":'Power BI + Tableau Developer Course',
          "course_price":'20,000',

          "course_desc":"Master Business Intelligence with Power BI & Tableau from Industry Experts to become a solid Professional in Data Visualization & Reporting",
          "course_link":'https://courses.microdegree.work/courses/power-bi-tableau-certification',
          "course_status":['daily live'],
          course_details:["65 Hrs of LIVE Online Training",
          "Concepts Explained in Kannada",
          "Completion Certificate",
          "Build Interactive Projects",
          "Doubt Clarification",
          "Interview Preparation",
          "Career Assistance",
        ],
        },

        {
          id:3,
          "course_img": require('../assets/Course Images/Python.png'),
          "course_category":'Data Science',
          "course_name":'Python - Live Certification',
          "course_desc":"Start with Basic Python until advanced Visualization Concepts with Power Bi to become a Data Science Expert",
          "course_price":'4,900',
          "course_link":'https://courses.microdegree.work/courses/python',
          "course_status":['recorded'],
          trending:'True',
          course_details:["Course starts from complete Basics",
          "No prior coding knowledge required",
          "Get doubts cleared instantly ",
          "Quizzes & Mini Projects ",
          "Unlimited access",
          "Interview Preparation",
          "Career Assistance",
        ],
        },
        {
          "id":4,
          "course_name":'Full Stack Web Development Certification',
          "course_img":require('../assets/Course Images/webDev.png'),
          "course_link":"https://courses.microdegree.work/courses/full-stack-web-development-certification",
          "course_desc":"Start with Basic HTML untill advanced Server Side Concepts with NodeJs & MongoDB to become a Expert MERN Stack Developer",
          "course_category":'programming',
          "course_price":'7,500',
          "course_status":['weekend live'],
          course_details:["60 Hrs of LIVE Online Training",
          "Concepts Explained in Kannada",
          "Completion Certificate",
          "Build Interactive Projects",
          "Doubt Clarification",
          "Interview Preparation",
          "Career Assistance",
        ],},

        {
          id:5,
          "course_img": require('../assets/Course Images/MySQL.png'),
          "course_category":'DataBase',
          "course_name":'MySQL Certification',
          "course_price":'FREE',
          "course_desc": "Learn Python from scratch and build interactve projects. Kick-start your journey into the world of Data Science and Machine Learning here.",
          "course_status":['recorded'],
          "course_link":'https://courses.microdegree.work/courses/mysql',
          course_details:["5 Hours of Course Content",
          "No prior coding knowledge required",
          "Get doubts cleared instantly ",
          "Quizzes & Mini Projects ",
          "Unlimited access",
          "Telegram Developer Community",
          "Career Assistance",
        ],
        },

        {
          "id":6,
          "course_name":'Automation Testing - Java',
          "course_img":require('../assets/Course Images/Automation java.png'),
          "course_link":"https://courses.microdegree.work/courses/automation-testing-java",
          "course_desc":"Master Automation Testing and learn most in-demand skills like Core Java, Selenium & Automation testing to become a solid QA Professional",
          "course_category":'programming',
          "course_price":'15000',
          "course_status":['daily live'],
          course_details:["60 Hrs of LIVE Online Training",
          "Concepts Explained in Kannada",
          "Completion Certificate",
          "Build Interactive Projects",
          "Doubt Clarification",
          "Interview Preparation",
          "Career Assistance",
        ],
      },
      {
        "id":7,
        "course_name":'React js',
        "course_img":require('../assets/Course Images/ReactJS.png'),
        "course_link":"https://courses.microdegree.work/courses/react",
        "course_desc":"Learn React from scratch, build real-world project and get ready to be a solid Frontend Developer",
        "course_category":'programming',
        "course_price":'949',
        "course_status":['recorded'],
        course_details:["60 Hrs of LIVE Online Training",
        "Concepts Explained in Kannada",
        "Completion Certificate",
        "Build Interactive Projects",
        "Doubt Clarification",
        "Interview Preparation",
        "Career Assistance",
      ],
    },
    {
      "id":8,
      "course_name":'Data Science Weekend Live',
      "course_img":require('../assets/Course Images/FullStackData.png'),
      "course_link":"https://courses.microdegree.work/courses/full-stack-data-science-certification",
      "course_desc":"Start with Basic Python until advanced Visualization Concepts with Power Bi to become a Data Science Expert",
      "course_category":'programming',
      "course_price":'7,500',
      "course_status":['weekend live'],
      course_details:["60 Hrs of LIVE Online Training",
      "Concepts Explained in Kannada",
      "Completion Certificate",
      "Build Interactive Projects",
      "Doubt Clarification",
      "Interview Preparation",
      "Career Assistance",
    ],
  },
    {
      "id":9,
      "course_name":'Interview Preperation',
      "course_img":require('../assets/Course Images/Technical.png'),
      "course_link":"https://courses.microdegree.work/courses/technical-interview-preparation ",
      "course_desc":"Start Cracking Technical Interviews like a Pro with this Basic to Advanced Interview Prep Course",
      "course_category":'programming',
      "course_price":'7,500',
      "course_status":['weekend live'],
      course_details:["04:00 PM to 06:00 PM (Sat-Sun)",
      "Concepts Explained in Kannada",
      "Completion Certificate",
      "Live Doubt Clarification",
      "Resume Building",
      "Mock Interviews",
      "Tech Profile",
    ],
  },
      ]



      // console.log(para.map(item=>({item})))
//   #function starts from here    

    const [status, setStatus] = useState("daily live")
    const [courseOutput, setCourseOutput] = useState(Courses)

    useEffect(() => {

        if(status===''){
          setCourseOutput(Courses)
        }
        else{
          // setCourseOutput(Course.filter((item)=>item.status.toLowerCase().includes(status)))
          setCourseOutput(Courses.filter((item)=>item.course_status.includes(status)))
        }
              // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status])

    console.log(status.includes('live'))



  return (
    <div className="w-full h-full py-5 px-10 md:px-14 xl:px-18 2xl:px-20   space-y-8">
    <div className='w-full flex flex-col items-start space-y-3 2xl:space-y-4 '>
    <div className='px-5 sm:px-0 w-full flex flex-col items-start space-y-3 2xl:space-y-5'>
    <div className='flex items-center space-x-3'><div className='bg-[#FF0049]   p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049] p-[0.15rem]   w-[0.1rem] rounded-xl'></div> <p className='font-bold text-gray-400 tracking-[0.3em] text-xs '>Learn New Skills</p> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> </div>

    <h1 className='sm:text-5xl text-4xl 2xl:text-6xl whitespace-nowrap text-gray-700  mb-4'> <span className='font-[600]'>Popular </span>Courses</h1>
    <p className="max-w-[800px] text-left font-regular text-gray-700 text-base xl:text-lg 2xl:text-xl">IT skills to boost your skills and improve your resume. Learn from Kannadigas working at top MNCs with 10+ years experience</p>
    </div>
    <div className=" 2xl:pr-12 w-full flex justify-between items-center ">
      <div className ='flex m-auto my-5 sm:m-0 '>
      <button onClick={()=>setStatus('daily live')} className={` 2xl:text-base hover:bg-[#FF0049] ${status.includes('daily live')?"bg-[#FF0049] text-white":"bg-gray-300"} hover:text-white px-3 py-2 2xl:px-5 2xl:py-3 rounded-sm rounded-tl-md text-sm`}>Daily Live</button>
      <button onClick={()=>setStatus('weekend live')} className={` 2xl:text-base hover:bg-[#FF0049] ${status.includes('weekend live')?"bg-[#FF0049] text-white":"bg-gray-300"} hover:text-white px-3 py-2 2xl:px-5 2xl:py-3 rounded-sm text-sm`} >Weekend Live</button>
      <button onClick={()=>setStatus('recorded')} className={` 2xl:text-base hover:bg-[#FF0049] ${status.includes('recorded')?"bg-[#FF0049] text-white":"bg-gray-300"} hover:text-white px-3 py-2 2xl:px-5 2xl:py-3 rounded-sm sm:rounded-tr-md text-sm`} >Recorded</button>
      </div>
      <a href="https://courses.microdegree.work/pages/premium-courses">
      <button className=" 2xl:text-base hidden sm:block h-fit  bg-purple-700 text-white text-sm rounded-md px-3 py-2 ">See All Courses</button>
      </a>
      </div>
    </div>
    <div className="px-3 md:px-0 flex justify-center sm:justify-start  items-center w-full h-full  md:space-x-8 flex-wrap sm:flex-nowrap md:space-y-0 space-y-14 overflow-x-scroll scrollbar-hide ">

      {
        courseOutput.map(item=>(
          <CourseCard key={item.id} trending={item.trending}  desc={item.course_desc} course_details={item.course_details} courseLink={item.course_link} title={item.course_name} category={item.course_category} cardImg={item.course_img} price={item.course_price} ></CourseCard>
        ))
      }
    </div>
    <div className='py-2'>
    <a href="https://courses.microdegree.work/pages/premium-courses">
      <button className="h-fit sm:hidden bg-purple-700 text-white text-sm rounded-md px-6 py-3 ">See All Courses</button>
      </a></div>
  </div>
  )
}

export default PopularCourses