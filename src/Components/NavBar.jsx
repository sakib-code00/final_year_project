import React from 'react'
import { useState } from 'react'
import logo from '../assets/Images/logo1.png'
import bpic from '../assets/Images/Bpics.png'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Frame1 from '../assets/Images/Frame 232 (1).png'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom'

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
              <li><Link to="/signup" className='cursor-pointer'>Join Now</Link></li>
            </ul>
          </div>
        </div>

    </div>


  )
}

export default NavBar