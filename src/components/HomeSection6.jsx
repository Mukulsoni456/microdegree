import React from 'react'
import Section6Card from "../components/Section6Card";

function HomeSection6() {
  return (
    <section className=' p-10 sm:pl-28 sm:py-20 w-full h-full flex items-center justify-between '>
  <div className=" w-full sm:basis-2/5 sm:min-w-[500px] text-left space-y-3 ">
    <h1 className='text-4xl'><span className="text-bold">Industry</span> <span>Trainers.</span></h1>
    <p className="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque, quidem dicta incidunt commodi quaerat, adipisci accusamus velit deserunt sed illo aspernatur nobis pariatur nemo odit facere consequuntur recusandae. Eos.
    </p>

  </div>
  <div className=' hidden  w-[800px] -mr-[120px] md:flex overflow-x-hidden space-x-7'>
    <Section6Card></Section6Card>
    <Section6Card></Section6Card>
    <Section6Card></Section6Card>
  </div>
</section>
  )
}

export default HomeSection6