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
import { useNavigate } from 'react-router-dom';

const SideNav = () => {

    const navigate = useNavigate();
    const gotoProfile = () => {
        navigate("profile");
    }
    const gotoSettings = () => {
        navigate("settings");
    }
    const gotoWishlist = () => {
        navigate("wishlist");
    }
    const gotoDownloads = () => {
        navigate("downloads");
    }
    const gotoBilling = () => {
        navigate("billing");
    }


  return (
    <div>
        <div className=' bg-white p-4 rounded-xl'>
            <div className='flex flex-col gap-8'>
                {/*------User Icon-------*/}
                <div className='flex items-center gap-3'>
                    <img className='bg-gray-400 p-1 w-16 h-16 rounded-xl' src={profilepic} alt="" />
                    <div>
                        <h1 className='text-base text-gray-700 font-bold'>Eric Clark</h1>
                        <p className='text-sm text-gray-400 font-normal'>@eric-clark06379</p>
                    </div>
                </div>
                {/*------User Icon-------*/}
                
                {/*------Features div 1-------*/}
                <div className='flex flex-col gap-4 items-start'>
                    <h1 className='text-small text-gray-400 font-bold'>Overview</h1>
                    <div onClick={gotoWishlist} className='flex font-medium gap-1 p-2 w-full cursor-pointer hover:bg-black hover:text-white'>
                        <GoHeart className='text-2xl font-medium ml-1 text-gray-400'></GoHeart>
                        <p className="text-base text-gray-400">Wishlist</p>
                    </div>
                    <div onClick={gotoDownloads} className='flex items-center justify-center font-medium gap-1 cursor-pointer hover:bg-black hover:text-white'>
                        <RiDownloadCloudLine className='text-2xl font-medium ml-1 text-gray-400'></RiDownloadCloudLine>
                        <p className="text-base text-gray-400">Download History</p>
                    </div>
                </div>
                {/*------Features div 1-------*/}

                {/*------Features div 2-------*/}
                <div onClick={gotoBilling} className='flex flex-col gap-3 items-start'>
                    <h1 className='text-small text-gray-400 font-bold'>Payment & Billing</h1>
                    <div className='flex p-2 w-full font-medium gap-1 cursor-pointer hover:bg-black hover:text-white'>
                        <MdOutlineSubscriptions className='text-2xl font-medium ml-1 text-gray-400'></MdOutlineSubscriptions>
                        <p className="text-base text-gray-400">Subscription Plans</p>
                    </div>
                    <div className='flex p-2 w-full font-medium gap-1 cursor-pointer hover:bg-black hover:text-white'>
                        <MdOutlinePayment className='text-2xl font-medium ml-1 text-gray-400'></MdOutlinePayment>
                        <p className="text-base text-gray-400">Payment Mathods</p>
                    </div>
                    <div className='flex p-2 w-full font-medium gap-1 cursor-pointer hover:bg-black hover:text-white'>
                        <CiMoneyBill className='text-2xl font-medium ml-1 text-gray-400'></CiMoneyBill>
                        <p className="text-base text-gray-400">Billing History</p>
                    </div>
                </div>
                {/*------Features div 2-------*/}


                {/*------Features div 3-------*/}
                <div className='flex flex-col gap-3 items-start'>

                    <div onClick={gotoProfile} className='flex p-2 w-full font-medium gap-1 cursor-pointer hover:bg-black hover:text-white'>
                        <HiOutlineUser className='text-2xl font-medium ml-1 text-gray-400'></HiOutlineUser>
                        <p className="text-base text-gray-400">Profile</p>
                    </div>
                    <div onClick={gotoSettings} className='flex p-2 w-full font-medium gap-1 cursor-pointer hover:bg-black hover:text-white'>
                        <LuSettings className='text-2xl font-medium ml-1 text-gray-400'></LuSettings>
                        <p className="text-base text-gray-400">Settings</p>
                    </div>
                </div>
                {/*------Features div-------*/}

                <div>
                    <h2 className='text-base text-gray-700 font-bold'>Your plan will be expired in 7 days</h2>
                    <p className='text-sm font-normal text-blue-300'>See Plans</p>
                    <progress className=" bg-yellow-200 progress progress-warning w-56" value={70} max="100"></progress>
                </div>
            </div>

        </div>
    </div>
  )
}

export default SideNav