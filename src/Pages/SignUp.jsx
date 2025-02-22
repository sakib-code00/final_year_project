import React from 'react'
import Frame1 from '../assets/Images/Frame 232 (1).png'
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className='w-11/12'>
        <div className='flex items-center'>
                    <div className='w-6/12'>
                        <img className='w-full h-full' src={Frame1} alt="" />
                    </div>
                    <div className='pl-16 flex flex-col items-start gap-5 w-6/12'>
                        <div>
                            <h1 className='text-3xl font-bold'>Create an account</h1>
                            <p className='text-bse font-normal text-gray-500 mt-2'>Please enter your details now</p>
                        </div>
                        <div className='w-full'>
                            <div className='flex justify-between items-start gap-4'>
                                <div className='w-1/2 mb-3'>
                                    <p className='mb-1'>First name</p>
                                    <input className=' w-full px-3 py-2 border rounded-lg focus:outline-none' type="text" placeholder='First Name' name="" id="" />
                                </div>
                                <div className='w-1/2'>
                                    <p className='mb-1'>Last Name</p>
                                    <input className=' w-full px-3 py-2 border rounded-lg focus:outline-none' type="text" placeholder='Last Name' name="" id="" />
                                </div>
                            </div>
                            <p className='mb-1 w-full'>Email</p>
                            <input className=' w-full px-3 py-2 border rounded-lg focus:outline-none' type="email" placeholder='Email' name="" id="" />
                            <p className='mb-1 mt-3'>Password</p>
                            <input className=' w-full px-3 py-2 border rounded-lg focus:outline-none' type="password" placeholder='Password' name="" id="" />
                            <div className=' mt-1 flex items-cente'>
                                <p className='text-right text-purple-600 text-base font-normal'><a href="">Already have an account? <span className='font-bold'>Login</span></a></p>
                            </div>
                        </div>
                        <button className='text-center w-full bg-blue-400 text-white text-lg font-semibold rounded-2xl py-3'>Create Account</button>
                        <div className='flex items-center justify-center w-full '>
                            <hr className='w-1/2 mr-1' />
                            <p className='text-bse font-normal text-gray-500'>OR</p>
                            <hr className='w-1/2 ml-1' />
                        </div>
                        <button className=' flex items-center justify-center text-center w-full border border-gray-400 text-lg font-semibold rounded-2xl py-3'>
                            <FcGoogle className='text-2xl mr-2'></FcGoogle>
                            <p>Continue with Google</p>
                        </button>
                        <div className='flex items-center justify-start gap-1 mt-16'>
                            <input className='mt-1' type="checkbox" name="" id="" />
                            <p className='text-base text-gray-500 text-center'>agree to the</p>
                            <a className='text-base font-semibold text-gr' href="">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default SignUp