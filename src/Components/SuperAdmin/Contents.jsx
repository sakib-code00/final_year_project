import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import image7 from "../../assets/Images/image (7).png"

const Contents = () => {
  return (
    <div>
            <div className='my-4 flex items-center justify-between mr-5'>
                <div>
                    <h1 className='text-2xl font-bold'>All Contents</h1>
                    <p className='text-sm'>Review, Approve, or reject uploaded content to maintaining platform quality.</p>
                </div>
                <button className='text-white bg-black rounded-lg px-4 py-2'>Add New Content</button>
            </div>
            <div className='bg-white rounded-xl p-4 flex flex-col items-center mr-4 min-h-96'>
    
    
                {/*All user Title Start */}
                <div className='flex items-start justify-between w-full mb-4'>
                    <h1 className='text-xl font-bold flex items-center justify-center'>Contents</h1>
                </div>
                {/*All user Title end */}
    
    
                <div className='border border-gray-100 rounded-lg w-full mx-4'>
    
                    {/* Users table head */}
                    <div className='bg-slate-50 border-b px-4 py-2 grid grid-cols-5 items-center'>
                        <div className='flex items-center gap-4'>
                            <p className='text-base font-bold'>Thumbnail</p>
                            <p className='text-base font-bold'>Title</p>
                        </div>
                        <p className='text-base font-bold'>Type</p>
                        <p className='text-base font-bold'>Upload Date</p>
                        <p className='text-base font-bold'>Region</p>
                        <p className='text-base font-bold text-end'>Action</p>
                    </div>
    
                    {/* User Information */}
                    <div className='border-b px-4 py-3 grid grid-cols-5 items-center'>
                        <div className='flex items-center justify-start gap-4'>
                            <img className='w-14' src={image7} alt="" />
                            <p className='text-sm'>Sundarban</p>
                        </div>
                        <p className='text-sm'>Photo</p>
                        <p className='text-sm'>10 Octobor 2025</p>
                        <p className='text-sm'>Dhaka</p>
                        <div className='flex justify-end'>
                            <button className='border border-black px-4 py-2 rounded-lg'>View Details</button>
                        </div>
                    </div>
                    {/* User Information */}
    
    
    
                </div>
    
    
    
    
            </div>
        </div>
  )
}

export default Contents