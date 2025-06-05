import React from 'react'
import { RiSearch2Line } from "react-icons/ri";
import { RiGalleryLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineSun } from "react-icons/ai";
import logo from "../../../assets/Images/logo1.png"
import bpicblack from '../../../assets/Images/Bpicsblack.png'
import profilepic from '../../../assets/Images/profilepic.png'


const AdminHeader = () => {
  return (
    <div className='w-full bg-white px-10 py-4 border-b border-gray-400'>
        <div className='flex items-center justify-between'>
            {/*---------- Left side -----------*/}
            <div className=' flex justify-between items-center gap-48'>
              <div className='flex items-center justify-center mr-5'>
                <img src={logo} alt="" />
                <img src={bpicblack} alt="" />
              </div>
                <div>
                    <div className=''>
                        <div className=' flex items-center border border-gray-300 p-2 rounded-full gap-5 backdrop-blur-md'>
                            <input className='ml-2 w-96 bg-transparent text-black border-none focus:border-none focus:outline-none' type="text" placeholder='Search' />
                            <button className='bg-white text-gray-500 px-3 py-3 rounded-full flex items-center'>
                                <RiSearch2Line className='font-medium text-xl'></RiSearch2Line>   
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*----------left side end -----------*/}

            {/*----------Right side -----------*/}
            <div className='flex items-center gap-5 justify-center'>
                <button className='flex items-center justify-center bg-gray-100 p-2 rounded-full font-medium'>
                    <IoMdNotificationsOutline className='text-2xl font-medium text-gray-500'></IoMdNotificationsOutline>
                </button>
                <button className='flex items-center justify-center bg-gray-100 p-2 rounded-full font-medium'>
                    <AiOutlineSun className='text-2xl font-medium text-gray-500'></AiOutlineSun>
                </button>
                <img className='w-16 h-16 bg-gray-400 p-1 rounded-xl' src={profilepic} alt="" />
            </div>
            {/*----------Right side end -----------*/}
        </div>
        

    </div>
  )
}

export default AdminHeader