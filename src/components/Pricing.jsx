import React from 'react'
import PricingCard from './PricingCard'

function CmnSection3() {
  return (
    <div className='w-full px-28 py-4 flex flex-col items-center'>
        <div className='w-[500px] space-y-4 flex flex-col items-center'>
            <h2 className='text-5xl font-semibold'>Choose the course right for your </h2>
            <p className='text-[0.8rem]'>Lorem ipsum dolor sit amet consecteturQuae, assumenda!</p>
            <div className='flex text-[0.9rem]'>
                <p>Bill Monthly</p>
                <div className='switch'>
                <div class="flex justify-center">
  <div class="form-check form-switch">
    <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label class="form-check-label inline-block text-gray-800" for="flexSwitchCheckDefault">Default switch checkbox input</label>
  </div>
</div> 
                </div>
                <p>Bill Annualy <span>Save 18%</span></p>
            </div>
        </div>
        <div className="flex justify-around md:w-[900px] flex-wrap">
            <PricingCard cardColor='bg-blue-200' textColor='text-blue-500' title='Prime' Price='1000' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, esse?'></PricingCard>
            <PricingCard cardColor='bg-blue-200' textColor='text-blue-500' title='Prime' Price='1000' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, esse?'></PricingCard>
            <PricingCard cardColor='bg-blue-200' textColor='text-blue-500' title='Prime' Price='1000' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, esse?'></PricingCard>
        </div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam natus, sit veritatis a accusantium quod ut eos quo doloremque alias? Unde quisquam fugiat hic.
        </div>
    </div>
  )
}

export default CmnSection3