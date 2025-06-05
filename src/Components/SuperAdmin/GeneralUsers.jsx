import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { PiDotsThreeOutlineLight } from "react-icons/pi";

const GeneralUsers = () => {
  return (
    <div>
        <div className='my-4'>
            <h1 className='text-2xl font-bold'>General Users</h1>
            <p className='text-sm'>Efficient management for everyday users</p>
        </div>
        <div className='bg-white rounded-xl p-4 flex flex-col items-center mr-4 min-h-96'>


            {/*All user Title Start */}
            <div className='flex items-start justify-between w-full mb-4'>
                <h1 className='text-xl font-bold flex items-center justify-center'>All Users</h1>
                <div className='flex flex-row gap-2 items-center justify-center'>
                    <div className=' flex items-center justify-center border border-gray-300 px-3 py-2 rounded-lg backdrop-blur-md'>
                        <RiSearch2Line className='font-medium text-xl'></RiSearch2Line>  
                        <input className='ml-2 w-96 bg-transparent text-black border-none focus:border-none focus:outline-none' type="text" placeholder='Search' /> 
                    </div>
                    <button className='flex flex-row  justify-center gap-1 items-center border border-black rounded-lg px-4 py-2'>
                        This month 
                        <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
                    </button>
                </div>
            </div>
            {/*All user Title end */}


            <div className='border border-gray-100 rounded-lg w-full mx-4'>

                {/* Users table head */}
                <div className='bg-slate-50 border-b px-4 py-2 grid grid-cols-4 items-center'>
                    <p className='text-base font-bold'>User Name</p>
                    <p className='text-base font-bold'>Email</p>
                    <p className='text-base font-bold'>Last Login</p>
                    <p className='text-base font-bold text-end'>Action</p>
                </div>

                {/* User Information */}
                <div className='border-b px-4 py-3 grid grid-cols-4 items-center'>
                    <div className='flex items-center gap-2'>
                        <FaUserCircle className='text-2xl' />
                        <p className='text-sm'>Robert Fox</p>
                    </div>
                    <p className='text-sm'>Robert@gmail.com</p>
                    <p className='text-sm'>20 mins ago</p>
                    <div className='flex justify-end'>
                        <PiDotsThreeOutlineLight className='text-2xl font-bold cursor-pointer' />
                    </div>
                </div>
                {/* User Information */}

                 {/* User Information */}
                <div className='border-b px-4 py-3 grid grid-cols-4 items-center'>
                    <div className='flex items-center gap-2'>
                        <FaUserCircle className='text-2xl' />
                        <p className='text-sm'>Robert Fox</p>
                    </div>
                    <p className='text-sm'>Robert@gmail.com</p>
                    <p className='text-sm'>20 mins ago</p>
                    <div className='flex justify-end'>
                        <PiDotsThreeOutlineLight className='text-2xl font-bold cursor-pointer' />
                    </div>
                </div>
                {/* User Information */}

                 {/* User Information */}
                <div className='border-b px-4 py-3 grid grid-cols-4 items-center'>
                    <div className='flex items-center gap-2'>
                        <FaUserCircle className='text-2xl' />
                        <p className='text-sm'>Robert Fox</p>
                    </div>
                    <p className='text-sm'>Robert@gmail.com</p>
                    <p className='text-sm'>20 mins ago</p>
                    <div className='flex justify-end'>
                        <PiDotsThreeOutlineLight className='text-2xl font-bold cursor-pointer' />
                    </div>
                </div>
                {/* User Information */}

                 {/* User Information */}
                <div className='border-b px-4 py-3 grid grid-cols-4 items-center'>
                    <div className='flex items-center gap-2'>
                        <FaUserCircle className='text-2xl' />
                        <p className='text-sm'>Robert Fox</p>
                    </div>
                    <p className='text-sm'>Robert@gmail.com</p>
                    <p className='text-sm'>20 mins ago</p>
                    <div className='flex justify-end'>
                        <PiDotsThreeOutlineLight className='text-2xl font-bold cursor-pointer' />
                    </div>
                </div>
                {/* User Information */}

                 {/* User Information */}
                <div className='border-b px-4 py-3 grid grid-cols-4 items-center'>
                    <div className='flex items-center gap-2'>
                        <FaUserCircle className='text-2xl' />
                        <p className='text-sm'>Robert Fox</p>
                    </div>
                    <p className='text-sm'>Robert@gmail.com</p>
                    <p className='text-sm'>20 mins ago</p>
                    <div className='flex justify-end'>
                        <PiDotsThreeOutlineLight className='text-2xl font-bold cursor-pointer' />
                    </div>
                </div>
                {/* User Information */}

                 {/* User Information */}
                <div className='border-b px-4 py-3 grid grid-cols-4 items-center'>
                    <div className='flex items-center gap-2'>
                        <FaUserCircle className='text-2xl' />
                        <p className='text-sm'>Robert Fox</p>
                    </div>
                    <p className='text-sm'>Robert@gmail.com</p>
                    <p className='text-sm'>20 mins ago</p>
                    <div className='flex justify-end'>
                        <PiDotsThreeOutlineLight className='text-2xl font-bold cursor-pointer' />
                    </div>
                </div>
                {/* User Information */}

                 {/* User Information */}
                <div className='border-b px-4 py-3 grid grid-cols-4 items-center'>
                    <div className='flex items-center gap-2'>
                        <FaUserCircle className='text-2xl' />
                        <p className='text-sm'>Robert Fox</p>
                    </div>
                    <p className='text-sm'>Robert@gmail.com</p>
                    <p className='text-sm'>20 mins ago</p>
                    <div className='flex justify-end'>
                        <PiDotsThreeOutlineLight className='text-2xl font-bold cursor-pointer' />
                    </div>
                </div>
                {/* User Information */}

                 {/* User Information */}
                <div className='border-b px-4 py-3 grid grid-cols-4 items-center'>
                    <div className='flex items-center gap-2'>
                        <FaUserCircle className='text-2xl' />
                        <p className='text-sm'>Robert Fox</p>
                    </div>
                    <p className='text-sm'>Robert@gmail.com</p>
                    <p className='text-sm'>20 mins ago</p>
                    <div className='flex justify-end'>
                        <PiDotsThreeOutlineLight className='text-2xl font-bold cursor-pointer' />
                    </div>
                </div>
                {/* User Information */}

            </div>




        </div>
    </div>
  )
}

export default GeneralUsers