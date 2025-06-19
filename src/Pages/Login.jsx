import React from 'react'
import Frame1 from '../assets/Images/Frame 232 (1).png'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='w-7/12 flex flex-col gap-3 bg-white items-center justify-center rounded-xl mx-auto p-4'>
        <div className='flex items-center relative'>
            <div className='w-6/12'>
                <img className='w-full h-full' src={Frame1} alt="" />
            </div>
            <div className='pl-8 flex flex-col items-start gap-5 w-6/12'>
                <button
                    className="text-xl font-bold text-gray-600 hover:text-black absolute top-2 right-2"
                    onClick={() => setShowSignup(false)}>✖</button>
                <div>
                    <h1 className='text-3xl font-bold'>Welcome Back!</h1>
                    <p className='text-bse font-normal text-gray-500 mt-2'>Please enter your log in details below</p>
                </div>
                <div className='w-full'>
                    <p className='mb-1'>Email</p>
                    <input className=' w-full px-3 py-2 border rounded-lg focus:outline-none' type="email" placeholder='Email' name="" id="" />
                    <p className='mb-1 mt-3'>Password</p>
                    <input className=' w-full px-3 py-2 border rounded-lg focus:outline-none' type="password" placeholder='Password' name="" id="" />
                </div>
                <button className='text-center w-full bg-blue-400 text-white text-lg font-semibold rounded-2xl py-3'>SignIn</button>
                <p> Don't have an account? <Link to="/signup" className='text-blue-400 font-semibold'>Sign Up</Link></p>

            </div>
        </div>
    </div>
  )
}

export default Login