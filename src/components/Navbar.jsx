import React from 'react'
import logo from '../assets/navbar/MicroDegree Web.png'
import {SearchIcon} from '@heroicons/react/solid'
import { Courses } from '../Courses'
import { useState } from 'react'
import { useEffect } from 'react'



const style = {
  navbar:' w-full h-full items-center flex justify-between p-6  ',
  logo:'basis-1/4  flex justify-center items-center',
  nav:' basis-3/5 flex   space-x-12 ',
  search_box:' hidden sm:flex bg-white p-[0.4rem] p-y-2 rounded-md ',
  nav_items:' hidden sm:w-full',
  navlinks:' hidden w-full sm:flex items-center space-x-12'
}
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
      <div className={style.navbar}>
        <div className={style.logo}>
          <img className='min-w-[140px] max-w-[140px]' src={logo} alt="" />
        </div>
        <div className={style.nav}>
          <div className='w-96 relative'>
          <form className={style.search_box}>
            <input className='w-full text-sm outline-none' onChange={(e)=> {e.target.value?setInput(e.target.value):setInput('')}}  placeholder='what do you want to learn' type='text'></input>
            <SearchIcon className='w-7 text-white p-1 rounded-md bg-[#FF2A67]'></SearchIcon>
          </form>
          <div className=' border-t-2 w-full absolute z-1'>
            {searchOutput.map(item=>(
              <h1 className='w-full bg-white text-sm py-2 text-left px-2  text-gray-700'>{item.course_name}</h1>
              ))}
          </div>
          </div>

            <ul className={style.navlinks}>
              <li>Courses</li>
              <li>Ph. +91 8047109999</li>
              <li>Login</li>
            </ul>

        </div>
      </div>
  )
}

export default Navbar