import React from 'react'
import { TbPhotoSquareRounded } from "react-icons/tb";
import { BiMoviePlay } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi";
import { RiFilter3Fill } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import User_Icons from "../assets/Icons/user.png"
import { FiPlus } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { GoDownload } from "react-icons/go";
import { GoCircle } from "react-icons/go";
import { RiArrowRightSLine } from "react-icons/ri";
import Crops from "../assets/Images/image.png"
import Img_1 from "../assets/Images/image (1).png"
import Img_2 from "../assets/Images/image (2).png"
import Img_3 from "../assets/Images/image (3).png"
import Img_4 from "../assets/Images/image (4).png"
import Img_5 from "../assets/Images/image (5).png"
import Img_6 from "../assets/Images/image (6).png"
import Img_8 from "../assets/Images/image (7).png"
import Img_9 from "../assets/Images/image (8).png"

const SearchResult = () => {
  return (
    <div className='w-11/12 mt-20'>
        <div>
            {/*----------- Header Text Start Here----------*/}
            <div className='mb-6'>
                <h1 className='text-4xl font-bold'>Free Dhaka Division Photos</h1>
                <p className='text-sm font-normal text-gray-400'>18,000+ png images, videos. Download royalty free png pictures in HD quality as backgrounds & more.</p>
            </div>
            {/*----------- Header Text End Here----------*/}


            {/*----------- Navigation bar Start Here----------*/}
            <div className='flex items-center justify-between mb-6'>
                {/*----------- Left Navigation bar----------*/}
                <div className='flex items-start justify-start gap-5'>
                    <button className='flex items-center justify-center gap-1 bg-black text-white py-2 px-4 rounded-full'>
                        <TbPhotoSquareRounded className='text-xl'></TbPhotoSquareRounded>
                        <p>Photos <span className='text-gray-300'>(18k)</span></p>
                    </button>
                    <button className='flex items-center justify-center gap-1  text-black py-2 px-4 rounded-full'>
                        <BiMoviePlay className='text-xl'></BiMoviePlay>
                        <p>Videos <span className='text-gray-300'>(10k)</span></p>
                    </button>
                    <button className='flex items-center justify-center gap-1 text-black py-2 px-4 rounded-full'>
                        <HiOutlineUser className='text-xl'></HiOutlineUser>
                        <p>User <span className='text-gray-300'>(5k)</span></p>
                    </button>
                </div>

                {/*----------- Right Navigation bar----------*/}
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2 py-2 px-3 rounded-full bg-slate-100'>
                        <p>Filter</p>
                        <RiFilter3Fill className='text-xl'></RiFilter3Fill>
                    </div>
                    <div className='flex items-center gap-2 py-2 px-3 rounded-full bg-slate-100'>
                        <p>Popular</p>
                        <RiArrowDownSLine className='text-xl'></RiArrowDownSLine>
                    </div>
                </div>
            </div>
            {/*----------- Navigation bar End Here----------*/}

            {/*----------- Categories bar Start Here----------*/}
            <div className='flex items-center justify-between gap-4 mb-5'>
                <div className='w-1/3 p-1 flex items-center justify-between border border-gray-400 rounded-lg'>
                    <p className='text-base text-gray-400 font-medium'>All Orientations</p>
                    <RiArrowDownSLine className='text-xl font-medium'></RiArrowDownSLine>
                </div>
                <div className='w-1/3 p-1 flex items-center justify-between border border-gray-400 rounded-lg'>
                    <p className='text-base text-gray-400 font-medium'>All Sizes</p>
                    <RiArrowDownSLine className='text-xl font-medium'></RiArrowDownSLine>
                </div>
                <div className='w-1/3 p-1 flex items-center justify-start gap-1 border border-gray-400 rounded-lg'>
                    <GoCircle className='text-lg text-gray-300 font-medium'></GoCircle>
                    <p className='text-base text-gray-400 font-medium'>Enter Hex Code</p>
                    
                </div>
            </div>
            {/*----------- Categories bar End Here----------*/}

            {/*----------- Images Section Start ----------*/}
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
            {/*----------- Images Section End ----------*/}





            {/*----------- Explore Button ----------*/}
            <div className='flex items-center justify-center'>
                <button className='flex items-center justify-center bg-gray-100 px-4 py-2 rounded-3xl mt-8 font-medium'>
                    <p className="text-base text-gray-600">Explore More</p>
                    <RiArrowRightSLine className='text-xl font-medium ml-1 text-gray-500'></RiArrowRightSLine>
                </button>
            </div>
            {/*----------- Explore Button End Here ----------*/}
        </div>
    </div>
  )
}

export default SearchResult