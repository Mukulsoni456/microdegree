import React from 'react'
import imageHolder from '../assets/home/section7/Image Holder.png'
import db from "../features/firebase";
import { addDoc, query, collection } from "firebase/firestore";
import { useState } from 'react';
import {CheckIcon} from '@heroicons/react/solid'


const q = query(collection(db, "client"));

function HomeSection7() {

    // form starts from here 
const [Name, setName] = useState('')
const [Email, setEmail] = useState('')
const [ContactNo, setContactNo] = useState('')
const [formAlert, setFormAlert] = useState('')

const onSubmit= async (e) => {
  e.preventDefault();
  console.log("hi this is mukul");
  await addDoc(q, {
    name: Name,
    email: Email,
    contactNo: ContactNo,
  });
  setFormAlert(!formAlert)
};

  return (
    <div className="py-10 w-full">
  <div className="w-full h-[530px] sm:h-[500px] xl:h-[500px] 2xl:h-[530px] relative overflow-hidden">
    <img className='absolute top-10 sm:min-w-[800px] w-full h-64 object-cover overflow-x-hidden ' src={imageHolder} alt="" />
    <div className='w-full h-fit  sm:h-64 z-10 relative sm:flex '>
      <div className=" hidden h-full basis-0 sm:basis-1/2 md:flex flex-col items-center justify-center mt-8 ">
        <div className="text-white 2xl:mt-8 flex flex-col justify-center text-left space-y-2">
        <p className="text-sm 2xl:text-xl font-roboto">A good discount opportunity</p>
        <h3 className='text-4xl xl:text-5xl 2xl:text-5xl '>Save 15% on AWS</h3>
        <p className='text-xs 2xl:text-base text-gray-200 font-roboto w-96 2xl:w-[500px]'>Get the power and economies of cloud computing (AWS) with 15% off.</p>
        </div>

      </div>
      <div className=" relative w-full basis-1 h-full md:basis-1/2 flex justify-center  md:block">
      <div className={`${formAlert?'block':'hidden'} bg-opacity-90 bg-black z-30 top-0 w-full p-5 flex justify-center items-center flex-col h-full absolute space-y-4`}>
      <CheckIcon className='w-16 bg-gradient-to-br animate-popup from-orange-500 to-yellow-500 text-white p-3 rounded-full'></CheckIcon>
      <p className='font-bold text-white text-2xl'>Thanks for submitting </p>
      <p className='text-sm text-white'>You have successfully submitted the form | For re-submitting <span className='text-yellow-500 cursor-pointer ' onClick={()=>setFormAlert(!formAlert)}> Click here</span> </p>
    </div>
      <form className='h-full' onSubmit={onSubmit} action="">
      <div className=" pb-14 sm:pb-5 w-full xl:w-[430px] xl:h-[900px] sm:w-72 2xl:w-[450px] h-fit 2xl:h-[800px] bg-gray-100 rounded-md ">
        <div className="head rounded-md bg-[#FCAA2D] px-5 py-8 flex flex-col items-center justify-center space-y-2 text-white">
          <h3 className="text-xl xl:text-3xl 2xl:text-4xl">Signup for Free</h3>
          <p className='text-xs xl:text-sm 2xl:text-sm  w-48'>And recieve over 100+ free quality courses</p>
        </div>
        <div className=" px-3 sm:px-7 xl:px-3 py-10 sm:py-5 2xl:py-10 space-y-4 ovrflow-visible">
          <input required onChange={(e)=>{setName(e.target.value)}} className='border-2 text-sm xl:text-2xl 2xl:text-2xl p-4 xl:p-4 2xl:p-3 w-full' type="text" placeholder='Your Name' name="" id="" />
          <input required onChange={(e)=>{setEmail(e.target.value)}} className=' border-2 text-sm xl:text-2xl 2xl:text-2xl p-4 xl:p-4 2xl:p-3 w-full ' type="text" placeholder='Email' name="" id="" />
          <input required onChange={(e)=>{setContactNo(e.target.value)}} className='border-2 text-sm xl:text-2xl 2xl:text-2xl p-4 xl:p-4 2xl:p-3 w-full ' type="text" placeholder='Mobile' name="" id="" />
        </div>
        <button className="w-full sm:w-fit my-2  py-4 xl:p-3 xl:px-6 2xl:py-4 2xl:px-8  bg-[#FCAA2D] sm:rounded-md text-base xl:text-lg 2xl:text-xl text-white">Get it Now</button>
      </div>
      </form>
      </div>

    </div>

  </div>
</div>
  )
}

export default HomeSection7