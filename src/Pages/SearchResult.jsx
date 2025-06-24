import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { TbPhotoSquareRounded } from "react-icons/tb";
import { BiMoviePlay } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi";
import { RiFilter3Fill, RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { GoHeart, GoDownload, GoCircle } from "react-icons/go";
const BACKEND_URL = 'http://localhost:5000';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const SearchResult = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const query = useQuery().get('q') || '';

    useEffect(() => {
        const fetchResults = async () => {
            setLoading(true);
            setError('');
            try {
                const res = await fetch(`/api/contents/public?q=${encodeURIComponent(query)}`);
                const data = await res.json();
                if (res.ok) setResults(data);
                else setError(data.message || 'Failed to load results');
            } catch {
                setError('Failed to load results');
            }
            setLoading(false);
        };
        fetchResults();
    }, [query]);

    return (
        <div className='w-11/12 mt-20'>
            <div>
                {/*----------- Header Text Start Here----------*/}
                <div className='mb-6'>
                    <h1 className='text-4xl font-bold'>Free Dhaka Division Photos</h1>
                    <p className='text-sm font-normal text-gray-400'>18,000+ png images, videos. Download royalty free png pictures in HD quality as backgrounds & more.</p>
                </div>
                {/*----------- Header Text End Here----------*/}




                {/*----------- Images Section Start ----------*/}
                <div className='mt-4  columns-3 gap-4 space-y-4'>
                    {loading ? <div>Loading...</div> : error ? <div className='text-red-500'>{error}</div> : results.map(content => (
                        <div className='relative' key={content._id}>
                            <img className='h-full w-full' src={content.thumbnail && content.thumbnail.startsWith('/uploads/') ? BACKEND_URL + content.thumbnail : content.thumbnail} alt={content.title} />
                            <div className='backdrop-blur-md absolute top-0.5 right-0.5 p-5 gap-4 flex items-center justify-end w-full'>
                                <GoHeart className='text-5xl text-white bg-slate-400 p-3 rounded-full'></GoHeart>
                            </div>
                            <div className='backdrop-blur-md absolute bottom-0 flex items-center justify-between w-full p-5'>
                                <div className=' flex items-center gap-1'>
                                    <img src={content.uploader?.profilePic ? (content.uploader.profilePic.startsWith('/uploads/') ? BACKEND_URL + content.uploader.profilePic : content.uploader.profilePic) : '/default-user.png'} alt="" className='w-8 h-8 rounded-full object-cover' />
                                    <p className='text-white text-xl font-medium'>{content.uploader?.name || 'Unknown'}</p>
                                </div>
                                <GoDownload className='text-5xl text-white bg-slate-400 p-2 rounded-full'></GoDownload>
                            </div>
                        </div>
                    ))}
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