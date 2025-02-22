import React from 'react'
import Frame1 from '../assets/Images/Frame 232 (1).png'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className='w-11/12 flex flex-col gap-3'>
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
                    <input className=' w-full px-3 py-2 border rounded-lg focus:outline-none' type="email" placeholder='Email' name="" id="" />
                    <p className='mb-1 mt-3'>Password</p>
                    <input className=' w-full px-3 py-2 border rounded-lg focus:outline-none' type="password" placeholder='Password' name="" id="" />
                    <div className=' mt-1flex items-center justify-end'>
                        <p className='text-right text-red-400 text-base font-normal'><a href="">Forget password?</a></p>
                    </div>
                </div>
                <button className='text-center w-full bg-blue-400 text-white text-lg font-semibold rounded-2xl py-3'>SignIn</button>
                <div className='flex items-center justify-center w-full '>
                    <hr className='w-1/2 mr-1' />
                    <p className='text-bse font-normal text-gray-500'>OR</p>
                    <hr className='w-1/2 ml-1' />
                </div>
                <button className=' flex items-center justify-center text-center w-full border border-gray-400 text-lg font-semibold rounded-2xl py-3'>
                    <FcGoogle className='text-2xl mr-2'></FcGoogle>
                    <p>Continue with Google</p>
                </button>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Login