import React from 'react'
import Section2 from '../components/course page/Section2'
import CmnSection2 from '../components/CmnSection2'
import CmnSection1 from '../components/CmnSection1'
import CmnSection3 from '../components/CmnSection3'

function CoursePage() {
  return (
    <div>
        <div className='banner_container'>
            <div>banner</div>
            <div> card</div>
        </div>

        <Section2></Section2>
        <CmnSection2></CmnSection2>
        <CmnSection1></CmnSection1>
        <CmnSection3></CmnSection3>
    </div>
  )
}

export default CoursePage