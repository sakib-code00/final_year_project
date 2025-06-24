import React, { useEffect, useState } from 'react'
const BACKEND_URL = 'http://localhost:5000';

const DownloadHistory = () => {
  const [downloads, setDownloads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDownloads = async () => {
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('/api/downloads', { headers: { Authorization: `Bearer ${token}` } });
        const data = await res.json();
        if (res.ok) setDownloads(data);
        else setError(data.message || 'Failed to load download history');
      } catch {
        setError('Failed to load download history');
      }
      setLoading(false);
    };
    fetchDownloads();
  }, []);

  return (
    <div>
      <div className='bg-white p-6 rounded-xl'>
        <div className='flex items-center justify-between mb-6'>
          <h1 className='text-2xl font-bold text-gray-700'>All Downloads</h1>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='grid grid-cols-4 items-center justify-between gap-6'>
            <div className='flex items-center justify-start gap-1'>File Name</div>
            <div className='flex items-center justify-start gap-1'>Uploader</div>
            <div className='flex items-center justify-start gap-1'>Date</div>
          </div>
          {loading ? <div>Loading...</div> : error ? <div className='text-red-500'>{error}</div> : downloads.length === 0 ? <div>No downloads yet.</div> : downloads.map((item, idx) => (
            <div key={item._id || idx} className='grid grid-cols-4 items-center justify-between gap-6 bg-gray-50 p-4 rounded-xl'>
              <div className='flex items-center justify-start gap-2'>
                <img className='w-14' src={item.content?.thumbnail && item.content.thumbnail.startsWith('/uploads/') ? BACKEND_URL + item.content.thumbnail : item.content?.thumbnail} alt="" />
                <p className='text-sm font-bold text-gray-700'>{item.content?.title || 'Untitled'}</p>
              </div>
              <div>
                <p className='text-sm font-normal text-gray-400'>by @{item.content?.uploader?.name || 'unknown'}</p>
              </div>
              <div>
                <p className='text-sm font-normal text-gray-400'>{item.date ? new Date(item.date).toLocaleDateString() : ''}</p>
              </div>
              <div className='flex items-center gap-2  justify-end'>
                <a href={item.content?.image && item.content.image.startsWith('/uploads/') ? BACKEND_URL + item.content.image : item.content?.image} download target="_blank" rel="noopener noreferrer">
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadHistory;