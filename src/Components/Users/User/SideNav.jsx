import React, { useEffect, useState } from 'react'
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
    const [user, setUser] = useState({ name: '', username: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch('/api/profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setUser({
                        name: data.name || '',
                        username: data.username || (data.email ? data.email.split('@')[0] : '')
                    });
                } else {
                    console.error('Failed to fetch user profile');
                }
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };
        fetchUserProfile();
    }, []);

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
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

  return (
    <div>
        <div className=' bg-white p-4 rounded-xl flex flex-col justify-between min-h-[90vh]'>
            <div className='flex flex-col gap-8'>
                {/*------User Icon-------*/}
                <div className='flex items-center gap-3'>
                    <div>
                        <h1 className='text-base text-gray-700 font-bold'>{user.name}</h1>
                        <p className='text-sm text-gray-400 font-normal'>@{user.username}</p>
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

            </div>
            <button onClick={handleLogout} className='mt-8 w-full bg-red-100 text-red-600 rounded-xl py-2 font-semibold hover:bg-red-200'>Logout</button>
        </div>
    </div>
  )
}

export default SideNav