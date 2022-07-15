import React from 'react'
import logo from '../assets/navbar/MicroDegree Web.png'
import {SearchIcon} from '@heroicons/react/solid'
import { Courses } from '../Courses'
import { useState } from 'react'
import { useEffect } from 'react'

function Navbar() {
  const [input, setInput] = useState('')
  const [searchOutput, setSearchOutput] = useState([])

  const keys = ["course_name","course_category"]

  useEffect(() => {
    return () => {

      if(input===''){
        // window.location.reload(true)
        setSearchOutput([])
      }
      else{
        setSearchOutput(Courses.filter((item)=> keys.some((key)=>item[key].toLowerCase().includes(input))))
      }
        
}
  }, [input])

  return (
    <div className='flex p-6 px-7 justify-between items-center'>
      <div className='flex-shrink'>
        <img className="min-w-[130px] max-w-[130px]" src={logo} alt="" />
      </div>
      <div className='flex md:basis-7/12 sm:basis-9/12 justify-start items-center '>
        <div className=' hidden sm:block basis-5/12 flex-shrink mr-3 relative '>
      <form className="flex  bg-white p-[0.4rem] p-y-2 rounded-md">
            <input className='w-full text-sm outline-none' onChange={(e)=> {e.target.value?setInput(e.target.value):setInput('')}}  placeholder='what do you want to learn' type='text'></input>
            <SearchIcon className='w-7 text-white p-1 rounded-md bg-[#FF2A67]'></SearchIcon>
          </form>
          <div className=' border-t-2 w-full absolute z-10 '>
            {searchOutput.map(item=>(
              <h1 key={item.id} className='w-full bg-white text-sm py-2 text-left px-2  text-gray-700'>{item.course_name}</h1>
              ))}
          </div>
          </div>
          <ul className="flex basis-7/12 justify-around space-x-4">
              <li><a href="https://courses.microdegree.work/pages/premium-courses">Courses</a></li>
              
              <li className='w-[150px] hidden sm:block'>Ph. +91 8047109999</li>
              <li>Login</li>
            </ul>
      </div>

    </div>
  )
}


export default Navbar