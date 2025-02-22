import React from 'react'
import { FiPlus } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import User_Icons from "../assets/Icons/user.png"
import { GoStack } from "react-icons/go";
import { RiArrowDownSLine } from "react-icons/ri";
import image3 from '../assets/Images/image (3).png'
import { RiCameraLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GiPlainCircle } from "react-icons/gi";
import { GoDownload } from "react-icons/go";
import { PiDotsThreeOutline } from "react-icons/pi";
import { PiPaperPlaneTiltLight } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";



const Overlay = () => {
  return (
    <div className='w-11/12'>
        <div className='rounded-xl p-3'>
            {/* ------Overlay Navbar---------*/}
            <div className=' flex items-center mb-5 justify-between p-3 bg-gray-200 rounded-3xl'>

                {/* ------User Icon---------*/}
                <div className=' flex items-center gap-1'>
                    <img src={User_Icons} alt="" />
                     <p className='text-gray-600 text-xl font-medium'>Quadiz Digital Agency</p>
                </div>

                {/* ------Right Sites icons---------*/}
                <div className='flex items-center gap-5'>
                    <div className='flex items-center justify-center gap-1'>
                        <GoStack className='text-5xl text-white bg-slate-400 p-2 rounded-full'></GoStack>
                        <p>View Similar</p>
                    </div>
                    <div className='flex items-center justify-center gap-1'>
                        <FiPlus className='text-5xl text-white bg-slate-400 p-2 rounded-full'></FiPlus>
                        <p>View Similar</p>
                    </div>
                    <div className='flex items-center justify-center gap-1'>
                        <GoHeart className='text-5xl text-white bg-slate-400 p-2 rounded-full'></GoHeart>
                        <p>View Similar</p>
                    </div>
                    <button className='flex items-center justify-center bg-blue-600 px-4 py-2 rounded-3xl  font-medium'>
                        <p className="text-base text-white">Free Download</p>
                        <RiArrowDownSLine className='text-xl font-medium ml-1 text-white'></RiArrowDownSLine>
                    </button>
                </div>


            </div>
            {/* ------Overlay Navbar End here---------*/}


            {/* ------Overlay Main section---------*/}
            <div className='flex items-center gap-8'>

                {/* ------Overlay Left section---------*/}
                <div className='w-6/12 relative bg-black'>
                    <img className='w-full absolute -top-72' src={image3} alt="" />
                </div>

                {/* ------Overlay Right section---------*/}
                <div className='w-5/12 mt-5'>
                    <h1 className='text-3xl text-gray-700 font-bold mb-2'>The Intersection of Chaos and Harmony</h1>


                    {/* ------Overlay Right section small text---------*/}
                    <div className='flex flex-col gap-2 mb-5'>
                        <div className='flex items-center gap-1'>
                            <CiLocationOn></CiLocationOn>
                            <p>The Iconic Skyline of Manhattan, New York City, USA</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <CiCalendar></CiCalendar>
                            <p>October 15, 2023</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <RiCameraLine></RiCameraLine>
                            <p>Nikon Z7, 50mm f/1.8 lens</p>
                        </div>
                        <div className='flex items- gap-1'>
                            <AiOutlineSafetyCertificate></AiOutlineSafetyCertificate>
                            <p>Free to use under the Bpics License. Explore more premium content to elevate your projects.</p>
                        </div>
                    </div>
                    {/* ------Overlay Right section small text end---------*/}



                    {/* ------Overlay Right Search by color section---------*/}
                    <div className='mb-5'>
                        <h2 className='text-lg font-bold text-gray-700'>Search by Colors</h2>
                        <div className='flex items-center gap-3 mt-2'>
                            <GiPlainCircle className='text-2xl text-red-500'></GiPlainCircle>
                            <GiPlainCircle className='text-2xl text-green-500'></GiPlainCircle>
                            <GiPlainCircle className='text-2xl text-purple-500'></GiPlainCircle>
                            <GiPlainCircle className='text-2xl text-orange-500'></GiPlainCircle>
                            <GiPlainCircle className='text-2xl text-blue-500'></GiPlainCircle>
                        </div>
                    </div>
                    {/* ------Overlay Right Search by color section end---------*/}

                    {/* ------Overlay Right Tags section---------*/}
                    <div className='grid grid-cols-3 items-center justify-center gap-3 mb-5'>
                        <a className='text-base text-gray-600 bg-gray-200 py-1 px-3 rounded-3xl font-semibold text-center ' href="">Travel</a>
                        <a className='text-base text-gray-600 bg-gray-200 py-1 px-3 rounded-3xl font-semibold text-center ' href="">Nature</a>
                        <a className='text-base text-gray-600 bg-gray-200 py-1 px-3 rounded-3xl font-semibold text-center ' href="">Technology</a>
                        <a className='text-base text-gray-600 bg-gray-200 py-1 px-3 rounded-3xl font-semibold text-center ' href="">Art</a>
                        <a className='text-base text-gray-600 bg-gray-200 py-1 px-3 rounded-3xl font-semibold text-center ' href="">Food</a>
                        <a className='text-base text-gray-600 bg-gray-200 py-1 px-3 rounded-3xl font-semibold text-center ' href="">Sports</a>
                        <a className='text-base text-gray-600 bg-gray-200 py-1 px-3 rounded-3xl font-semibold text-center ' href="">Music</a>
                        <a className='text-base text-gray-600 bg-gray-200 py-1 px-3 rounded-3xl font-semibold text-center ' href="">History</a>
                    </div>
                    {/* ------Overlay Right Tags section end---------*/}

                    {/* ------Overlay Right users section---------*/}
                    <div className='flex items-center justify-start gap-10 mb-5'>
                        <div>
                            <div className='flex items-center gap-1'>
                                <IoEyeOutline></IoEyeOutline>
                                <p>Views</p>
                            </div>
                            <h2 className='text-2xl text-gray-600 font-bold mt-1'>48K</h2>
                        </div>
                        <div>
                            <div className='flex items-center gap-1'>
                                <GoDownload></GoDownload>
                                <p>Downloads</p>
                            </div>
                            <h2 className='text-2xl text-gray-600 font-bold mt-1'>48K</h2>
                        </div>
                        <div>
                            <div className='flex items-center gap-1'>
                                <GoDownload></GoDownload>
                                <p>Featured in</p>
                            </div>
                            <h2 className='text-2xl text-gray-600 font-bold mt-1'>Nature</h2>
                        </div>
                    </div>
                    {/* ------Overlay Right users section end---------*/}

                    {/* ------Overlay Right Button section---------*/}
                    <div className='flex items-center gap-5'>
                        <button className='flex items-center justify-center px-3 py-1 gap-1 bg-gray-200 rounded-3xl'>
                            <PiPaperPlaneTiltLight></PiPaperPlaneTiltLight>
                            <p>Share</p>
                        </button>
                        <PiDotsThreeOutline className='text-4xl bg-gray-200 rounded-full p-2'></PiDotsThreeOutline>
                    </div>
                    {/* ------Overlay Right Button section end---------*/}


                </div>
                {/* ------Overlay Right section end---------*/}
            </div>
        </div>
    </div>
  )
}

export default Overlay