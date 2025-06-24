import React, { useEffect, useState } from 'react'
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { GoHeart, GoDownload } from "react-icons/go";
const BACKEND_URL = 'http://localhost:5000';

const Gallery = () => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchContents = async () => {
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('/api/contents/public');
        const data = await res.json();
        if (res.ok) setContents(data);
        else setError(data.message || 'Failed to load gallery');
      } catch {
        setError('Failed to load gallery');
      }
      setLoading(false);
    };
    fetchContents();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className='text-red-500'>{error}</div>;

  return (
    <div className='w-11/12 flex flex-col justify-start items-center mt-4'>
        <div className='flex items-center justify-between w-full'>
            <h1 className='text-2xl text-black font-medium'>Images You’ll Love</h1>
        </div>
        <div className='mt-4 columns-3 gap-4 space-y-4'>
          {contents.map(content => (
            <div className='relative' key={content._id}>
                <img className='h-full w-full' src={content.thumbnail && content.thumbnail.startsWith('/uploads/') ? BACKEND_URL + content.thumbnail : content.thumbnail} alt={content.title} />
                <div className='backdrop-blur-md absolute top-0.5 right-0.5 p-5 gap-4 flex items-center justify-end w-full'>
                    <GoHeart className='text-5xl text-white bg-slate-400 p-3 rounded-full'></GoHeart>
                </div>
                <div className='backdrop-blur-md absolute bottom-0 flex items-center justify-between w-full p-5'>
                    <div className=' flex items-center gap-1'>
                        {/* Optionally show uploader info */}
                        <img src={content.uploader?.profilePic ? (content.uploader.profilePic.startsWith('/uploads/') ? BACKEND_URL + content.uploader.profilePic : content.uploader.profilePic) : '/default-user.png'} alt="" className='w-8 h-8 rounded-full object-cover'/>
                        <p className='text-white text-xl font-medium'>{content.uploader?.name || 'Unknown'}</p>
                    </div>
                    <GoDownload className='text-5xl text-white bg-slate-400 p-2 rounded-full'></GoDownload>
                </div>
            </div>
          ))}
          </div>
        <button className='flex items-center justify-center bg-gray-100 px-4 py-2 rounded-3xl mt-8 font-medium'>
            <p className="text-base text-gray-600">Explore More</p>
            <RiArrowRightSLine className='text-xl font-medium ml-1 text-gray-500'></RiArrowRightSLine>
        </button>
    </div>
  )
}

export default Gallery