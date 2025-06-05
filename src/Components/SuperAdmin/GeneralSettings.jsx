import React from 'react'
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from "../../assets/Images/Bpicsblack.png"

const GeneralSettings = () => {
  return (
    <div>
        <div className='my-4'>
            <h1 className='text-2xl font-bold'>General Settings</h1>
            <p className='text-sm'>Platform Configuration & System-Wide Controls</p>
        </div>
        <div className='bg-white rounded-xl p-4 flex flex-col items-center mr-4 min-h-96 justify-center'>
            <div className=''>
                <h1 className='text-xl font-bold mb-3'>Site Identity</h1>
                <div className='flex items-center justify-center gap-5'>
                    <div>
                        <div>
                    <div className='mb-3'>
                        <p className='text-sm mb-1'>Site Title</p>
                        <div className=' flex items-center border border-gray-300 px-4 rounded-lg gap-5 backdrop-blur-md'>
                            <input className='ml-2 w-96 bg-transparent text-black border-none focus:border-none focus:outline-none' type="text" placeholder='Search' />
                            <button className='bg-white text-gray-500 px-3 py-3 rounded-full flex items-center'>
                                <MdOutlineKeyboardArrowDown className='font-medium text-xl'></MdOutlineKeyboardArrowDown>   
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className='text-sm mb-1'>Upload Logo</p>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-200 rounded-lg p-2 w-16 h-16 flex items-center justify-center'>
                                <img className='' src={logo} alt="" />
                            </div>
                            <div className=''>
                                <input type="file" />
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                    <div>
                        <div>
                    <div className='mb-3'>
                        <p className='text-sm mb-1'>Site Title</p>
                        <div className=' flex items-center border border-gray-300 px-4 rounded-lg gap-5 backdrop-blur-md'>
                            <input className='ml-2 w-96 bg-transparent text-black border-none focus:border-none focus:outline-none' type="text" placeholder='Search' />
                            <button className='bg-white text-gray-500 px-3 py-3 rounded-full flex items-center'>
                                <MdOutlineKeyboardArrowDown className='font-medium text-xl'></MdOutlineKeyboardArrowDown>   
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className='text-sm mb-1'>Upload Logo</p>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-200 rounded-lg p-2 w-16 h-16 flex items-center justify-center'>
                                <img className='' src={logo} alt="" />
                            </div>
                            <div className=''>
                                <input type="file" />
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </div>        
        </div>
    </div>
  )
}

export default GeneralSettings