import React from 'react'
import Frame1 from '../assets/Images/Frame 232 (1).png'

const BecomeContributor = () => {
  return (
    <div className='w-11/12'>
        <div className='flex items-center'>
                    <div className='w-6/12'>
                        <img className='w-full h-full' src={Frame1} alt="" />
                    </div>
                    <div className='pl-16 flex flex-col items-start gap-5 w-6/12'>
                        <div>
                            <h1 className='text-3xl font-bold'>Welcome Back!</h1>
                            <p className='text-bse font-normal text-gray-500 mt-2'>Please enter your log in details below</p>
                        </div>
                        <div className='w-full'>
                            <p className='mb-1'>Email</p>
                            <input className=' w-full px-3 py-2 border rounded-lg focus:outline-none' type="email" placeholder='user@email.com' name="" id="" />
                            <p className='mb-1 mt-3'>Full Name</p>
                            <input className=' w-full px-3 py-2 border rounded-lg focus:outline-none' type="text" placeholder='Full Name' name="" id="" />
                            <p className='mb-1 mt-3'>Add Your Recent Click(4-6 Shapes)</p>
                            <input className=' w-full px-3 py-2 border rounded-lg focus:outline-none' type="text" placeholder='' name="" id="" />
                        </div>
                        <button className='text-center w-full bg-gray-900 text-white text-lg font-semibold rounded-2xl py-3'>Apply Now</button>
                    </div>
                </div>
    </div>
  )
}

export default BecomeContributor