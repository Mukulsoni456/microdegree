import React from "react";
import { useState } from "react";
import Modal from "../components/Modal";
import CmnSection1 from "../components/CmnSection1";
import CmnSection2 from "../components/CmnSection2";
import Footer from "../components/Footer";
import VideoModal from "../components/VideoModal";
import HomeSection10 from "../components/HomeSection10";
import HomeSection1 from "../components/HomeSection1";
import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";
import HomeSection4 from "../components/HomeSection4";
import HomeSection6 from "../components/HomeSection6";
import HomeSection7 from "../components/HomeSection7";
import HomeSection9 from "../components/HomeSection9";


function Home() {
const [videoModal, setvideoModal] = useState(false);
const [viewModal, setViewModal] = useState(false);
const [videoOutput, setVideoOutput]= useState()


  return (
    <div className="relative overflow-x-hidden">
      {/* main hone section starts from here */}


      <div className="main_container relative">
        {
          viewModal && 
          <Modal  viewModal={viewModal} setViewModal={setViewModal} ></Modal>
        }
        {
          videoModal && 

          <VideoModal vidLink={videoOutput.link} vidTitle={videoOutput.title} setvideoModal={setvideoModal} videoModal={videoModal}></VideoModal>
        }


{/* ************************************* Hero section ********************************  */}

<HomeSection1 viewModal={viewModal} setViewModal={setViewModal} videoModal={videoModal} setvideoModal={setvideoModal} videoOutput={videoOutput} setVideoOutput={setVideoOutput}   ></HomeSection1>

<HomeSection2></HomeSection2>
<HomeSection3></HomeSection3>
<HomeSection4></HomeSection4>
<CmnSection2></CmnSection2>
<HomeSection6></HomeSection6>
<HomeSection7></HomeSection7>
<CmnSection1></CmnSection1>
<HomeSection9></HomeSection9>
<HomeSection10></HomeSection10>
      </div>
    </div>
  );
}

export default Home;
