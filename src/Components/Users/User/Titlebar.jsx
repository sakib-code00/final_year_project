import React from 'react'
import { RiSearch2Line } from "react-icons/ri";
import { RiGalleryLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { AiOutlineSun } from "react-icons/ai";
import logo from "../../../assets/Images/logo1.png"
import bpicblack from '../../../assets/Images/Bpicsblack.png'
import { useNavigate } from 'react-router-dom';


const Titlebar = () => {

    const navigate = useNavigate();
    const gotoHome = () => {
        navigate("/home");
    }


  return (
    <div className='w-full bg-white px-10 py-4 mb-5'>
        <div className='flex items-center justify-between'>
            {/*---------- Left side -----------*/}
            <div className=' flex items-center gap-6'>
              <div onClick={gotoHome} className='flex items-center justify-center cursor-pointer'>
                <img src={logo} alt="" />
                <img src={bpicblack} alt="" />
              </div>
                <div>
                    <div className=''>
                        <div className=' flex items-center border border-gray-300 p-2 rounded-full gap-5 backdrop-blur-md'>
                            <button className='flex items-center bg-white text-gray-500 px-3 py-3 rounded-3xl'>
                                <RiGalleryLine className='font-medium text-xl mr-1'></RiGalleryLine>
                                <p className='font-medium'>Photos</p>
                                <RiArrowDownSLine className='text-xl font-medium ml-1'></RiArrowDownSLine>
                            </button>
                            <input className=' w-96 bg-transparent text-white border-none focus:border-none focus:outline-none' type="text" placeholder='Search' />
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
                {/* <img className='w-16 h-16 bg-gray-400 p-1 rounded-xl' src={profilepic} alt="" /> */}
            </div>
            {/*----------Right side end -----------*/}
        </div>
        

    </div>
  )
}

export default Titlebar