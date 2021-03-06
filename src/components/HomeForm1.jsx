import React from 'react'
import imageHolder from '../assets/home/section7/Image Holder.png'
import db from "../features/firebase";
import { addDoc, query, collection } from "firebase/firestore";
import { useState } from 'react';

const q = query(collection(db, "client"));

function HomeSection7() {

    // form starts from here 
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

};

  return (
    <div className="py-10">
  <div className="h-[400px] 2xl:h-[500px] relative overflow-hidden">
    <img className='absolute top-10 min-w-[800px] w-full h-64 object-cover overflow-x-hidden ' src={imageHolder} alt="" />
    <div className='h-64 z-10 relative flex '>
      <div className=" hidden h-full basis-1/2 md:flex flex-col items-center justify-center mt-8 ">
        <div className="text-white 2xl:mt-8 flex flex-col justify-center text-left space-y-2">
        <p className="text-sm 2xl:text-2xl font-roboto">A good discount opportunity</p>
        <h3 className='text-4xl 2xl:text-7xl '>Save 15% on AWS</h3>
        <p className='text-xs 2xl:text-base text-gray-200 font-roboto w-96 2xl:w-[500px]'>Get the power and economies of cloud computing (AWS) with 15% off. Signup to get the access</p>
        </div>

      </div>
      <div className=" w-full h-full md:basis-1/2 flex justify-center md:block">
      <form className='h-full' onSubmit={onSubmit} action="">
      <div className="  w-80 sm:w-72 2xl:w-[450px] h-fit 2xl:h-[800px] bg-gray-100 rounded-md ">
        <div className="head rounded-md bg-[#FCAA2D] px-5 py-8 flex flex-col items-center justify-center space-y-2 text-white">
          <h3 className="text-xl 2xl:text-4xl">Signup for Free</h3>
          <p className='text-xs 2xl:text-sm  w-48'>And recieve over 100+ free quality courses</p>
        </div>
        <div className=" px-7 py-10 sm:py-5 2xl:py-10 space-y-4 ovrflow-visible">
          <input required onChange={(e)=>{setName(e.target.value)}} className='text-sm 2xl:text-lg 2xl:p-3 p-2 w-full' type="text" placeholder='Your Name' name="" id="" />
          <input required onChange={(e)=>{setEmail(e.target.value)}} className='text-sm 2xl:text-lg 2xl:p-3 p-2 w-full ' type="text" placeholder='Email' name="" id="" />
          <input required onChange={(e)=>{setContactNo(e.target.value)}} className='text-sm 2xl:text-lg 2xl:p-3 p-2 w-full ' type="text" placeholder='Mobile' name="" id="" />
        </div>
        <button className="my-2 py-2 2xl:py-3 2xl:px-6 px-3 bg-[#FCAA2D] rounded-md text-sm 2xl:text-lg text-white">Get it Now</button>
      </div>
      </form>
      </div>

    </div>

  </div>
</div>
  )
}

export default HomeSection7