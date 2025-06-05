import React from 'react'
import { IoImageOutline } from "react-icons/io5";

const UploadContent = () => {
  return (
    <div>
        <div className='my-4'>
            <h1 className='text-2xl font-bold'>Upload & Sell Your Media</h1>
            <p className='text-sm'>Upload your images or videos to start selling.</p>
        </div>
        <div className='bg-white rounded-xl p-4 flex flex-col items-center mr-4 min-h-96 justify-center'>
            <div className='border-2 border-dashed border-gray-200 rounded-xl px-8 py-10 text-center flex flex-col items-center'>
                <IoImageOutline className='text-4xl font-extrabold'></IoImageOutline>
                <h1 className='text-2xl font-bold mb-2'>Share Your Frist Snap</h1>
                <p className='text-sm mb-2'>Upload your images or videos to start selling.</p>
                <button className='bg-black text-white rounded-2xl px-4 py-2 mt-1'>+ Upload Your First Snap</button>
            </div>

        </div>
    </div>
  )
}

export default UploadContent