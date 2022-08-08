import React from 'react'
import { useState } from 'react';
import db from "../features/firebase";
import {XIcon} from '@heroicons/react/solid'
import { addDoc, query, collection } from "firebase/firestore";
import modal1 from "../assets/home/heroSection/modal1.png"
const q = query(collection(db, "query"));

function Modal({setViewModal, viewModal}) {

  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [MobileNo, setMobileNo] = useState('')
    
  console.log(Name, Email)

  const onSubmit= async (e) => {
    e.preventDefault();


    await addDoc(q, {
      name: Name,
      email: Email,
      mobileNo: MobileNo
    });

    console.log("hi this is mukul");
  
    setViewModal(!viewModal);
  };
  
    // console.log(viewModal)

  return (
    <div  className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
    <div onClick={()=>setViewModal(!viewModal)} className="absolute h-full w-full bg-black bg-opacity-80 inset-0 -z-10"></div>
    <div className='relative  flex p-3'>
 <div className="relative w-full flex flex-col max-w-[400px] shrink py-2 px-5  rounded-xl shadow-lg  bg-gray-900 ">
  
   {/* <!--content--> */}
   <div className='text-left  text-lg  px-3 pt-10 pb-4 text-gray-300'>Please enter your details to get a call back from <span className='text-xl '> Career Mentor</span> </div>
   {/* <div className=' flex justify-center'><img className='w-80' src={modal1} alt="" /></div> */}
   {/* <div className='text-2xl text-left text-gray-800 p-3'>Please enter your details to get a call back from a Career Mentor</div> */}
   <div onClick={()=>setViewModal(!viewModal)} className='absolute right-4 top-3'> <XIcon className='w-7 p-1 text-white hover:text-yellow-500'></XIcon> </div>
   <div className="">
   <form onSubmit={onSubmit} action="" className=''>
     {/* <!--body--> */}
     <div className='p-3 py-6 space-y-5'>
                <div className='space-y-7'>
                <div className='w-full text-left'>
                    <p className='text-sm 2xl:text-base text-gray-100'>Your Name</p>
                    <input onChange={(e)=>{setName(e.target.value)}} className='  text-[0.95rem] 2xl:text-lg outline-none border-gray-800 bg-transparent border-b-2 w-full text-gray-100' placeholder='Your Name' type="text" name="name" id="name" />
                </div>
                <div className='w-full text-left'>
                    <p className='text-sm 2xl:text-base text-gray-100'>Email</p>
                    <input onChange={(e)=>{setEmail(e.target.value)}} className='  text-[0.95rem] 2xl:text-lg outline-none border-gray-800 bg-transparent border-b-2 w-full text-gray-100' placeholder='Enter Your Email Address' type="email" name="email" id="email" />
                </div>
                <div className='w-full text-left'>
                    <p className='text-sm 2xl:text-base text-gray-100'>Mobile No</p>
                    <input onChange={(e)=>{setMobileNo(e.target.value)}} className=' font-thin text-[0.95rem] 2xl:text-lg outline-none border-gray-800 bg-transparent border-b-2 w-full text-gray-100' placeholder='Enter Your Mobile No' type="text" pattern='[1-9]{1}[0-9]{9}' name="number" id="number" />
                </div>

                </div>

            </div>
     {/* <!--footer--> */}
     <div className="p-3  mt-2 text-center space-x-4 md:block">
         <button type='submit' className="mb-2 2xl:text-lg md:mb-0 bg-gradient-to-br rounded-sm from-yellow-500 to-orange-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white w-full hover:shadow-lg ">Submit</button>
     </div>
     </form>
   </div>
   </div>
 </div>
</div>
  )
}

export default Modal