import React from 'react'
import placement1 from '../assets/home/section5/placement1.png'
import placement2 from '../assets/home/section5/placement2.png'
import placement3 from '../assets/home/section5/placement3.png'
import placement4 from '../assets/home/section5/placement4.png'
import Section5Card from './Section5Card'
import edgeLogo from '../assets/home/section5/7edgeLogo.png'
import tataLogo from '../assets/home/section5/tataLogo.png'
import mindstalkLogo from '../assets/home/section5/mindstalkLogo.png'
import tetherLogo from '../assets/home/section5/tetherLogo.png'
function CmnSection2() {
  return (
<div className="px-10 sm:px-28 py-10 w-full h-full space-y-10 text-left">
  <h1 className="text-4xl space-x-2 text-gray-600"><span className="font-bold text-gray-700">Placement</span> Diaries</h1>
  <div className="flex justify-between flex-wrap space-y-6 sm:s">
    <Section5Card title='Mani Nair' desc='Assosciative Software Developer' cardImg={placement1} logoImg={edgeLogo} ></Section5Card>
    <Section5Card title='Mani Nair' desc='Assosciative Software Developer' cardImg={placement2} logoImg={tataLogo} ></Section5Card>
    <Section5Card title='Mani Nair' desc='Assosciative Software Developer' cardImg={placement3} logoImg={mindstalkLogo} ></Section5Card>
    <Section5Card title='Mani Nair' desc='Assosciative Software Developer' cardImg={placement4} logoImg={tetherLogo} ></Section5Card>
  </div>
</div>
  )
}

export default CmnSection2