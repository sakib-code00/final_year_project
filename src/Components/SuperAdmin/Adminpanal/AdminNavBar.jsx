import React from 'react'
import profilepic from '../../../assets/Images/profilepic.png'
import { RiArrowDownSLine } from "react-icons/ri";
import { GoHeart } from "react-icons/go";
import { BiHistory } from "react-icons/bi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { CiMoneyBill } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi";
import { LuSettings } from "react-icons/lu";
import { RiDownloadCloudLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
const AdminNavBar = () => {
  return (
    <div>
        <div className=' bg-white p-4 rounded-xl'>
            <div className='flex flex-col gap-8'>
                
                {/*------Features div 1-------*/}
                <div className='flex flex-col gap-4 items-start'>
                    <h1 className='text-small text-gray-400 font-bold'>DESHBOARD</h1>
                    <button className='flex items-center justify-center font-medium gap-1'>
                        <GoHeart className='text-2xl font-medium ml-1 text-gray-400'></GoHeart>
                        <p className="text-base text-gray-400">Wishlist</p>
                    </button>
                </div>
                {/*------Features div 1-------*/}

                {/*------Features div 1-------*/}
                <div className='flex flex-col gap-4 items-start'>
                    <h1 className='text-small text-gray-400 font-bold'>USER MANAGEMENT</h1>
                    <button className='flex items-center justify-center font-medium gap-1'>
                        <LuUsers className='text-2xl font-medium ml-1 text-gray-400'></LuUsers>
                        <p className="text-base text-gray-400">Users</p>
                    </button>
                </div>
                {/*------Features div 1-------*/}

                {/*------Features div 2-------*/}
                <div className='flex flex-col gap-3 items-start'>
                    <h1 className='text-small text-gray-400 font-bold'>CONTENT MANAGEMENT</h1>
                    <button className='flex items-center justify-center font-medium gap-1'>
                        <MdOutlineSubscriptions className='text-2xl font-medium ml-1 text-gray-400'></MdOutlineSubscriptions>
                        <p className="text-base text-gray-400">Contents</p>
                    </button>
                    <button className='flex items-center justify-center font-medium gap-1'>
                        <MdOutlinePayment className='text-2xl font-medium ml-1 text-gray-400'></MdOutlinePayment>
                        <p className="text-base text-gray-400">Categories & Tags</p>
                    </button>
                    <button className='flex items-center justify-center font-medium gap-1'>
                        <CiMoneyBill className='text-2xl font-medium ml-1 text-gray-400'></CiMoneyBill>
                        <p className="text-base text-gray-400">Featured Contents</p>
                    </button>
                </div>
                {/*------Features div 2-------*/}

                {/*------Features div 2-------*/}
                <div className='flex flex-col gap-3 items-start'>
                    <h1 className='text-small text-gray-400 font-bold'>FINANCIAL MANAGEMENT</h1>
                    <button className='flex items-center justify-center font-medium gap-1'>
                        <MdOutlineSubscriptions className='text-2xl font-medium ml-1 text-gray-400'></MdOutlineSubscriptions>
                        <p className="text-base text-gray-400">Subscription Plans</p>
                    </button>
                </div>
                {/*------Features div 2-------*/}


                {/*------Features div 3-------*/}
                <div className='flex flex-col gap-3 items-start'>
                    <h1 className='text-small text-gray-400 font-bold'>SETTINGS</h1>
                    <button className='flex items-center justify-center font-medium gap-1'>
                        <LuSettings className='text-2xl font-medium ml-1 text-gray-400'></LuSettings>
                        <p className="text-base text-gray-400">General Settings</p>
                    </button>
                    <button className='flex items-center justify-center font-medium gap-1'>
                        <CiLocationOn className='text-2xl font-medium ml-1 text-gray-400'></CiLocationOn>
                        <p className="text-base text-gray-400">Localization</p>
                    </button>
                </div>
                {/*------Features div-------*/}
            </div>

        </div>
    </div>
  )
}

export default AdminNavBar