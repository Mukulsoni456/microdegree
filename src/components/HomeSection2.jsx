import React from 'react'
import { useEffect } from "react";
import { useState } from 'react';
import CourseCard from "../components/CourseCard";
function HomeSection2() {


    // json starts from here 

    const Course = [
        {
          id:1,
          img: require('../assets/home/Section2/courseImg1.png'),
          category:'Cloud Computing',
          title:'AWS & DevOps Certification',
          price:'6000',
          course_desc:'Master AWS & DevOps from Cloud industry experts to become a solid Computing Professional',
          courseLink:'https://courses.microdegree.work/courses/aws-developer-certification-live',
          status:'live',
        },
        {
          id:2,
          img: require('../assets/home/Section2/courseImg2.png'),
          category:'Data Science',
          title:'Power BI + Tableau Developer Course',
          price:'20,000',
          course_desc:"Master Business Intelligence with Power BI & Tableau from Industry Experts to become a solid Professional in Data Visualization & Reporting",
          courseLink:'https://courses.microdegree.work/courses/power-bi-tableau-certification',
          status:'live',
        },
        {
          id:3,
          img: require('../assets/home/Section2/courseImg3.png'),
          category:'Data Science',
          title:'Python - Live Certification',
          course_desc:"Start with Basic Python until advanced Visualization Concepts with Power Bi to become a Data Science Expert",
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
          course_desc: "Learn Python from scratch and build interactve projects. Kick-start your journey into the world of Data Science and Machine Learning here.",
          status:'pre recorded',
        },
      ]

//   #function starts from here    

    const [status, setStatus] = useState('')
    const [courseOutput, setCourseOutput] = useState(Course)

    useEffect(() => {

        if(status===''){
          setCourseOutput(Course)
        }
        else{
          setCourseOutput(Course.filter((item)=>item.status.toLowerCase().includes(status)))
        }
    }, [status])


  return (
    <div className="w-full h-full p-10 md:px-20  space-y-5">
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
    <div className="px-5 flex  items-center w-full h-full  md:space-x-8 flex-wrap md:space-y-0 space-y-14 ">

      {
        courseOutput.map(item=>(
          <CourseCard key={item.id} desc={item.course_desc} courseLink={item.courseLink} title={item.title} category={item.category} cardImg={item.img} price={item.price} ></CourseCard>
        ))
      }
    </div>
  </div>
  )
}

export default HomeSection2