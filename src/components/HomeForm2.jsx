import React from 'react'
import { useState } from 'react'
import rectangle40 from '../assets/home/section10/rectangle40.png'
import rectangle41 from '../assets/home/section10/rectangle41.png'
import section10bg from '../assets/home/section10/section10bg.png'
import db from "../features/firebase";
import { addDoc, query, collection } from "firebase/firestore";
import tgLogo from '../assets/home/section10/tgLogo.png'

const q = query(collection(db, "enrollments"));

function HomeSection10() {

    const [Name, setName] = useState('')
    const [ContactNo, setContactNo] = useState('')
    const [Email, setEmail] = useState('')
    // const [EnrollId, setEnrollId] = useState('');
    // const [CourseName, setCourseName] = useState('');
    // const [Message, setMessage] = useState('');


const onSubmit= async (e) => {
  e.preventDefault();
  await addDoc(q, {
    name: Name,
    contactNo: ContactNo,
    email: Email
    // enrollId: EnrollId,
    // courseName: CourseName,
    // message: Message,
  });


};



  return (
    <>
<div className="sm:flex hidden px-3 md:px-28 py-20 w-full oveflow-visible">
<div className=' w-full  sm:basis-1/2 flex-none overflow-visible'>
  <div className="  relative w-full overflow-x-visible mt-5  px-5 h-[550px] xl:h-[550px] 2xl:h-[550px]">
<div className="absolute overflow-x-visible top-14 sm:top-11 right-4 ">
  <img className=' min-w-[350px] xl:w-[400px] 2xl:w-[400px]  object-contain' src={section10bg} alt="" />
</div>
<div className="w-80 xl:w-[370px] 2xl:w-[370px] h-full absolute right-4 top-4 z-10  ">
  <div className="relative w-full h-full">
  <img className="object-fit absolute" src={rectangle40} alt="" />
    <img className="object-fit z-10 absolute" src={rectangle41} alt="" />
    <form onSubmit={onSubmit} action='' className=" absolute flex flex-col justify-center items-center w-full h-full p-10 px-5 space-y-3  z-20">

      <input required onChange={(e)=>{setName(e.target.value)}} className='w-full text-sm xl:text-xl xl:p-4 2xl:text-xl text-gray-700 p-3 px-2 rounded outline-none bg-[rgba(255,255,255,0.85)]' type="text" name="" placeholder="Your name" id="" />
      <input required onChange={(e)=>{setContactNo(e.target.value)}} className='w-full xl:text-xl text-sm xl:p-4 2xl:text-xl text-gray-700 p-2 px-3 rounded outline-none bg-[rgba(255,255,255,0.85)]' type="number" name="" placeholder="Mobile No" id="" />
      <input required onChange={(e)=>{setEmail(e.target.value)}} className='w-full xl:text-xl text-sm xl:p-4 2xl:text-xl text-gray-700 p-3 px-2 rounded outline-none bg-[rgba(255,255,255,0.85)]' type="email" name="" placeholder="Email" id="" />
      {/* <input required onChange={(e)=>{setEnrollId(e.target.value)}} className='w-full text-sm 2xl:text-base text-gray-700 p-2 px-2 rounded outline-none bg-[rgba(255,255,255,0.85)]' type="text" name="" placeholder="Enroll" id="" /> */}
      
      {/* <div className="text-gray-700">
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
    </div> */}

      {/* <textarea required onChange={(e)=>{setMessage(e.target.value)}} className='text-sm w-full rounded-sm p-2 bg-[rgba(255,255,255,0.85)] outline-none text-gray-800 ' name="" id="" cols="24" placeholder='Message' rows="4"></textarea> */}

      <button className='bg-[#4C1BCF] mt-2 px-4 py-3 w-full  rounded text-xs  xl:p-4 xl:text-xl  text-white '>Submit Request</button>
    </form>
  </div>
  </div>
  </div>
</div>

{/* secttion10 part 2 */}
<div className=" sm:block hidden shrink basis-1/2 p-5 space-y-6">
<div className='flex items-center space-x-3'><div className='bg-[#FF0049]   p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049] p-[0.15rem]   w-[0.1rem] rounded-xl'></div> <p className='uppercase font-bold text-gray-400 tracking-widest text-xs '>About Microdegree</p> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> <div className='bg-[#FF0049]  p-[0.15rem] h-[0.2rem] w-[0.2rem] rounded-xl'></div> </div>

  <div className=" w-full text-left space-y-5 ">
    
  <h1 className=" text-5xl xl:text-6xl 2xl:text-7xl text-gray-700 ">Multilingual <br /> <span className="font-bold">IT Skilling</span> Platform <br />for <span className="font-bold"> Bharat</span> </h1>
  <p className='text-gray-700 text-sm xl:text-base 2xl:text-base'>Platform where you Learn the most In-demand IT Skills that are currently booming and increase your chance of landing a high paying job.</p>
  <ul className=" w-full text-sm xl:text-base 2xl:text-lg text-gray-700">
    <li className='w-full flex items-center space-x-3'> <div className="rounded-full w-2 h-2 bg-gray-800"></div> <p>Get trained by industry experts</p>.</li>
    <li className='w-full flex items-center space-x-3'> <div className="rounded-full w-2 h-2 bg-gray-800"></div> <p>Work on real world projects</p>.</li>
    <li className='w-full flex items-center space-x-3'> <div className="rounded-full w-2 h-2 bg-gray-800"></div> <p>Interview preparation</p>.</li>
    <li className='w-full flex items-center space-x-3'> <div className="rounded-full w-2 h-2 bg-gray-800"></div> <p>Placement Assistance</p>.</li>

  </ul>
<div  className='pr-4 flex items-center border-2 rounded-full w-fit border-blue-300 space-x-2 '>
    <img className='w-8 2xl:w-10  rounded-full' src={tgLogo} alt="" />
    <a href="https://t.me/microdegreekannada"><p className='text-blue-400 text-lg font-medium'>Join Our Telegram</p></a>
  </div>
  </div>
</div>
</div>

{/* for Mobile vesion */}
<div>
  <div className='sm:hidden bg-[#0f2c3f]     mt-10 py-12 space-y-7 '>
    <div className='py-4 px-1 '>
    <h2 className='text-2xl font-roboto leading-[2.4rem] font-[500] px-4 text-left text-white '>Please enter your details to get a call back from <span className=' w-full text-3xl  py-1 font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-orange-500 '>Career Mentor</span> </h2>
    </div>
  <form onSubmit={onSubmit} action='' className=" px-5 flex flex-col justify-center items-center w-full space-y-4 ">

<input required onChange={(e)=>{setName(e.target.value)}} className='w-full text-base p-4  text-gray-700 rounded outline-none bg-[rgba(255,255,255,0.85)]' type="text" name="" placeholder="Your name" id="" />

<input required onChange={(e)=>{setContactNo(e.target.value)}} className='w-full text-base p-4  text-gray-700 rounded outline-none bg-[rgba(255,255,255,0.85)]' type="number" name="" placeholder="Mobile No" id="" />

<input required onChange={(e)=>{setEmail(e.target.value)}} className='w-full text-base p-4  text-gray-700 rounded outline-none bg-[rgba(255,255,255,0.85)]' type="email" name="" placeholder="Email" id="" />

<button className='bg-gradient-to-br from-orange-500 to-yellow-600 mt-2 px-4 py-4 w-full  rounded text-lg  text-white '>Submit Request</button>
<p className='text-xs py-5 leading-5 text-white text-left'>By providing your contact details, you agree to our <a className='border-b-[0.3px] border-gray-200' href='https://pages.microdegree.work/termsnconditions.html'> Terms of Use </a> & <a className='border-b-[0.3px] border-gray-200' href='https://pages.microdegree.work/termsnconditions.html'>  Privacy Policy </a> </p>
    </form>
  </div>
</div>
</>
  )
}

export default HomeSection10