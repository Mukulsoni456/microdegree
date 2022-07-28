
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import elipse2 from "./assets/home/background/Ellipse 2.png";
import elipse3 from "./assets/home/background/Ellipse 3.png";
import elipse4 from "./assets/home/background/Ellipse 4.png";
import elipse5 from "./assets/home/background/Ellipse 5.png";
import elipse6 from "./assets/home/background/Ellipse 6.png";
import elipse7 from "./assets/home/background/Ellipse 7.png";
import elipse8 from "./assets/home/background/Ellipse 8.png";
import elipse9 from "./assets/home/background/Ellipse 9.png";
import elipse10 from "./assets/home/background/Ellipse 10.png";
import elipse11 from "./assets/home/background/Ellipse 11.png";
import CoursePage from "./pages/CoursePage"

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

  return (
    <div className="App relative w-full h-full overflow-x-hidden overflow-y-hidden font-roboto ">
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
      <div className='  overflow-x-hidden '>

      <Router>
      <Navbar setSearchedResults={setSearchedResults}></Navbar>
      <Routes>
        {
          searchedResults.length!=0?<Route exact path="/" element={<SearchedOutput searchedResults={searchedResults} setSearchedResults={setSearchedResults}></SearchedOutput>}/>:<Route exact path="/" element={<Home></Home>}/>
        }
        {/* <Route exact path="/courses" element={<CoursePage></CoursePage>}/> */}
        
      

   </Routes>
   <Footer></Footer>
        </Router>
      </div>

    </div>
  );
}

export default App;
