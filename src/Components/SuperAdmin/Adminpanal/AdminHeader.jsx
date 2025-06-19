import React from 'react'
import { useSettings } from '../../../contexts/SettingsContext';
import logoFallback from '../../../assets/Images/logo1.png'
import bpicblack from '../../../assets/Images/Bpicsblack.png'
import { RiSearch2Line } from "react-icons/ri";
import { RiGalleryLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineSun } from "react-icons/ai";


const BACKEND_URL = 'http://localhost:5000';

const AdminHeader = () => {
  const { logo, siteTitle } = useSettings();
  const getLogoUrl = () => {
    if (logo && logo.startsWith('/uploads/')) return BACKEND_URL + logo;
    if (logo && logo.startsWith('http')) return logo;
    return logoFallback;
  };
  return (
    <div className='w-full bg-white px-10 py-4 border-b border-gray-400'>
        <div className='flex items-center justify-between'>
            {/*---------- Left side -----------*/}
            <div className=' flex justify-between items-center gap-48'>
              <div className='flex items-center justify-center mr-5'>
                <img src={getLogoUrl()} alt="logo" className='h-8 w-8 object-contain'/>
                <span className='ml-2 font-bold text-lg'>{siteTitle || 'Site Title'}</span>
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
                {/* <img className='w-16 h-16 bg-gray-400 p-1 rounded-xl' src={profilepic} alt="" /> */}
            </div>
            {/*----------Right side end -----------*/}
        </div>
        

    </div>
  )
}

export default AdminHeader