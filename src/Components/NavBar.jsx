import React from 'react'
import logo from '../assets/Images/logo1.png'
import bpic from '../assets/Images/Bpics.png'

const NavBar = () => {


  return (
    <div className='w-full'>
        <div className="navbar bg-red-400">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">
              <div className='flex items-center justify-center'>
                <img src={logo} alt="" />
                <img src={bpic} alt="" />
              </div>
             </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>Explore</summary>
                  <ul className=" p-2">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                  </ul>
                </details>
              </li>
              <li><a className=''>Our Pricing</a></li>
              <li><a>Become Contributo</a></li>
              <li><a>Join Now</a></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default NavBar