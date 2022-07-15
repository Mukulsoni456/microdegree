import React from 'react'
import { useState } from 'react';
import db from "../features/firebase";
import { addDoc, query, collection } from "firebase/firestore";
const q = query(collection(db, "query"));

function Modal({setViewModal, viewModal}) {

  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Message, setMessage] = useState('')
    
  console.log(Name, Email, Message)

  const onSubmit= async (e) => {
    e.preventDefault();


    await addDoc(q, {
      name: Name,
      email: Email,
      message: Message,
    });

    console.log("hi this is mukul");
  
    setViewModal(!viewModal);
  };
  
    // console.log(viewModal)

  return (
    <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
    <div className="absolute bg-black opacity-80 inset-0 -z-10"></div>
    <div className='w-full h-screen justify-center flex items-start p-10'>
 <div className="w-full  max-w-[400px] shrink py-2 px-5  rounded-xl shadow-lg  bg-white ">
   {/* <!--content--> */}
   <div className="">
   <form onSubmit={onSubmit} action="" className=''>
     {/* <!--body--> */}
     <div className='p-3 space-y-5'>

                <h1 className='text-3xl'>Contact us</h1>
                <div className='space-y-7'>
                <div className='w-full text-left'>
                    <p className='text-sm'>Your Name</p>
                    <input onChange={(e)=>{setName(e.target.value)}} className='outline-none border-b-2 w-full' placeholder='Your Name' type="text" name="name" id="name" />
                </div>
                <div className='w-full text-left'>
                    <p className='text-sm'>Email</p>
                    <input onChange={(e)=>{setEmail(e.target.value)}} className='outline-none border-b-2 w-full' placeholder='Enter Your Email Address' type="email" name="name" id="name" />
                </div>
                <div className='w-full text-left' >
                    <p className='text-sm'>Message</p>
                    <textarea onChange={(e)=>{setMessage(e.target.value)}} className='w-full border-2 outline-none p-2' name="message" placeholder='Your message here' id="" cols="15" rows="5"></textarea>
                </div>
                </div>

            </div>
     {/* <!--footer--> */}
     <div className="p-3  mt-2 text-center space-x-4 md:block">
         <button onClick={()=>setViewModal(!viewModal)}  className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
             Cancel
         </button>
         <button type='submit' className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Submit</button>
     </div>
     </form>
   </div>
   </div>
 </div>
</div>
  )
}

export default Modal