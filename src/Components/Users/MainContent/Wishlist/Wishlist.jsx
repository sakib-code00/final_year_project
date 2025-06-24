import React, { useEffect, useState } from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { GoShareAndroid } from "react-icons/go";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
const BACKEND_URL = 'http://localhost:5000';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [feedback, setFeedback] = useState({});

  useEffect(() => {
    const fetchWishlist = async () => {
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('/api/users/wishlist', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        if (res.ok) setWishlist(data);
        else setError(data.message || 'Failed to load wishlist');
      } catch {
        setError('Failed to load wishlist');
      }
      setLoading(false);
    };
    fetchWishlist();
  }, []);

  const handleRemoveFromWishlist = async (contentId) => {
    setFeedback(f => ({ ...f, [contentId]: 'removing' }));
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`/api/users/wishlist/${contentId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        setWishlist(w => w.filter(item => item._id !== contentId));
        setFeedback(f => ({ ...f, [contentId]: 'removed' }));
      } else {
        setFeedback(f => ({ ...f, [contentId]: 'error' }));
      }
    } catch {
      setFeedback(f => ({ ...f, [contentId]: 'error' }));
    }
    setTimeout(() => setFeedback(f => ({ ...f, [contentId]: undefined })), 1200);
  };

  return (
    <div>
        <div className='bg-white p-6 rounded-xl'>
            {/*--------Wish list title bar-------- */}
            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-2xl font-bold text-gray-700'>Wish List</h1>
                {/* <div className='flex items-center gap-4'>
                    <RiDeleteBinLine className='text-gray-700 font-semibold text-2xl'></RiDeleteBinLine>
                    <GoShareAndroid className='text-gray-700 font-semibold text-2xl'></GoShareAndroid>
                    <PiDotsThreeOutlineLight className='text-gray-700 font-semibold text-2xl'></PiDotsThreeOutlineLight>
                </div> */}
            </div>
            {/*--------Wish list images-------- */}
            <div className='columns-4 gap-4 space-y-4'>
              {loading ? <div>Loading...</div> : error ? <div className='text-red-500'>{error}</div> : wishlist.length === 0 ? <div>No items in wishlist.</div> : wishlist.map(item => (
                <div key={item._id} className='relative'>
                  <img src={item.thumbnail && item.thumbnail.startsWith('/uploads/') ? BACKEND_URL + item.thumbnail : item.thumbnail} alt={item.title} />
                  <button onClick={() => handleRemoveFromWishlist(item._id)} disabled={feedback[item._id] === 'removing'} className='absolute top-2 right-2 bg-white rounded-full p-1'>
                    {feedback[item._id] === 'removing' ? 'Removing...' : 'Remove'}
                  </button>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Wishlist