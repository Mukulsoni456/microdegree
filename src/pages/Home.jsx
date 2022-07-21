import React from "react";
import { useState } from "react";
import Modal from "../components/Modal";
import Learners from "../components/Learners";
import Placements from "../components/Placements";
import Footer from "../components/Footer";
import VideoModal from "../components/VideoModal";
import HomeForm2 from "../components/HomeForm2";
import Hero from "../components/Hero";
import PopularCourses from "../components/PopularCourses";
import JoinMicroDegree from "../components/JoinMicroDegree";
import IndustryTrainers from "../components/IndustryTrainers";
import HomeForm1 from "../components/HomeForm1";
import NewsMedia from "../components/News&Media";
import Recognisation from "../components/RecognisationSection"


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

<Hero viewModal={viewModal} setViewModal={setViewModal} videoModal={videoModal} setvideoModal={setvideoModal} videoOutput={videoOutput} setVideoOutput={setVideoOutput}   ></Hero>

<PopularCourses></PopularCourses>
<Recognisation></Recognisation>
<JoinMicroDegree></JoinMicroDegree>
<Placements></Placements>
<IndustryTrainers></IndustryTrainers>
<HomeForm1></HomeForm1>
<Learners></Learners>
<NewsMedia></NewsMedia>
<HomeForm2></HomeForm2>
      </div>
    </div>
  );
}

export default Home;
