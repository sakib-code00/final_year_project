import React, { useEffect, useState } from 'react'
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { GoHeart, GoDownload } from "react-icons/go";
const BACKEND_URL = 'http://localhost:5000';

const Gallery = () => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [feedback, setFeedback] = useState({});

  useEffect(() => {
    const fetchContents = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch('/api/contents/public');
        const data = await res.json();
        if (res.ok) setContents(data);
        else setError(data.message || 'Failed to load gallery');
      } catch {
        setError('Failed to load gallery');
      }
      setLoading(false);
    };
    const fetchWishlist = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('/api/users/wishlist', { headers: { Authorization: `Bearer ${token}` } });
        const data = await res.json();
        if (res.ok) setWishlist(data.map(item => item._id));
      } catch {}
    };
    fetchContents();
    fetchWishlist();
  }, []);

  const handleAddToWishlist = async (contentId) => {
    setFeedback(f => ({ ...f, [contentId]: 'loading' }));
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`/api/users/wishlist/${contentId}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        setWishlist(w => [...w, contentId]);
        setFeedback(f => ({ ...f, [contentId]: 'added' }));
      } else {
        setFeedback(f => ({ ...f, [contentId]: 'error' }));
      }
    } catch {
      setFeedback(f => ({ ...f, [contentId]: 'error' }));
    }
    setTimeout(() => setFeedback(f => ({ ...f, [contentId]: undefined })), 1200);
  };

  const handleRemoveFromWishlist = async (contentId) => {
    setFeedback(f => ({ ...f, [contentId]: 'removing' }));
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`/api/users/wishlist/${contentId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        setWishlist(w => w.filter(id => id !== contentId));
        setFeedback(f => ({ ...f, [contentId]: 'removed' }));
      } else {
        setFeedback(f => ({ ...f, [contentId]: 'error' }));
      }
    } catch {
      setFeedback(f => ({ ...f, [contentId]: 'error' }));
    }
    setTimeout(() => setFeedback(f => ({ ...f, [contentId]: undefined })), 1200);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className='text-red-500'>{error}</div>;

  return (
    <div className='w-11/12 flex flex-col justify-start items-center mt-4'>
        <div className='flex items-center justify-between w-full'>
            <h1 className='text-2xl text-black font-medium'>Images You’ll Love</h1>
        </div>
        <div className='mt-4 columns-3 gap-4 space-y-4'>
          {contents.map(content => {
            const isWishlisted = wishlist.includes(content._id);
            return (
            <div className='relative' key={content._id}>
                <img className='h-full w-full' src={content.thumbnail && content.thumbnail.startsWith('/uploads/') ? BACKEND_URL + content.thumbnail : content.thumbnail} alt={content.title} />
                <div className='backdrop-blur-md absolute top-0.5 right-0.5 p-5 gap-4 flex items-center justify-end w-full'>
                  {isWishlisted ? (
                    <button onClick={() => handleRemoveFromWishlist(content._id)} disabled={feedback[content._id] === 'removing'}>
                      <GoHeart className='text-5xl text-red-500 bg-slate-400 p-3 rounded-full'></GoHeart>
                      {feedback[content._id] === 'removing' && <span className='text-xs text-white ml-2'>Removing...</span>}
                    </button>
                  ) : (
                    <button onClick={() => handleAddToWishlist(content._id)} disabled={feedback[content._id] === 'loading'}>
                      <GoHeart className='text-5xl text-white bg-slate-400 p-3 rounded-full'></GoHeart>
                      {feedback[content._id] === 'loading' && <span className='text-xs text-white ml-2'>Adding...</span>}
                      {feedback[content._id] === 'added' && <span className='text-xs text-green-300 ml-2'>Added!</span>}
                      {feedback[content._id] === 'error' && <span className='text-xs text-red-300 ml-2'>Error</span>}
                    </button>
                  )}
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
          )})}
        </div>
        <button className='flex items-center justify-center bg-gray-100 px-4 py-2 rounded-3xl mt-8 font-medium'>
            <p className="text-base text-gray-600">Explore More</p>
            <RiArrowRightSLine className='text-xl font-medium ml-1 text-gray-500'></RiArrowRightSLine>
        </button>
    </div>
  )
}

export default Gallery