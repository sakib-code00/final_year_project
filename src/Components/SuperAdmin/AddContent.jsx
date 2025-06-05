import React from 'react'
import { IoImagesOutline } from "react-icons/io5";

const AddContent = () => {
  return (
    <div>
        <div className='bg-white rounded-xl p-4 flex flex-col items-center mt-4 mr-4 min-h-96 justify-center'>
            <div className='flex items-center justify-between w-full mb-20'>
                <button className='text-black bg-white border-2 border-black rounded-xl px-4 py-2'>Cancel</button>
                <h1 className='text-2xl font-bold'>What Will You Share Today?</h1>
                <div>
                    <button className='text-black bg-white border-2 border-black rounded-xl px-4 py-2 mr-3'>Save As Draft</button>
                    <button className='text-white bg-black rounded-xl px-4 py-2'>Continue</button>
                </div>
            </div>
            <div className='flex flex-col text-left w-3/5'>
                <p className='mb-2'>Title</p>
                <input className='text-black border rounded-lg p-2 mb-3 focus:border-none' type="text" placeholder='Write Image Title' />
            </div>
            <div className='bg-slate-50 border-2 border-dashed border-gray-200 rounded-xl px-8 py-10 text-center flex flex-col items-center'>
                <IoImagesOutline className='text-4xl font-extrabold'></IoImagesOutline>
                <h1 className='text-2xl mb-2 text-slate-400'>Drug and drop an image, or <a className='text-black' href="">Browse</a></h1>
                <p className='text-base mb-2'>Minimum 1600px width recommanded. Max 10MB each (20MB for videos)</p>
                <li className='text-sm mb-2'>High resulation images (png, jpg, gif) / Videos mp4</li>
                <li className='text-sm'>Only upload media you own the rights t0</li>
            </div>
    
            </div>
    </div>
  )
}

export default AddContent