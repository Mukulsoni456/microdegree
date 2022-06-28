import React from 'react'
import { useState } from 'react';

function Modal({setViewModal, viewModal}) {

    
    // console.log(viewModal)

  return (
    <div class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
    <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
 <div class="w-full  max-w-md p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
   {/* <!--content--> */}
   <div class="">
     {/* <!--body--> */}
     <div className='p-6 space-y-5'>
                <h1 className='text-3xl'>Contact us</h1>
                <div className='space-y-7'>
                <div className='w-full text-left'>
                    <p className='text-sm'>Your Name</p>
                    <input className='outline-none border-b-2 w-full' placeholder='Your Name' type="text" name="name" id="name" />
                </div>
                <div className='w-full text-left'>
                    <p className='text-sm'>Email</p>
                    <input className='outline-none border-b-2 w-full' placeholder='Enter Your Email Address' type="email" name="name" id="name" />
                </div>
                <div className='w-full text-left' >
                    <p className='text-sm'>Message</p>
                    <textarea className='w-full border-2 outline-none p-2' name="message" placeholder='Your message here' id="" cols="15" rows="5"></textarea>
                </div>
                </div>
            </div>
     {/* <!--footer--> */}
     <div class="p-3  mt-2 text-center space-x-4 md:block">
         <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
             Cancel
         </button>
         <button onClick={()=>setViewModal(!viewModal)}  class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Submit</button>
     </div>
   </div>
 </div>
</div>
  )
}

export default Modal