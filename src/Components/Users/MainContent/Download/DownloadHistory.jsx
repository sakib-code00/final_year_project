import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { GoShareAndroid } from "react-icons/go";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { BiFileBlank } from "react-icons/bi";
import { PiFileArrowDown } from "react-icons/pi";
import { HiOutlineUser } from "react-icons/hi2";
import { MdOutlineSystemUpdateAlt } from "react-icons/md"
import image11 from "../Wishlist/images/image (11).png"

const DownloadHistory = () => {
  return (
    <div>
        <div className='bg-white p-6 rounded-xl'>

            {/*----History Title Bar */}
            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-2xl font-bold text-gray-700'>All Downloads</h1>
                <div className='flex items-center gap-4'>
                    <GoShareAndroid className='text-gray-700 font-semibold text-2xl'></GoShareAndroid>
                    <PiDotsThreeOutlineLight className='text-gray-700 font-semibold text-2xl'></PiDotsThreeOutlineLight>
                                
                </div>
            </div>

           {/*------Downloads------ */} 
           <div className='flex flex-col gap-5'>
                <div className='grid grid-cols-4 items-center justify-between gap-6'>

                    {/*------Downloads History title------ */} 
                    <div className='flex items-center justify-start gap-1'>
                        <BiFileBlank className='text-2xl text-gray-400 font-medium'></BiFileBlank>
                        <p className='text-gray-400 text-base font-normal'>File Name</p>
                    </div>
                    <div className='flex items-center justify-start gap-1'>
                        <HiOutlineUser className='text-2xl text-gray-400 font-medium'></HiOutlineUser>
                        <p className='text-gray-400 text-base font-normal'>Arthur</p>
                    </div>
                    <div className='flex items-center justify-start gap-1'>
                        <MdOutlineSystemUpdateAlt className='text-2xl text-gray-400 font-medium'></MdOutlineSystemUpdateAlt>
                        <p className='text-gray-400 text-base font-normal'>Date</p>
                    </div>
                </div>


                {/*------Downloads History------ */}
                 <div className='grid grid-cols-4 items-center justify-between gap-6 bg-gray-50 p-4 rounded-xl'>
                        <div className='flex items-center justify-start gap-2'>
                            <img className='w-14' src={image11} alt="" />
                            <p className='text-sm font-bold text-gray-700'>The Intersection of Chaos and Harmony</p>
                        </div>
                        <div>
                            <p className='text-sm font-normal text-gray-400'>by @eric-clark</p>
                        </div>
                        <div>
                            <p className='text-sm font-normal text-gray-400'>22 Jan 2025</p>
                        </div>
                        <div className='flex items-center gap-2  justify-end'>
                            <PiFileArrowDown className='text-gray-700 bg-gray-100 text-4xl p-2 rounded-xl'></PiFileArrowDown>
                            <RiDeleteBinLine className='text-gray-700 bg-gray-100 text-4xl p-2 rounded-xl'></RiDeleteBinLine>
                        </div>
                </div>

                {/*------Downloads History------ */}
                <div className='grid grid-cols-4 items-center justify-between gap-6 bg-gray-50 p-4 rounded-xl'>
                        <div className='flex items-center justify-start gap-2'>
                            <img className='w-14' src={image11} alt="" />
                            <p className='text-sm font-bold text-gray-700'>The Intersection of Chaos and Harmony</p>
                        </div>
                        <div>
                            <p className='text-sm font-normal text-gray-400'>by @eric-clark</p>
                        </div>
                        <div>
                            <p className='text-sm font-normal text-gray-400'>22 Jan 2025</p>
                        </div>
                        <div className='flex items-center gap-2  justify-end'>
                            <PiFileArrowDown className='text-gray-700 bg-gray-100 text-4xl p-2 rounded-xl'></PiFileArrowDown>
                            <RiDeleteBinLine className='text-gray-700 bg-gray-100 text-4xl p-2 rounded-xl'></RiDeleteBinLine>
                        </div>
                </div>

                {/*------Downloads History------ */}
                <div className='grid grid-cols-4 items-center justify-between gap-6 bg-gray-50 p-4 rounded-xl'>
                        <div className='flex items-center justify-start gap-2'>
                            <img className='w-14' src={image11} alt="" />
                            <p className='text-sm font-bold text-gray-700'>The Intersection of Chaos and Harmony</p>
                        </div>
                        <div>
                            <p className='text-sm font-normal text-gray-400'>by @eric-clark</p>
                        </div>
                        <div>
                            <p className='text-sm font-normal text-gray-400'>22 Jan 2025</p>
                        </div>
                        <div className='flex items-center gap-2  justify-end'>
                            <PiFileArrowDown className='text-gray-700 bg-gray-100 text-4xl p-2 rounded-xl'></PiFileArrowDown>
                            <RiDeleteBinLine className='text-gray-700 bg-gray-100 text-4xl p-2 rounded-xl'></RiDeleteBinLine>
                        </div>
                </div>


                {/*------Downloads History------ */}
                <div className='grid grid-cols-4 items-center justify-between gap-6 bg-gray-50 p-4 rounded-xl'>
                        <div className='flex items-center justify-start gap-2'>
                            <img className='w-14' src={image11} alt="" />
                            <p className='text-sm font-bold text-gray-700'>The Intersection of Chaos and Harmony</p>
                        </div>
                        <div>
                            <p className='text-sm font-normal text-gray-400'>by @eric-clark</p>
                        </div>
                        <div>
                            <p className='text-sm font-normal text-gray-400'>22 Jan 2025</p>
                        </div>
                        <div className='flex items-center gap-2  justify-end'>
                            <PiFileArrowDown className='text-gray-700 bg-gray-100 text-4xl p-2 rounded-xl'></PiFileArrowDown>
                            <RiDeleteBinLine className='text-gray-700 bg-gray-100 text-4xl p-2 rounded-xl'></RiDeleteBinLine>
                        </div>
                </div>


                {/*------Downloads History------ */}
                <div className='grid grid-cols-4 items-center justify-between gap-6 bg-gray-50 p-4 rounded-xl'>
                        <div className='flex items-center justify-start gap-2'>
                            <img className='w-14' src={image11} alt="" />
                            <p className='text-sm font-bold text-gray-700'>The Intersection of Chaos and Harmony</p>
                        </div>
                        <div>
                            <p className='text-sm font-normal text-gray-400'>by @eric-clark</p>
                        </div>
                        <div>
                            <p className='text-sm font-normal text-gray-400'>22 Jan 2025</p>
                        </div>
                        <div className='flex items-center gap-2  justify-end'>
                            <PiFileArrowDown className='text-gray-700 bg-gray-100 text-4xl p-2 rounded-xl'></PiFileArrowDown>
                            <RiDeleteBinLine className='text-gray-700 bg-gray-100 text-4xl p-2 rounded-xl'></RiDeleteBinLine>
                        </div>
                </div>


                {/*------Downloads History------ */}
                <div className='grid grid-cols-4 items-center justify-between gap-6 bg-gray-50 p-4 rounded-xl'>
                        <div className='flex items-center justify-start gap-2'>
                            <img className='w-14' src={image11} alt="" />
                            <p className='text-sm font-bold text-gray-700'>The Intersection of Chaos and Harmony</p>
                        </div>
                        <div>
                            <p className='text-sm font-normal text-gray-400'>by @eric-clark</p>
                        </div>
                        <div>
                            <p className='text-sm font-normal text-gray-400'>22 Jan 2025</p>
                        </div>
                        <div className='flex items-center gap-2  justify-end'>
                            <PiFileArrowDown className='text-gray-700 bg-gray-100 text-4xl p-2 rounded-xl'></PiFileArrowDown>
                            <RiDeleteBinLine className='text-gray-700 bg-gray-100 text-4xl p-2 rounded-xl'></RiDeleteBinLine>
                        </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default DownloadHistory