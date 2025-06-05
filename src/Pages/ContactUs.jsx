import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { BsChatText } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { PiPaperPlaneTiltLight } from "react-icons/pi";


const ContactUs = () => {
  return (
    <div className='w-10/12 bg-white rounded-2xl my-20 p-5'>
        <div className='p-3 flex items-center justify-center gap-10'>


            {/*------------ Left Section-----------------*/}
            <div className=' flex '>
                <div>
                    <div className='w-1/3 bg-blue-200 border border-blue-600 rounded-3xl px-4 py-2 mb-5'>
                        <p className='text-lg text-blue-800 font-medium'>Contact Us</p>
                    </div>
                    <div className='mb-5'>
                        <h1 className='text-4xl text-gray-800 font-bold'>We're Here<br />to Help!</h1>
                        <p className='text-sm text-gray-400 font-normal mt-4 w-4/5'>Have questions or need assistance? Contact us at Coreik for support or to discuss your project.</p>
                    </div>
                </div>

                {/*------------ Left Section Contact Icons-----------------*/}
                <div className='flex flex-col gap-5'>
                    <div className='flex items-center justify-start gap-3'>
                        <div>
                            <BsChatText className='text-5xl rounded-xl border border-gray-500 p-2'></BsChatText>
                        </div>
                        <div>
                            <h2 className='text-xl text-gray-600 font-bold'>Chat with us</h2>
                            <p className='text-base text-gray-400'>We will respond to you within 24 hours.</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-start gap-3'>
                        <div>
                            <IoCallOutline className='text-5xl rounded-xl border border-gray-500 p-2'></IoCallOutline>
                        </div>
                        <div>
                            <h2 className='text-xl text-gray-600 font-bold'>Call Us</h2>
                            <p className='text-base text-gray-400'>We will respond to you within 24 hours.</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-start gap-3'>
                        <div>
                            <CiLocationOn className='text-5xl rounded-xl border border-gray-500 p-2'></CiLocationOn>
                        </div>
                        <div>
                            <h2 className='text-xl text-gray-600 font-bold'>Visit Us</h2>
                            <p className='text-base text-gray-400'>We will respond to you within 24 hours.</p>
                        </div>
                    </div>
                </div>
                {/*------------ Left Section Contact Icons End here-----------------*/}
            </div>
            {/*------------ Left Section End here-----------------*/}

            {/*------------ Right Section-----------------*/}

            {/*------------ Right Section End here-----------------*/}

        </div>
    </div>
  )
}

export default ContactUs