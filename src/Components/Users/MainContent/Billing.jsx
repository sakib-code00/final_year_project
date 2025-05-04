import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { GoShareAndroid } from "react-icons/go";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { BiFileBlank } from "react-icons/bi";
import { PiFileArrowDown } from "react-icons/pi";
import { HiOutlineUser } from "react-icons/hi2";
import { MdOutlineSystemUpdateAlt } from "react-icons/md"
import paypal from "./Wishlist/images/paypal-pure- 2.png"
import { BiDollarCircle } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { RiDownloadCloud2Line } from "react-icons/ri";

const Billing = () => {
  return (
    <div>
        <div className='bg-white p-6 rounded-xl'>

            {/*----History Title Bar */}
            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-2xl font-bold text-gray-700'>Billing History</h1>
            </div>

           {/*------Billings------ */} 
           <div className='flex flex-col gap-6'>
                <div className='grid grid-cols-4 items-center justify-between gap-6'>

                    {/*------Billing History title------ */} 
                    <div className='flex items-center justify-start gap-1'>
                        <MdPayment className='text-2xl text-gray-400 font-medium'></MdPayment>
                        <p className='text-gray-400 text-base font-normal'>Payment Method</p>
                    </div>
                    <div className='flex items-center justify-start gap-1'>
                        <MdOutlineDateRange className='text-2xl text-gray-400 font-medium'></MdOutlineDateRange>
                        <p className='text-gray-400 text-base font-normal'>Payment Date</p>
                    </div>
                    <div className='flex items-center justify-start gap-1'>
                        <MdOutlineDateRange className='text-2xl text-gray-400 font-medium'></MdOutlineDateRange>
                        <p className='text-gray-400 text-base font-normal'>Subscription End</p>
                    </div>
                    <div className='flex items-center justify-start gap-1'>
                        <BiDollarCircle className='text-2xl text-gray-400 font-medium'></BiDollarCircle>
                        <p className='text-gray-400 text-base font-normal'>Amount</p>
                    </div>
                </div>


                {/*------Billing History------ */}
                 <div className='grid grid-cols-4 items-center justify-between gap-10 bg-gray-50 p-3 rounded-xl'>
                        <div className='flex items-center justify-start gap-1'>
                            <img className='w-10' src={paypal} alt="" />
                            <div>
                                <h1 className='text-xl font-bold text-gray-700'>Paypal</h1>
                                <p className='text-sm font-normal text-gray-400'>quadizdigital@gmail.com</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm font-normal text-gray-400'>22 Jan 2025</p>
                        </div>
                        <div>
                            <p className='text-sm font-normal text-gray-400'>22 Jan 2025</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm font-normal text-gray-700'>$ 256</p>
                            <RiDownloadCloud2Line className='text-gray-700 bg-gray-100 text-4xl p-2 rounded-xl'></RiDownloadCloud2Line>
                        </div>

                </div>

                {/*------Billing History------ */}
                <div className='grid grid-cols-4 items-center justify-between gap-10 bg-gray-50 p-3 rounded-xl'>
                        <div className='flex items-center justify-start gap-1'>
                            <img className='w-10' src={paypal} alt="" />
                            <div>
                                <h1 className='text-xl font-bold text-gray-700'>Paypal</h1>
                                <p className='text-sm font-normal text-gray-400'>quadizdigital@gmail.com</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm font-normal text-gray-400'>22 Jan 2025</p>
                        </div>
                        <div>
                            <p className='text-sm font-normal text-gray-400'>22 Jan 2025</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm font-normal text-gray-700'>$ 256</p>
                            <RiDownloadCloud2Line className='text-gray-700 bg-gray-100 text-4xl p-2 rounded-xl'></RiDownloadCloud2Line>
                        </div>

                </div>


                {/*------Billing History------ */}
                <div className='grid grid-cols-4 items-center justify-between gap-10 bg-gray-50 p-3 rounded-xl'>
                        <div className='flex items-center justify-start gap-1'>
                            <img className='w-10' src={paypal} alt="" />
                            <div>
                                <h1 className='text-xl font-bold text-gray-700'>Paypal</h1>
                                <p className='text-sm font-normal text-gray-400'>quadizdigital@gmail.com</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm font-normal text-gray-400'>22 Jan 2025</p>
                        </div>
                        <div>
                            <p className='text-sm font-normal text-gray-400'>22 Jan 2025</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm font-normal text-gray-700'>$ 256</p>
                            <RiDownloadCloud2Line className='text-gray-700 bg-gray-100 text-4xl p-2 rounded-xl'></RiDownloadCloud2Line>
                        </div>

                </div>


                {/*------Billing History------ */}
                <div className='grid grid-cols-4 items-center justify-between gap-10 bg-gray-50 p-3 rounded-xl'>
                        <div className='flex items-center justify-start gap-1'>
                            <img className='w-10' src={paypal} alt="" />
                            <div>
                                <h1 className='text-xl font-bold text-gray-700'>Paypal</h1>
                                <p className='text-sm font-normal text-gray-400'>quadizdigital@gmail.com</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm font-normal text-gray-400'>22 Jan 2025</p>
                        </div>
                        <div>
                            <p className='text-sm font-normal text-gray-400'>22 Jan 2025</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm font-normal text-gray-700'>$ 256</p>
                            <RiDownloadCloud2Line className='text-gray-700 bg-gray-100 text-4xl p-2 rounded-xl'></RiDownloadCloud2Line>
                        </div>

                </div>

                {/*------Billing History------ */}
                <div className='grid grid-cols-4 items-center justify-between gap-10 bg-gray-50 p-3 rounded-xl'>
                        <div className='flex items-center justify-start gap-1'>
                            <img className='w-10' src={paypal} alt="" />
                            <div>
                                <h1 className='text-xl font-bold text-gray-700'>Paypal</h1>
                                <p className='text-sm font-normal text-gray-400'>quadizdigital@gmail.com</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm font-normal text-gray-400'>22 Jan 2025</p>
                        </div>
                        <div>
                            <p className='text-sm font-normal text-gray-400'>22 Jan 2025</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm font-normal text-gray-700'>$ 256</p>
                            <RiDownloadCloud2Line className='text-gray-700 bg-gray-100 text-4xl p-2 rounded-xl'></RiDownloadCloud2Line>
                        </div>

                </div>

           </div>
        </div>
    </div>
  )
}

export default Billing