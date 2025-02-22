import React from 'react'
import { RiSearch2Line } from "react-icons/ri";
import { RiCameraLine } from "react-icons/ri";
import { RiGalleryLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";



const Hero = () => {
  return (
    <div className=" w-full bg-[url('/heroimg.png')] bg-center bg-no-repeat bg-cover h-screen flex items-center justify-center ">
        <div>
            <div className='text-center'>
                <p className="text-base text-white">Serene landscapes, endless inspiration.</p>
                <h1 className='text-4xl font-semibold text-white'>Upload, Download, Inspire.</h1>
            </div>

            {/* Search Section Start Here */}

            <div className='flex items-center justify-center mt-3'>
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
                <button className='bg-white text-gray-500 px-3 py-3 rounded-full flex items-center ml-3'>
                    <RiCameraLine className='font-medium text-xl'></RiCameraLine>
                </button>
            </div>
            <div className=' mt-3'>
                <ul className='flex gap-2 text-white'>
                    <li className="bg-[rgba(0,0,0,0.5)] px-3 py-1 rounded-3xl">Travle</li>
                    <li className="bg-[rgba(0,0,0,0.5)] px-3 py-1 rounded-3xl">Nature</li>
                    <li className="bg-[rgba(0,0,0,0.5)] px-3 py-1 rounded-3xl">Adventure</li>
                    <li className="bg-[rgba(0,0,0,0.5)] px-3 py-1 rounded-3xl">Food</li>
                    <li className="bg-[rgba(0,0,0,0.5)] px-3 py-1 rounded-3xl">Technology</li>
                    <li className="bg-[rgba(0,0,0,0.5)] px-3 py-1 rounded-3xl">Art</li>
                    <li className="bg-[rgba(0,0,0,0.5)] px-3 py-1 rounded-3xl">Music</li>
                    <li className="bg-[rgba(0,0,0,0.5)] px-3 py-1 rounded-3xl">Sports</li>
                    <li className="bg-[rgba(0,0,0,0.5)] px-3 py-1 rounded-3xl">History</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Hero