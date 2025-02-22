import React from 'react'
import { GoCheckbox } from "react-icons/go";

const PricingPlans = () => {
  return (
    <div className='w-10/12'>
        <div>

           {/*------- Pricing Head text section----------*/}
            <div className='flex flex-col items-center justify-center mb-10'> 
                <div className='w-1/6 bg-blue-200 border border-blue-600 rounded-3xl px-4 py-2 mb-4'>
                    <p className='text-lg text-blue-800 font-medium text-center'>Pricing Plans</p>
                </div>
                <h1 className='text-4xl text-gray-800 font-bold'>Choose Your Perfect Plan</h1>
                <p className='text-base text-gray-400 font-normal'>Explore affordable packages designed to capture your best moments with quality.</p>   
            </div>
            {/*------- Pricing Head text section end here----------*/}

            {/*------- Pricing Toggle Button----------*/}
            <div></div>
            {/*------- Pricing Toggle Button end here----------*/}


            {/*------- Pricing section----------*/}
            <div className='flex items-center justify-center gap-10'>

              {/*------- Pricing section 1st div----------*/}
              <div className='w-1/4 bg-green-300 rounded-xl p-5'>
                <div className='mb-5'>
                  <p className='text-base text-gray-600 font-semibold mb-2'>Basic Plan</p>
                  <p className='text-base text-gray-600 font-semibold'><span className='text-3xl text-gray-800 font-bold'>$99</span>/month</p>
                </div>
                <div className='flex items-center mb-6'>
                  <button className='text-center bg-gray-200 text-gray-800 font-bold rounded-full py-2 px-4 w-full'>Get Started</button>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-1 text-sm text-gray-500 '>
                    <GoCheckbox></GoCheckbox>
                    <p>5 Photo Sessions per Month</p>
                  </div>
                  <div className='flex items-center gap-1 text-sm text-gray-500 '>
                    <GoCheckbox></GoCheckbox>
                    <p>30 Edited Photos Monthly</p>
                  </div>
                  <div className='flex items-center gap-1 text-sm text-gray-500 '>
                    <GoCheckbox></GoCheckbox>
                    <p>Online Photo Gallery Access</p>
                  </div>
                  <div className='flex items-center gap-1 text-sm text-gray-500 '>
                    <GoCheckbox></GoCheckbox>
                    <p>No Prints Included</p>
                  </div>
                </div>
              </div>
              {/*------- Pricing section 1st div end here----------*/}


              {/*------- Pricing section 2nd div----------*/}
              <div className='w-1/4 bg-green-300 rounded-xl p-5'>
                <div className='mb-5'>
                  <p className='text-base text-gray-600 font-semibold mb-2'>Premium Plan</p>
                  <p className='text-base text-gray-600 font-semibold'><span className='text-3xl text-gray-800 font-bold'>$249</span>/month</p>
                </div>
                <div className='flex items-center mb-6'>
                  <button className='text-center bg-blue-400 text-white font-bold rounded-full py-2 px-4 w-full'>Get Started</button>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-1 text-sm text-gray-500 '>
                    <GoCheckbox></GoCheckbox>
                    <p>15 Photo Sessions per Month</p>
                  </div>
                  <div className='flex items-center gap-1 text-sm text-gray-500 '>
                    <GoCheckbox></GoCheckbox>
                    <p>120 Edited Photos Monthly</p>
                  </div>
                  <div className='flex items-center gap-1 text-sm text-gray-500 '>
                    <GoCheckbox></GoCheckbox>
                    <p>Online Photo Gallery Access</p>
                  </div>
                  <div className='flex items-center gap-1 text-sm text-gray-500 '>
                    <GoCheckbox></GoCheckbox>
                    <p>1 Premium Photo Album</p>
                  </div>
                </div>
              </div>
              {/*------- Pricing section 2nd div end here----------*/}


            </div>
        </div>
    </div>
  )
}

export default PricingPlans