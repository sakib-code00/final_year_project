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
  const [downloadFeedback, setDownloadFeedback] = useState({});

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

  const handleDownload = async (content) => {
    window.open(content, '_blank', 'noopener,noreferrer,width=800,height=600');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className='text-red-500'>{error}</div>;

  return (
    <div className="w-11/12 mx-auto mt-20">
      {loading ? <div>Loading...</div> : error ? <div className='text-red-500'>{error}</div> : (
        <div className="columns-3 gap-4 space-y-4">
          {contents.map(content => (
            <div className="relative" key={content._id}>
              <img className="h-full w-full" src={content.thumbnail && content.thumbnail.startsWith('/uploads/') ? BACKEND_URL + content.thumbnail : content.thumbnail} alt={content.title} />
              <div className="backdrop-blur-md absolute top-0.5 right-0.5 p-5 gap-4 flex items-center justify-end w-full">
                {wishlist.includes(content._id) ? (
                  <button onClick={() => handleRemoveFromWishlist(content._id)} disabled={feedback[content._id] === 'removing'}>
                    <GoHeart className="text-5xl text-red-500 bg-slate-400 p-3 rounded-full" />
                    {feedback[content._id] === 'removing' && <span>Removing...</span>}
                  </button>
                ) : (
                  <button onClick={() => handleAddToWishlist(content._id)} disabled={feedback[content._id] === 'loading'}>
                    <GoHeart className="text-5xl text-white bg-slate-400 p-3 rounded-full" />
                    {feedback[content._id] === 'loading' && <span>Adding...</span>}
                  </button>
                )}
              </div>
              <div className="backdrop-blur-md absolute bottom-0 flex items-center justify-between w-full p-5">
                <div className="flex items-center gap-1">
                  <img src={content.uploader?.profilePic ? (content.uploader.profilePic.startsWith('/uploads/') ? BACKEND_URL + content.uploader.profilePic : content.uploader.profilePic) : '/default-user.png'} alt="" className="w-8 h-8 rounded-full object-cover" />
                  <p className="text-white text-xl font-medium">{content.uploader?.name || 'Unknown'}</p>
                </div>
                <button
                  className='cursor-pointer'
                  onClick={() => handleDownload(content.thumbnail && content.thumbnail.startsWith('/uploads/') ? BACKEND_URL + content.thumbnail : content.thumbnail)}
                  disabled={downloadFeedback[content._id] === 'downloading'}
                  style={{ background: 'none', border: 'none', padding: 0 }}
                  download={content.title || 'image'}
                  target='_blank'
                >
                  <GoDownload className="text-5xl text-white bg-slate-400 p-2 rounded-full" />
                  {downloadFeedback[content._id] === 'downloading' && <span>Downloading...</span>}
                  {downloadFeedback[content._id] === 'done' && <span>Done!</span>}
                  {downloadFeedback[content._id] === 'error' && <span>Error!</span>}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Gallery