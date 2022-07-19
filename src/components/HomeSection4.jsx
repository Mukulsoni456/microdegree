import React from 'react'
import section4Img from '../assets/home/section4/section4Img.png'
import { PencilAltIcon } from "@heroicons/react/solid";

function HomeSection4() {
  return (
    <div className="px-10 sm:px-28 py-2 w-full space-y-10 h-full mb-10">
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
            <p>2.</p>
            <PencilAltIcon className='w-5 text-gray-600'></PencilAltIcon>
            <div className="text-left"><h5>Choose Class</h5>
            <p className='text-[0.6rem]'>This is 2nd step you should take to join</p></div>
          </div>
          <div className=" w-full flex justify-between items-center">
            <p>3.</p>
            <PencilAltIcon className='w-5 text-gray-600'></PencilAltIcon>
            <div className="text-left"><h5>Enroll First</h5>
            <p className='text-[0.6rem]'>This is 3rd step you should take to join</p></div>
          </div>
          <div className=" w-full flex justify-between items-center ">
            <p>4.</p>
              <PencilAltIcon className='w-5 text-gray-600'></PencilAltIcon>
            <div className="text-left"><h5>Start Learning</h5>
            <p className='text-[0.6rem]'>This is 4th step you should take to join</p></div>
          </div>
        </div>

      </div>
      </div>
  </div>
  )
}

export default HomeSection4