import React from 'react'
import { useState } from 'react'
import rectangle40 from '../assets/home/section10/rectangle40.png'
import rectangle41 from '../assets/home/section10/rectangle41.png'
import section10bg from '../assets/home/section10/section10bg.png'
import db from "../features/firebase";
import { addDoc, query, collection } from "firebase/firestore";

const q = query(collection(db, "enrollments"));

function HomeSection10() {

    const [Name, setName] = useState('')
    const [ContactNo, setContactNo] = useState('')
    const [EnrollId, setEnrollId] = useState('');
    const [CourseName, setCourseName] = useState('');
    const [Message, setMessage] = useState('');


const onSubmit= async (e) => {
  e.preventDefault();
  await addDoc(q, {
    name: Name,
    contactNo: ContactNo,
    enrollId: EnrollId,
    courseName: CourseName,
    message: Message,
  });


};

    console.log(Name, ContactNo, EnrollId, CourseName, Message)

  return (
<div className="flex  px-3 md:px-28 py-20 w-full ">
<div className=' w-full  sm:basis-1/2 flex-none '>
  <div className="  relative w-full px-5 h-[450px]">
<div className="absolute  top-9 right-4 ">
  <img className=' w-80  object-contain' src={section10bg} alt="" />
</div>
<div className="w-72 absolute right-4 top-4 z-10  ">
  <div className="relative w-full h-full">
  <img className="object-fit absolute" src={rectangle40} alt="" />
    <img className="object-fit z-10 absolute" src={rectangle41} alt="" />
    <form onSubmit={onSubmit} action='' className=" absolute w-full h-full top-0 left-0 p-14 space-y-3  z-20">

      <input onChange={(e)=>{setName(e.target.value)}} className='w-full text-sm text-gray-700 p-1 px-2 rounded-sm outline-none bg-[rgba(255,255,255,0.85)]' type="text" name="" placeholder="Your name" id="" />
      <input onChange={(e)=>{setContactNo(e.target.value)}} className='w-full text-sm text-gray-700 p-1 px-2 rounded-sm outline-none bg-[rgba(255,255,255,0.85)]' type="number" name="" placeholder="Mobile No" id="" />
      <input onChange={(e)=>{setEnrollId(e.target.value)}} className='w-full text-sm text-gray-700 p-1 px-2 rounded-sm outline-none bg-[rgba(255,255,255,0.85)]' type="text" name="" placeholder="Enroll" id="" />
      
      <div className="text-gray-700">
    <label className='text-gray-700' htmlFor="Courses"></label>
    <select className='w-full text-sm text-gray-700 p-1 px-2 rounded-sm outline-none bg-[rgba(255,255,255,0.85)]'
      value={CourseName}
      onChange={(e) => {
        setCourseName(e.target.value);
      }}
      required
      name="service"
      id="service"
    >
      <option value="">Courses</option>
      <option value="Python Course">Python Course</option>
      <option value="Python Course">Python Course</option>
      <option value="Python Course">Python Course</option>
      <option value="Aws Course">Aws Courses</option>
    </select>
    </div>

      <textarea onChange={(e)=>{setMessage(e.target.value)}} className='text-sm w-full rounded-sm p-2 bg-[rgba(255,255,255,0.85)] outline-none text-gray-800 ' name="" id="" cols="24" placeholder='Message' rows="4"></textarea>

      <button className='bg-blue-600 px-4 py-2 rounded-sm text-xs text-white '>Submit Request</button>
    </form>
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
</div>
  )
}

export default HomeSection10