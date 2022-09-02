
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import elipse2 from "./assets/homeWebp/background/Ellipse 2.png";
import elipse3 from "./assets/homeWebp/background/Ellipse 3.png";
import elipse4 from "./assets/homeWebp/background/Ellipse 4.png";
import elipse5 from "./assets/homeWebp/background/Ellipse 5.png";
import elipse6 from "./assets/homeWebp/background/Ellipse 6.png";
import elipse7 from "./assets/homeWebp/background/Ellipse 7.png";
import elipse8 from "./assets/homeWebp/background/Ellipse 8.png";
import elipse9 from "./assets/homeWebp/background/Ellipse 9.png";
import elipse10 from "./assets/homeWebp/background/Ellipse 10.png";
import elipse11 from "./assets/homeWebp/background/Ellipse 11.png";


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import SearchedOutput from './pages/SearchedOutput';
import { useState } from 'react';


function App() {

  const [searchedResults, setSearchedResults] = useState([])
  const [alertStatus, setAlertStatus] = useState(false)

  
  const handleAlert =()=>{
    setAlertStatus(!alertStatus)
    setTimeout(() => (
      setAlertStatus(false)
    ), 4000);
  }

  return (
    <div className="App relative w-full h-full overflow-x-hidden overflow-y-hidden font-poppins ">
      {/* <div className='relative w-full h-full '> */}
        {/* </div> */}

        <div className='absolute top-0 bg-repeat -z-10 w-full h-full '>
          <div className='relative h-full '>
        <img className="w-52  absolute top-10 -left-20 -z-10   " src={elipse2} alt="" />
        <img className="w-52 absolute top-40 right-0 -z-10" src={elipse3} alt="" />
        <img className="w-52 absolute top-60 left-96 -z-10" src={elipse4} alt="" />
        <img
          className="w-52 absolute top-[500px] -z-10 left-0"
          src={elipse5}
          alt=""
        />
        <img
          className="w-52 absolute top-[700px] -z-10 right-20"
          src={elipse6}
          alt=""
        />
        <img
          className="w-52 absolute top-[850px] -z-10 left-96"
          src={elipse7}
          alt=""
        />
        <img
          className="w-52 absolute top-[1050px] -z-10 left-10"
          src={elipse8}
          alt=""
        />
        <img
          className="w-52 absolute top-[1150px] -z-10 right-10"
          src={elipse9}
          alt=""
        />
        <img
          className="w-52 absolute top-[1550px] -z-10 -left-24"
          src={elipse2}
          alt=""
        />
        <img
          className="w-52 absolute top-[1750px] -z-10 right-0"
          src={elipse3}
          alt=""
        />
        <img
          className="w-52 absolute top-[1950px] -z-10 left-96"
          src={elipse4}
          alt=""
        />
        <img
          className="w-52 absolute top-[2450px] -z-10 right-10"
          src={elipse6}
          alt=""
        />
        <img
          className="w-52 absolute top-[2650px] -z-10 left-96"
          src={elipse7}
          alt=""
        />
        <img
          className="w-52 absolute top-[2850px] -z-10 left-10"
          src={elipse8}
          alt=""
        />
        <img
          className="w-52 absolute top-[3150px] -z-10 left-96"
          src={elipse11}
          alt=""
        />
        <img
          className="w-52 absolute top-[3350px] -z-10 right-5"
          src={elipse10}
          alt=""
        />
        <img
          className="w-52 absolute top-[3350px] -z-10 right-5"
          src={elipse10}
          alt=""
        />
        {/* ********************** */}
        <img
          className="w-52 absolute top-[4350px] -z-10 right-5"
          src={elipse10}
          alt=""
        />
          <img
          className="w-52 absolute top-[4000px] -z-10 left-44"
          src={elipse4}
          alt=""
        />
                <img
          className="w-52 absolute top-[3850px] -z-10 right-56"
          src={elipse3}
          alt=""
        />
          <img
          className="w-52 absolute top-[4550px] -z-10 -left-24"
          src={elipse2}
          alt=""
        />
                  <img
          className="w-52 absolute top-[4350px] -z-10 left-[200px]"
          src={elipse3}
          alt=""
        />
        {/* ******************************** */}
        <img
          className="w-52 absolute top-[5350px] -z-10 right-5"
          src={elipse10}
          alt=""
        />
          <img
          className="w-52 absolute top-[5000px] -z-10 left-44"
          src={elipse4}
          alt=""
        />
                <img
          className="w-52 absolute top-[5850px] -z-10 right-56"
          src={elipse3}
          alt=""
        />
          <img
          className="w-52 absolute top-[5550px] -z-10 -left-24"
          src={elipse2}
          alt=""
        />
                  <img
          className="w-52 absolute top-[6200px] -z-10 left-[200px]"
          src={elipse4}
          alt=""
        />
                  <img
          className="w-52 absolute top-[6600px] -z-10 -left-[80px]"
          src={elipse2}
          alt=""
        />
                  <img
          className="w-52 absolute top-[7000px] -z-10 -right-[80px]"
          src={elipse4}
          alt=""
        />
                  <img
          className="w-52 absolute top-[6700px] -z-10 right-[50px]"
          src={elipse5}
          alt=""
        />
                  <img
          className="w-52 absolute top-[7300px] -z-10 left-[30px]"
          src={elipse4}
          alt=""
        />  
                  <img
          className="w-52 absolute top-[7600px] -z-10 right-[30px]"
          src={elipse3}
          alt=""
        />
                  <img
          className="w-52 absolute top-[8000px] -z-10 left-[30px]"
          src={elipse4}
          alt=""
        />  
                  <img
          className="w-52 absolute top-[8300px] -z-10 right-[30px]"
          src={elipse3}
          alt=""
        />
                  <img
          className="w-52 absolute top-[8600px] -z-10 left-[30px]"
          src={elipse4}
          alt=""
        />  
                  <img
          className="w-52 absolute top-[9000px] -z-10 right-[30px]"
          src={elipse3}
          alt=""
        />
                  <img
          className="w-52 absolute top-[9600px] -z-10 left-[30px]"
          src={elipse4}
          alt=""
        />  
                  <img
          className="w-52 absolute top-[9900px] -z-10 right-[30px]"
          src={elipse3}
          alt=""
        />
                  <img
          className="w-52 absolute top-[10200px] -z-10 left-[30px]"
          src={elipse4}
          alt=""
        />  
                  <img
          className="w-52 absolute top-[10400px] -z-10 right-[30px]"
          src={elipse3}
          alt=""
        />

        
        </div>
        </div>

{/* Home section starts here */}
      <div className='  overflow-x-hidden w-full h-full relative '>

         <div className={` ${alertStatus?"block":'hidden'} fixed z-40 w-full h-screen flex justify-center items-end py-20 sm:items-end sm:py-5`}>
          <div class="bg-green-500 rounded-b text-white px-4 py-1 shadow-md" role="alert">
      <div class="flex">
        <div class="py-1"><svg class="fill-current h-6 w-6 text-white mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
        <div className=' flex flex-col justify-center items-start'>
          <p class="font-medium">Submitted Successfully</p>
          <p class="font-light text-xs xl:text-sm">Our Team will contact you shortly</p>
        </div>
      </div>
    </div>
    </div>


      <Router>
      <Navbar setSearchedResults={setSearchedResults}></Navbar>
      <Routes>
        {
          searchedResults.length!=0?<Route exact path="/" element={<SearchedOutput searchedResults={searchedResults} setSearchedResults={setSearchedResults}></SearchedOutput>}/>:<Route exact path="/" element={<Home handleAlert={handleAlert}></Home>}/>
        }

        
      

   </Routes>
   <Footer></Footer>
        </Router>
      </div>

    </div>
  );
}

export default App;
