import React from 'react'
import { TfiWorld } from "react-icons/tfi";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { BiHelpCircle } from "react-icons/bi";

const Profilesetting = () => {
  return (
    <div>
      <div className='bg-white p-4 rounded-xl'>
        <h1 className='text-2xl text-gray-700 font-bold mb-6'>Settings</h1>

        {/*--------- Setting Options ------------*/}
        <div className='flex flex-col gap-4'>


          {/*--------- Option 3 ------------*/}
          <div className='bg-gray-100 rounded-xl p-4 flex items-center justify-between'>
            <div className=' flex items-center justify-center gap-3'>
              <MdOutlineVerifiedUser className='text-3xl text-gray-700 font-bold'></MdOutlineVerifiedUser>
              <div>
                <h2 className='text-xl font-bold text-gray-700'>Two-Factor Authentication</h2>
                <p className='text-sm text-gray-400 '>Disabled</p>
              </div>
            </div>
            <button className='text-base font-medium py-1 px-2 rounded-xl border border-gray-400'>Enable</button>
          </div>
          {/*--------- Option 3 ------------*/}

          {/*--------- Option 4 ------------*/}
          <div className='bg-gray-100 rounded-xl p-4 flex items-center justify-between'>
            <div className=' flex items-center justify-center gap-3'>
              <BiHelpCircle className='text-3xl text-gray-700 font-bold'></BiHelpCircle>
              <div>
                <h2 className='text-xl font-bold text-gray-700'>Help & Support</h2>
                <p className='text-sm text-gray-400 '>Get help or contact support</p>
              </div>
            </div>
            <button className='text-base font-medium py-1 px-2 rounded-xl border border-gray-400'>Contact</button>
          </div>
          {/*--------- Option 4 ------------*/}


        </div>
        {/*--------- Setting Options End Here ------------*/}
      </div>
    </div>
  )
}

export default Profilesetting