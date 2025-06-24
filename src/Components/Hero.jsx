import React, { useState } from 'react'
import { RiSearch2Line, RiCameraLine, RiGalleryLine, RiArrowDownSLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/searchresult?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className=" w-full bg-[url('/heroimg.png')] bg-center bg-no-repeat bg-cover h-screen flex items-center justify-center ">
        <div>
            <div className='text-center'>
                <p className="text-base text-white">Serene landscapes, endless inspiration.</p>
                <h1 className='text-4xl font-semibold text-white'>Upload, Download, Inspire.</h1>
            </div>

            {/* Search Section Start Here */}
            <form className='flex items-center justify-center mt-3' onSubmit={handleSearch}>
                <div className=' flex items-center border border-gray-300 p-2 rounded-full gap-5 backdrop-blur-md'>
                    <button type='button' className='flex items-center bg-white text-gray-500 px-3 py-3 rounded-3xl'>
                        <RiGalleryLine className='font-medium text-xl mr-1'></RiGalleryLine>
                        <p className='font-medium'>Photos</p>
                        <RiArrowDownSLine className='text-xl font-medium ml-1'></RiArrowDownSLine>
                    </button>
                    <input
                      className=' w-96 bg-transparent text-white border-none focus:border-none focus:outline-none'
                      type="text"
                      placeholder='Search'
                      value={query}
                      onChange={e => setQuery(e.target.value)}
                    />
                    <button type='submit' className='bg-white text-gray-500 px-3 py-3 rounded-full flex items-center'>
                        <RiSearch2Line className='font-medium text-xl'></RiSearch2Line>   
                    </button>
                </div>
                <button type='button' className='bg-white text-gray-500 px-3 py-3 rounded-full flex items-center ml-3'>
                    <RiCameraLine className='font-medium text-xl'></RiCameraLine>
                </button>
            </form>
        </div>
    </div>
  )
}

export default Hero