import React from 'react'
import imageHolder from '../assets/homeWebp/section7/Image Holder.webp'
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
    <img className='absolute top-24 sm:min-w-[800px] w-full h-64 object-cover overflow-x-hidden ' src={imageHolder} alt="" />
    <div className='w-full h-fit  sm:h-64 z-10 relative sm:flex'>
      <div className=" hidden h-full basis-0 sm:basis-1/2 md:flex flex-col items-center justify-center mt-20 ">
        <div className="text-white 2xl:mt-8 flex flex-col justify-center text-left space-y-2">
        <p className="text-sm 2xl:text-xl font-roboto">A good discount opportunity</p>
        <h3 className='text-4xl xl:text-5xl 2xl:text-5xl '>Save 15% on AWS</h3>
        <p className='text-xs 2xl:text-base text-gray-200 font-roboto w-96 2xl:w-[500px]'>Get the power and economies of cloud computing (AWS) with 15% off.</p>
        </div>

      </div>
      <div className=" relative w-full  h-full md:basis-1/2 flex justify-center  md:block">

      <form className='h-full w-full' onSubmit={onSubmit} action="">
      <div className="relative pb-14 sm:pb-5 w-full xl:w-[430px] xl:h-[900px] sm:w-72 2xl:w-[450px] h-fit 2xl:h-[800px] bg-gray-100 rounded-md ">
      <div className={` ${formAlert?'block':'hidden'} bg-opacity-90 bg-black z-30 top-0 w-full p-5 flex justify-start py-24 items-center flex-col h-full absolute space-y-4`}>
      <CheckIcon className='w-16 bg-gradient-to-br animate-popup from-orange-500 to-yellow-500 text-white p-3 rounded-full'></CheckIcon>
      <p className='font-bold text-white text-2xl'>Thanks for submitting </p>
      <p className='text-sm text-white'>You have successfully submitted the form | For re-submitting <span className='text-yellow-500 cursor-pointer ' onClick={()=>setFormAlert(!formAlert)}> Click here</span> </p>
    </div>
        <div className="head rounded-md bg-[#FCAA2D] px-5 py-8 flex flex-col items-center justify-center space-y-2 text-white">
          <h3 className="text-xl xl:text-3xl 2xl:text-4xl">Signup for Free</h3>
          <p className='text-xs xl:text-sm 2xl:text-sm  w-48'>And recieve over 100+ free quality courses</p>
        </div>
        <div className=" px-3  sm:px-7 xl:px-7 py-10 sm:py-5 2xl:py-10 ovrflow-visible space-y-7">
        <div className='w-full text-left space-y-1'>
                    <p className='text-base 2xl:text-base text-gray-900'>Your Name</p>
                    <input onChange={(e)=>{setName(e.target.value)}} className='  text-lg 2xl:text-lg outline-none border-gray-400 bg-transparent border-b-2 w-full text-gray-900' title='Please enter your name' placeholder='Your Name' type="text" name="name" id="name" />
                </div>
                <div className='w-full text-left space-y-1'>
                    <p className='text-base 2xl:text-base text-gray-900'>Email</p>
                    <input onChange={(e)=>{setEmail(e.target.value)}} className='  text-lg 2xl:text-lg outline-none border-gray-400 bg-transparent border-b-2 w-full text-gray-900' title='Please enter a valid email address' placeholder='Enter Your Email Address' type="email" name="email" id="email" />
                </div>
                <div className='w-full text-left space-y-1'>
                    <p className='text-base 2xl:text-base text-gray-900'>Mobile No</p>
                    <input onChange={(e)=>{setContactNo(e.target.value)}} className='  text-lg  2xl:text-lg outline-none border-gray-400 bg-transparent border-b-2 w-full text-gray-900' title='Please enter a 10 digit mobile no' placeholder='Enter Your Mobile No' type="text" pattern='[1-9]{1}[0-9]{9}' name="number" id="number" />
                </div>
                <button className="w-full my-2 py-4 xl:p-3 xl:px-6 2xl:py-4 2xl:px-8  bg-[#FCAA2D] sm:rounded-md text-base xl:text-lg 2xl:text-xl text-white">Get it Now</button>
        </div>

      </div>
      </form>
      </div>

    </div>

  </div>
</div>
  )
}

export default HomeSection7