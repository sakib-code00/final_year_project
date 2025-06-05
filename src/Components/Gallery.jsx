import React from 'react'
import Image from '../Components/Image'
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import Crops from "../assets/Images/image.png"
import User_Icons from "../assets/Icons/user.png"
import { FiPlus } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { GoDownload } from "react-icons/go";
import Img_1 from "../assets/Images/image (1).png"
import Img_2 from "../assets/Images/image (2).png"
import Img_3 from "../assets/Images/image (3).png"
import Img_4 from "../assets/Images/image (4).png"
import Img_5 from "../assets/Images/image (5).png"
import Img_6 from "../assets/Images/image (6).png"
import Img_8 from "../assets/Images/image (7).png"
import Img_9 from "../assets/Images/image (8).png"



const Gallery = () => {
  return (
    <div className='w-11/12 flex flex-col justify-start items-center mt-4'>
        <div className='flex items-center justify-between w-full'>
            <h1 className='text-2xl text-black font-medium'>Images You’ll Love</h1>
        </div>
        <Image></Image>
        {/* Search Section Start Here */}

        <div className='mt-4  columns-3 gap-4 space-y-4'>
            <div className='relative '>
                <img className='h-full w-full' src={Crops} alt="" />
                <div className='backdrop-blur-md absolute top-0.5 right-0.5 p-5 gap-4 flex items-center justify-end w-full'>
                    <FiPlus className='text-5xl text-white bg-slate-400 p-2 rounded-full'></FiPlus>
                    <GoHeart className='text-5xl text-white bg-slate-400 p-3 rounded-full'></GoHeart>
                </div>
                <div className='backdrop-blur-md absolute bottom-0 flex items-center justify-between w-full p-5'>
                    <div className=' flex items-center gap-1'>
                        <img src={User_Icons} alt="" />
                        <p className='text-white text-xl font-medium'>Quadiz Digital Agency</p>
                    </div>
                    <GoDownload className='text-5xl text-white bg-slate-400 p-2 rounded-full'></GoDownload>
                </div>
            </div>

            <div className='relative '>
                <img className='h-full w-full' src={Img_9} alt="" />
                <div className='backdrop-blur-md absolute top-0.5 right-0.5 p-5 gap-4 flex items-center justify-end w-full'>
                    <FiPlus className='text-5xl text-white bg-slate-400 p-2 rounded-full'></FiPlus>
                    <GoHeart className='text-5xl text-white bg-slate-400 p-3 rounded-full'></GoHeart>
                </div>
                <div className='backdrop-blur-md absolute bottom-0 flex items-center justify-between w-full p-5'>
                    <div className=' flex items-center gap-1'>
                        <img src={User_Icons} alt="" />
                        <p className='text-white text-xl font-medium'>Quadiz Digital Agency</p>
                    </div>
                    <GoDownload className='text-5xl text-white bg-slate-400 p-2 rounded-full'></GoDownload>
                </div>
            </div>

            <div className='relative '>
                <img className='h-full w-full' src={Img_1} alt="" />
                <div className='backdrop-blur-md absolute top-0.5 right-0.5 p-5 gap-4 flex items-center justify-end w-full'>
                    <FiPlus className='text-5xl text-white bg-slate-400 p-2 rounded-full'></FiPlus>
                    <GoHeart className='text-5xl text-white bg-slate-400 p-3 rounded-full'></GoHeart>
                </div>
                <div className='backdrop-blur-md absolute bottom-0 flex items-center justify-between w-full p-5'>
                    <div className=' flex items-center gap-1'>
                        <img src={User_Icons} alt="" />
                        <p className='text-white text-xl font-medium'>Quadiz Digital Agency</p>
                    </div>
                    <GoDownload className='text-5xl text-white bg-slate-400 p-2 rounded-full'></GoDownload>
                </div>
            </div>

            <div className='relative '>
                <img className='h-full w-full' src={Img_2} alt="" />
                <div className='backdrop-blur-md absolute top-0 right-0 p-5 gap-4 flex items-center justify-end w-full'>
                    <FiPlus className='text-5xl text-white bg-slate-400 p-2 rounded-full'></FiPlus>
                    <GoHeart className='text-5xl text-white bg-slate-400 p-3 rounded-full'></GoHeart>
                </div>
                <div className='backdrop-blur-md absolute bottom-0 flex items-center justify-between w-full p-5'>
                    <div className=' flex items-center gap-1'>
                        <img src={User_Icons} alt="" />
                        <p className='text-white text-xl font-medium'>Quadiz Digital Agency</p>
                    </div>
                    <GoDownload className='text-5xl text-white bg-slate-400 p-2 rounded-full'></GoDownload>
                </div>
            </div>

            <div className='relative '>
                <img className='h-full w-full' src={Img_3} alt="" />
                <div className='backdrop-blur-md absolute top-0 right-0 p-5 gap-4 flex items-center justify-end w-full'>
                    <FiPlus className='text-5xl text-white bg-slate-400 p-2 rounded-full'></FiPlus>
                    <GoHeart className='text-5xl text-white bg-slate-400 p-3 rounded-full'></GoHeart>
                </div>
                <div className='backdrop-blur-md absolute bottom-0 flex items-center justify-between w-full p-5'>
                    <div className=' flex items-center gap-1'>
                        <img src={User_Icons} alt="" />
                        <p className='text-white text-xl font-medium'>Quadiz Digital Agency</p>
                    </div>
                    <GoDownload className='text-5xl text-white bg-slate-400 p-2 rounded-full'></GoDownload>
                </div>
            </div>

            <div className='relative '>
                <img className='h-full w-full' src={Img_4} alt="" />
                <div className='backdrop-blur-md absolute top-0 right-0 p-5 gap-4 flex items-center justify-end w-full'>
                    <FiPlus className='text-5xl text-white bg-slate-400 p-2 rounded-full'></FiPlus>
                    <GoHeart className='text-5xl text-white bg-slate-400 p-3 rounded-full'></GoHeart>
                </div>
                <div className='backdrop-blur-md absolute bottom-0 flex items-center justify-between w-full p-5'>
                    <div className=' flex items-center gap-1'>
                        <img src={User_Icons} alt="" />
                        <p className='text-white text-xl font-medium'>Quadiz Digital Agency</p>
                    </div>
                    <GoDownload className='text-5xl text-white bg-slate-400 p-2 rounded-full'></GoDownload>
                </div>
            </div>

            <div className='relative '>
                <img className='h-full w-full' src={Img_5} alt="" />
                <div className='backdrop-blur-md absolute top-0 right-0 p-5 gap-4 flex items-center justify-end w-full'>
                    <FiPlus className='text-5xl text-white bg-slate-400 p-2 rounded-full'></FiPlus>
                    <GoHeart className='text-5xl text-white bg-slate-400 p-3 rounded-full'></GoHeart>
                </div>
                <div className='backdrop-blur-md absolute bottom-0 flex items-center justify-between w-full p-5'>
                    <div className=' flex items-center gap-1'>
                        <img src={User_Icons} alt="" />
                        <p className='text-white text-xl font-medium'>Quadiz Digital Agency</p>
                    </div>
                    <GoDownload className='text-5xl text-white bg-slate-400 p-2 rounded-full'></GoDownload>
                </div>
            </div>

            <div className='relative '>
                <img className='h-full w-full' src={Img_2} alt="" />
                <div className='backdrop-blur-md absolute top-0 right-0 p-5 gap-4 flex items-center justify-end w-full'>
                    <FiPlus className='text-5xl text-white bg-slate-400 p-2 rounded-full'></FiPlus>
                    <GoHeart className='text-5xl text-white bg-slate-400 p-3 rounded-full'></GoHeart>
                </div>
                <div className='backdrop-blur-md absolute bottom-0 flex items-center justify-between w-full p-5'>
                    <div className=' flex items-center gap-1'>
                        <img src={User_Icons} alt="" />
                        <p className='text-white text-xl font-medium'>Quadiz Digital Agency</p>
                    </div>
                    <GoDownload className='text-5xl text-white bg-slate-400 p-2 rounded-full'></GoDownload>
                </div>
            </div>

            <div className='relative '>
                <img className='h-full w-full' src={Img_6} alt="" />
                <div className='backdrop-blur-md absolute top-0 right-0 p-5 gap-4 flex items-center justify-end w-full'>
                    <FiPlus className='text-5xl text-white bg-slate-400 p-2 rounded-full'></FiPlus>
                    <GoHeart className='text-5xl text-white bg-slate-400 p-3 rounded-full'></GoHeart>
                </div>
                <div className='backdrop-blur-md absolute bottom-0 flex items-center justify-between w-full p-5'>
                    <div className=' flex items-center gap-1'>
                        <img src={User_Icons} alt="" />
                        <p className='text-white text-xl font-medium'>Quadiz Digital Agency</p>
                    </div>
                    <GoDownload className='text-5xl text-white bg-slate-400 p-2 rounded-full'></GoDownload>
                </div>
            </div>

            <div className='relative '>
                <img className='h-full w-full' src={Img_8} alt="" />
                <div className='backdrop-blur-md absolute top-0 right-0 p-5 gap-4 flex items-center justify-end w-full'>
                    <FiPlus className='text-5xl text-white bg-slate-400 p-2 rounded-full'></FiPlus>
                    <GoHeart className='text-5xl text-white bg-slate-400 p-3 rounded-full'></GoHeart>
                </div>
                <div className='backdrop-blur-md absolute bottom-0 flex items-center justify-between w-full p-5'>
                    <div className=' flex items-center gap-1'>
                        <img src={User_Icons} alt="" />
                        <p className='text-white text-xl font-medium'>Quadiz Digital Agency</p>
                    </div>
                    <GoDownload className='text-5xl text-white bg-slate-400 p-2 rounded-full'></GoDownload>
                </div>
            </div>

            <div className='relative '>
                <img className='h-full w-full' src={Img_4} alt="" />
                <div className='backdrop-blur-md absolute top-0 right-0 p-5 gap-4 flex items-center justify-end w-full'>
                    <FiPlus className='text-5xl text-white bg-slate-400 p-2 rounded-full'></FiPlus>
                    <GoHeart className='text-5xl text-white bg-slate-400 p-3 rounded-full'></GoHeart>
                </div>
                <div className='backdrop-blur-md absolute bottom-0 flex items-center justify-between w-full p-5'>
                    <div className=' flex items-center gap-1'>
                        <img src={User_Icons} alt="" />
                        <p className='text-white text-xl font-medium'>Quadiz Digital Agency</p>
                    </div>
                    <GoDownload className='text-5xl text-white bg-slate-400 p-2 rounded-full'></GoDownload>
                </div>
            </div>

            <div className='relative '>
                <img className='h-full w-full' src={Img_9} alt="" />
                <div className='backdrop-blur-md absolute top-0 right-0 p-5 gap-4 flex items-center justify-end w-full'>
                    <FiPlus className='text-5xl text-white bg-slate-400 p-2 rounded-full'></FiPlus>
                    <GoHeart className='text-5xl text-white bg-slate-400 p-3 rounded-full'></GoHeart>
                </div>
                <div className='backdrop-blur-md absolute bottom-0 flex items-center justify-between w-full p-5'>
                    <div className=' flex items-center gap-1'>
                        <img src={User_Icons} alt="" />
                        <p className='text-white text-xl font-medium'>Quadiz Digital Agency</p>
                    </div>
                    <GoDownload className='text-5xl text-white bg-slate-400 p-2 rounded-full'></GoDownload>
                </div>
            </div>

            <div className='relative '>
                <img className='h-full w-full' src={Img_3} alt="" />
                <div className='backdrop-blur-md absolute top-0 right-0 p-5 gap-4 flex items-center justify-end w-full'>
                    <FiPlus className='text-5xl text-white bg-slate-400 p-2 rounded-full'></FiPlus>
                    <GoHeart className='text-5xl text-white bg-slate-400 p-3 rounded-full'></GoHeart>
                </div>
                <div className='backdrop-blur-md absolute bottom-0 flex items-center justify-between w-full p-5'>
                    <div className=' flex items-center gap-1'>
                        <img src={User_Icons} alt="" />
                        <p className='text-white text-xl font-medium'>Quadiz Digital Agency</p>
                    </div>
                    <GoDownload className='text-5xl text-white bg-slate-400 p-2 rounded-full'></GoDownload>
                </div>
            </div>
        </div>

        {/* Search Section Start Here */}
        <button className='flex items-center justify-center bg-gray-100 px-4 py-2 rounded-3xl mt-8 font-medium'>
            <p className="text-base text-gray-600">Explore More</p>
            <RiArrowRightSLine className='text-xl font-medium ml-1 text-gray-500'></RiArrowRightSLine>
        </button>
    </div>
  )
}

export default Gallery