import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { GoShareAndroid } from "react-icons/go";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import image11 from "../Wishlist/images/image (11).png"
import image12 from "../Wishlist/images/image (12).png"
import image13 from "../Wishlist/images/image (13).png"
import image14 from "../Wishlist/images/image (14).png"
import image15 from "../Wishlist/images/image (15).png"
import image16 from "../Wishlist/images/image (16).png"
import image17 from "../Wishlist/images/image (17).png"
import image18 from "../Wishlist/images/image (18).png"


const Wishlist = () => {
  return (
    <div>
        <div className='bg-white p-6 rounded-xl'>

            {/*--------Wish list title bar-------- */}
            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-2xl font-bold text-gray-700'>Wish List</h1>
                <div className='flex items-center gap-4'>
                    <RiDeleteBinLine className='text-gray-700 font-semibold text-2xl'></RiDeleteBinLine>
                    <GoShareAndroid className='text-gray-700 font-semibold text-2xl'></GoShareAndroid>
                    <PiDotsThreeOutlineLight className='text-gray-700 font-semibold text-2xl'></PiDotsThreeOutlineLight>
                    
                </div>
            </div>

            {/*--------Wish list images-------- */}
            <div className='columns-4 gap-4 space-y-4'>
              <img src={image11} alt="" />
              <img src={image12} alt="" />
              <img src={image13} alt="" />
              <img src={image14} alt="" />
              <img src={image15} alt="" />
              <img src={image16} alt="" />
              <img src={image17} alt="" />
              <img src={image18} alt="" />
              

            </div>
        </div>
    </div>
  )
}

export default Wishlist