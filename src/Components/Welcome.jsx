import React from 'react'
import { GoDownload } from "react-icons/go";
import { RiArrowRightSLine } from "react-icons/ri";

const Welcome = () => {
  return (
    <div className='w-11/12 mb-20 mt-20'>
        <div className='mb-8'>
            <p className='text-sm text-gray-400'>What you can do</p>
            <h1 className='text-3xl font-bold'>Welcome to Bpics<br></br>– Your Creative Playground</h1>
            <p className='text-sm text-gray-400 w-2/3'>Discover premium, royalty-free images & videos. Elevate your projects with our curated collection,
            all under one simple license. Start creating today!</p>
        </div>
        <div className='flex items-center gap-4'>
            <div className='w-1/3 px-6 py-4 flex flex-col gap-6'>
                <GoDownload className='text-4xl p-2 bg-slate-600 text-white rounded-lg'></GoDownload>
                <div>
                    <h1 className='text-xl font-bold mb-2'>Explore Image & Videos</h1>
                    <p className='text-sm text-gray-400 w-4/6'>Discover stunning images and videos to inspire your next project. Start exploring now!</p>
                </div>
                <button className='flex items-center justify-center bg-gray-100 w-2/4 p-2 rounded-3xl  font-medium'>
                    <p className="text-base text-gray-600">Explore More</p>
                    <RiArrowRightSLine className='text-xl font-medium ml-1 text-gray-500'></RiArrowRightSLine>
                </button>
            </div>

            <div className='w-1/3 px-6 py-4 flex flex-col gap-6'>
                <GoDownload className='text-4xl p-2 bg-slate-600 text-white rounded-lg'></GoDownload>
                <div>
                    <h1 className='text-xl font-bold mb-2'>Download What You Love</h1>
                    <p className='text-sm text-gray-400 w-4/6'>Discover, share, and download amazing photos and videos from creators worldwide.</p>
                </div>
                <button className='flex items-center justify-center bg-gray-100 w-2/4 p-2 rounded-3xl  font-medium'>
                    <p className="text-base text-gray-600">Explore More</p>
                    <RiArrowRightSLine className='text-xl font-medium ml-1 text-gray-500'></RiArrowRightSLine>
                </button>
            </div>

            <div className='w-1/3 px-6 py-4 flex flex-col gap-6'>
                <GoDownload className='text-4xl p-2 bg-slate-600 text-white rounded-lg'></GoDownload>
                <div>
                    <h1 className='text-xl font-bold mb-2'>Share Your Work</h1>
                    <p className='text-sm text-gray-400 w-4/5'>Upload and showcase your photos and videos to inspire others. Connect, share, and grow with a global community!</p>
                </div>
                <button className='flex items-center justify-center bg-gray-100 w-2/4 p-2 rounded-3xl  font-medium'>
                    <p className="text-base text-gray-600">Explore More</p>
                    <RiArrowRightSLine className='text-xl font-medium ml-1 text-gray-500'></RiArrowRightSLine>
                </button>
            </div>

        </div>

    </div>
  )
}

export default Welcome