import React from 'react'
import CourseSection from '../components/course page/CourseSection'
import Placements from '../components/Placements'
import Learners from '../components/Learners'
import Pricing from '../components/Pricing'

function CoursePage() {
  return (
    <div>
        <div className='banner_container'>
            <div>banner</div>
            <div> card</div>
        </div>

        <CourseSection></CourseSection>
        <Placements></Placements>
        <Learners></Learners>
        <Pricing></Pricing>
    </div>
  )
}

export default CoursePage