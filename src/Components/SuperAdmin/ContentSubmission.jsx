import React from 'react'
import { IoImageOutline } from "react-icons/io5";
import { TiArrowLeft } from "react-icons/ti";
const ContentSubmission = () => {
  return (
    <div>
        <div className='bg-white rounded-xl p-4 flex flex-col items-center mr-4 min-h-96 justify-center mt-4'>
            <div className=' px-8 py-10 text-center flex flex-col items-center'>
                <IoImageOutline className='text-4xl font-extrabold text-green-300'></IoImageOutline>
                <h1 className='text-2xl font-bold mb-2'>Submission Successfully</h1>
                <p className='text-sm mb-2'>We will review your upload soon and keep you updated.</p>
                <button className='bg-black text-white rounded-2xl px-4 py-2 mt-1 flex flex-raw justify-center gap-2 items-center'><TiArrowLeft className='text-xl'></TiArrowLeft>Back To Deshboard</button>
            </div>
        
        </div>
    </div>
  )
}

export default ContentSubmission