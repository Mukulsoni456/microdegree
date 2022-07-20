import React from 'react'
import logo from '../assets/navbar/MicroDegree Web.png'
import {SearchIcon, PhoneIcon} from '@heroicons/react/solid'
import { Courses } from '../Courses'
import { useState } from 'react'
import { useEffect } from 'react'

function Navbar({setSearchedResults}) {
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

  const handleSearched =(e)=>{
    console.log(e.target.innerText)

    setSearchedResults(Courses.filter((item)=> item.course_name.toLowerCase().includes(e.target.innerText.toLowerCase())))

    
  }

  return (
    <div className='flex max-h-[70px] h-full w-full p-6 px-7  justify-between items-center '>
      <div className='flex-shrink flex items-center '>
        <img className="min-w-[130px] max-w-[130px]" src={logo} alt="" />
      </div>
      <div className=' flex basis-1 md:basis-7/12 sm:basis-9/12 justify-start items-center '>
        <div className=' hidden max-h-[40px]  sm:block basis-5/12 flex-shrink mr-3 relative '>
      <form className="flex h-full  bg-white p-[0.4rem] p-y-2 rounded-md">
            <input className=' h-full w-full text-sm outline-none' onChange={(e)=> {e.target.value?setInput(e.target.value):setInput('')}}  placeholder='what do you want to learn' type='text'></input>
            <SearchIcon className='w-7 text-white p-1 rounded-md bg-[#FF2A67]'></SearchIcon>
          </form>
          <div className=' border-t-2 w-full absolute z-10 '>
            {searchOutput.map(item=>(
              <h1 onClick={handleSearched} key={item.id} className='w-full bg-white text-sm py-2 text-left px-2  text-gray-700'>{item.course_name}</h1>
              ))}
          </div>
          </div>
          <ul className="flex w-full md:basis-7/12 ml-4 sm:ml-8 justify-around items-center space-x-2 ">
              <li><a href="https://courses.microdegree.work/pages/premium-courses">Courses</a></li>

             <a href="tel:+918047109999"><li className='w-[150px] hidden sm:block hover:text-[#FF2A67]'>Ph.+918047109999</li></a>
              <li>Login</li>
              <a className='sm:hidden flex justify-center items-start' href="tel:+918047109999"> <PhoneIcon className='w-6 ml-1 bg-[#FF2A67] text-white rounded-full p-[0.3rem]'></PhoneIcon> </a>
            </ul>
      </div>

    </div>
  )
}


export default Navbar