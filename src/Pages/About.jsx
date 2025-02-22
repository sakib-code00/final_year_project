import React from 'react'
import logo from '../assets/Images/logo.png'
import image10 from '../assets/Images/AboutImg/image (10).png'
import Rectangle6 from '../assets/Images/AboutImg/Rectangle 6.png'
import Rectangle7 from '../assets/Images/AboutImg/Rectangle 7.png'
import Rectangle8 from '../assets/Images/AboutImg/Rectangle 8.png'
import Rectangle9 from '../assets/Images/AboutImg/Rectangle 9.png'
import Rectangle10 from '../assets/Images/AboutImg/Rectangle 10.png'
import Frame2 from '../assets/Images/Frame 217 (2).png'
import Frame3 from '../assets/Images/Frame 217 (3).png'
import Frame4 from '../assets/Images/Frame 220 (1).png'
import { RiSearch2Line } from "react-icons/ri";
import { LiaSave } from "react-icons/lia";
import logo1 from '../assets/Icons/Logo (1).png'
import { FcGoogle } from "react-icons/fc";


const About = () => {
  return (
    <div className='w-full'>
        <div className=' w-full'>

            {/*--------- About Page Section 1 ----------*/}
            <div className=' w-full mt-10 mb-10'>

                {/*--------- Heading Text ----------*/}
                <div className='flex flex-col items-center justify-center'>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2 mb-8 mt-5'>
                        <h1 className=' text-center text-4xl font-bold'>Welcome to Bpics <br /> Your Creative Playground</h1>
                        <p className=' text-center text-base text-gray-400 w-1/2'>Experts in UI/UX design and development, creating seamless and impactful digital experiences for your business.</p>
                    </div>
                    <div className='flex gap-5 mb-10'>
                        <button className='text-base text-white font-bold bg-blue-500 rounded-full px-4 py-2'>Get In Touch</button>
                        <button className='text-center text-base font-semibold'>Visit Website</button>
                    </div>
                    <div className='relative'>
                        <img className='' src={image10} alt="" />
                        <div>
                            <img className='absolute bottom-64 -right-[320px]' src={Rectangle6} alt="" />
                            <img className='absolute bottom-10 -right-56' src={Rectangle7} alt="" />
                            <img className='absolute bottom-20 -right-[420px]' src={Rectangle8} alt="" />
                            <img className='absolute bottom-16 -left-72' src={Rectangle9} alt="" />
                            <img className='absolute -top-20 -left-[450px]' src={Rectangle10} alt="" />
                        </div>
                    </div>
                </div>
                {/*--------- Heading Text End ----------*/}
                

            </div>
            {/*--------- About Page Section 1 End Here ----------*/}

            {/*--------- About Page Section 2 ----------*/}
            <div className=' w-full bg-green-200 flex items-center justify-center p-10 gap-24'>
                <div className=''>
                    <img className='h-3/6' src={Frame2} alt="" />
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <div>
                            <div className='flex items-center justify-center gap-1 bg-white py-2 px-4 rounded-full border border-gray-200'>
                                <RiSearch2Line className='text-2xl'></RiSearch2Line>
                                <input className='focus:outline-none' type="text" placeholder='Search anything' />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-center text-4xl font-bold text-green-500'>Find Your Inspiration</h1>
                            <p className='text-base text-gray-400 text-center'>Discover and download stunning images that <br />
                            match your creative vision.</p>
                        </div>
                        <button className='text-base font-bold text-green-500 px-4 py-2 rounded-full border border-green-500'>Explore Ideas</button>
                    </div>
                </div>
            </div>
            {/*--------- About Page Section 2 End Here ----------*/}


            {/*--------- About Page Section 3 ----------*/}
            <div className=' w-full bg-purple-200 flex items-center justify-center p-10 gap-24'>
                <div>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <div>
                            <div className='flex items-center justify-center gap-1 bg-white py-2 px-4 rounded-full border border-purple-500'>
                                <LiaSave className='text-2xl'></LiaSave>
                                <p>Save Ideas You Like The Most</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-center text-4xl font-bold text-purple-500'>Find Your Inspiration</h1>
                            <p className='text-base text-gray-400 text-center'>Discover and download stunning images that <br />
                            match your creative vision.</p>
                        </div>
                        <button className='text-base font-bold text-purple-500 px-4 py-2 rounded-full border border-purple-500'>Explore Ideas</button>
                    </div>
                </div>
                <div className=''>
                    <img className='h-3/6' src={Frame3} alt="" />
                </div>
            </div>
            {/*--------- About Page Section 3 End Here ----------*/}


            {/*--------- About Page Section 4 ----------*/}
            <div className=' w-full bg-red-100 flex items-center justify-center p-10 gap-24'>
                <div className=''>
                    <img className='h-3/6' src={Frame4} alt="" />
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <div>
                            <div className='flex items-center justify-center gap-1 bg-white py-2 px-4 rounded-full border border-gray-200'>
                                <img className='w-12' src={logo1} alt="" />
                                <div>
                                    <p className='text-lg font-bold'>Quadiz Digital</p>
                                    <p className='text-sm text-gray-400 '>28K Followers</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-center text-4xl font-bold text-red-500'>Find Your Inspiration</h1>
                            <p className='text-base text-gray-400 text-center'>Discover and download stunning images that <br />
                            match your creative vision.</p>
                        </div>
                        <button className='text-base font-bold text-red-500 px-4 py-2 rounded-full border border-red-500'>SignUp Now</button>
                    </div>
                </div>
            </div>
            {/*--------- About Page Section 4 End Here ----------*/}


            {/*--------- About Page Section 5 ----------*/}
            <div className=' w-full bg-blue-100 flex items-center justify-center p-10 gap-24'>
                <div>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <div>
                            <h1 className='text-center text-4xl font-bold text-black'><span className='text-blue-500'>Sign Up</span> to Find all the<br />
                            creative Ideas at one place</h1>
                            <p className='text-base text-gray-400 text-center'>Join now to discover and explore a world of creative photos and video<br />—all in one place!</p>
                        </div>
                        <button className='text-base font-bold text-blue-500 px-4 py-2 rounded-full border border-blue-500'>Sign Up Now</button>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className=' w-10/12 flex flex-col items-center justify-center gap-5 p-5 bg-white rounded-xl'>

                                    <div className='w-full'>
                                        <p className='mb-1'>Email</p>
                                        <input className=' w-full px-3 py-2 border rounded-lg focus:outline-none' type="email" placeholder='Email' name="" id="" />
                                        <p className='mb-1 mt-3'>Password</p>
                                        <input className=' w-full px-3 py-2 border rounded-lg focus:outline-none' type="password" placeholder='Password' name="" id="" />
                                    </div>
                                    <button className='text-center w-full bg-black text-white text-lg font-semibold rounded-2xl py-3'>Continue</button>
                                    <div className='flex items-center justify-center w-full '>
                                        <hr className='w-1/2 mr-1' />
                                        <p className='text-bse font-normal text-gray-500'>OR</p>
                                        <hr className='w-1/2 ml-1' />
                                    </div>
                                    <button className=' flex items-center justify-center text-center w-full border border-gray-400 text-lg font-semibold rounded-2xl py-3'>
                                        <FcGoogle className='text-2xl mr-2'></FcGoogle>
                                        <p>Continue with Google</p>
                                    </button>
                                    <div></div>
                                </div>
                </div>
            </div>
            {/*--------- About Page Section 5 End Here ----------*/}

        </div>
    </div>
  )
}

export default About