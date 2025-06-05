import React from 'react'
import { FiPlus } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import User_Icons from "../../assets/Icons/user.png"
import { GoStack } from "react-icons/go";
import { RiArrowDownSLine } from "react-icons/ri";
import image3 from '../../assets/Images/image (3).png'
import { RiCameraLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GiPlainCircle } from "react-icons/gi";
import { GoDownload } from "react-icons/go";
import { PiDotsThreeOutline } from "react-icons/pi";
import { PiPaperPlaneTiltLight } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";



const ImageDetails = () => {
  return (
    <div>
        <div className='rounded-xl p-4 bg-white my-4'>


            {/* ------Overlay Main section---------*/}
            <div className='flex items-start justify-start gap-8'>

                {/* ------Overlay Left section---------*/}
                <div className='w-6/12'>
                    <img className='w-full ' src={image3} alt="" />
                </div>

                {/* ------Overlay Right section---------*/}
                <div className='w-5/12 mt-5'>
                    <h1 className='text-3xl text-gray-700 font-bold mb-2'>The Intersection of Chaos and Harmony</h1>


                    {/* ------Overlay Right section small text---------*/}
                    <div className='flex flex-col gap-2 mb-5'>
                        <div className='flex items-center gap-1'>
                            <CiCalendar></CiCalendar>
                            <p>October 15, 2023</p>
                        </div>
                    </div>
                    {/* ------Overlay Right section small text end---------*/}

                </div>
                {/* ------Overlay Right section end---------*/}
            </div>
        </div>
    </div>
  )
}

export default ImageDetails