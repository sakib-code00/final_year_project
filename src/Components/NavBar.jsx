import React from 'react'
import { useState } from 'react'
import logo from '../assets/Images/logo1.png'
import bpic from '../assets/Images/Bpics.png'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Frame1 from '../assets/Images/Frame 232 (1).png'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/home");
  }

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);


  return (
    <div className='w-full'>
        <div className="navbar fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md text-white shadow-md">
          <div className="flex-1">
            <a onClick={gotoHome} className="btn btn-ghost text-xl">
              <div className='flex items-center justify-center'>
                <img src={logo} alt="" />
                <img src={bpic} alt="" />
              </div>
             </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><a className='cursor-pointer' onClick={() => setShowLogin(true)}>Join Now</a></li>
            </ul>
          </div>
        </div>

      {/* Login Modal */}
      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className='w-7/12 flex flex-col gap-3 bg-white items-center justify-center rounded-xl mx-auto p-4'>
                  <div className='flex items-center relative'>
                      <div className='w-6/12'>
                          <img className='w-full h-full' src={Frame1} alt="" />
                      </div>
                      <div className='pl-8 flex flex-col items-start gap-5 w-6/12'>
                          <button
                              className="text-xl font-bold text-gray-600 hover:text-black absolute top-2 right-2"
                              onClick={() => setShowLogin(false)}>✖</button>
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
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
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
        </div>
      )}


    </div>


  )
}

export default NavBar