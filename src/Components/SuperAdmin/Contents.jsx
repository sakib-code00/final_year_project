import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";
import image7 from "../../assets/Images/image (7).png"
import AddContent from './AddContent';

const BACKEND_URL = 'http://localhost:5000';

const Contents = () => {
  const [contents, setContents] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [viewContent, setViewContent] = useState(null);

  useEffect(() => {
    fetchContents();
  }, []);

  const fetchContents = async () => {
    setLoading(true);
    setError('');
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/contents', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (res.ok) setContents(data);
      else setError(data.message || 'Failed to load contents');
    } catch (err) {
      setError('Failed to load contents');
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this content?')) return;
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`/api/contents/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) setContents(contents.filter(c => c._id !== id));
      else {
        const data = await res.json();
        alert(data.message || 'Delete failed');
      }
    } catch {
      alert('Delete failed');
    }
  };

  const filteredContents = contents.filter(c =>
    c.title?.toLowerCase().includes(search.toLowerCase()) ||
    c.region?.toLowerCase().includes(search.toLowerCase())
  );

  // Helper to get correct thumbnail URL
  const getThumbnailUrl = (content) => {
    if (content.thumbnail && content.thumbnail.startsWith('/uploads/')) {
      return BACKEND_URL + content.thumbnail;
    }
    if (content.thumbnail && content.thumbnail.startsWith('http')) {
      return content.thumbnail;
    }
    return image7;
  };

  return (
    <div>
      <div className='my-4 flex items-center justify-between mr-5'>
        <div>
          <h1 className='text-2xl font-bold'>All Contents</h1>
        </div>
        <button className='text-white bg-black rounded-lg px-4 py-2' onClick={() => setShowAdd(true)}>Add New Content</button>
      </div>
      {showAdd && <AddContent onClose={() => { setShowAdd(false); fetchContents(); }} />}
      {viewContent && (
        <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
          <div className='bg-white rounded-xl p-8 w-[500px] flex flex-col gap-4 relative'>
            <button type='button' className='absolute top-2 right-2 text-xl' onClick={() => setViewContent(null)}>✖</button>
            <h1 className='text-2xl font-bold mb-2'>{viewContent.title}</h1>
            <img src={getThumbnailUrl(viewContent)} alt='' className='w-full max-h-60 object-contain mb-2' />
            <p><b>Type:</b> {viewContent.type}</p>
            <p><b>Region:</b> {viewContent.region}</p>
            <p><b>Details:</b> {viewContent.details}</p>
            <p><b>Uploaded:</b> {new Date(viewContent.uploadDate).toLocaleString()}</p>
            <button className='mt-2 border px-4 py-2 rounded-lg' onClick={() => setViewContent(null)}>Close</button>
          </div>
        </div>
      )}
      <div className='bg-white rounded-xl p-4 flex flex-col items-center mr-4 min-h-96'>
        <div className='flex items-start justify-between w-full mb-4'>
          <h1 className='text-xl font-bold flex items-center justify-center'>Contents</h1>
          <div className='flex flex-row gap-2 items-center justify-center'>
            <div className=' flex items-center justify-center border border-gray-300 px-3 py-2 rounded-lg backdrop-blur-md'>
              <RiSearch2Line className='font-medium text-xl'></RiSearch2Line>
              <input
                className='ml-2 w-96 bg-transparent text-black border-none focus:border-none focus:outline-none'
                type="text"
                placeholder='Search'
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <button className='flex flex-row  justify-center gap-1 items-center border border-black rounded-lg px-4 py-2' disabled>
              This month
              <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
            </button>
          </div>
        </div>
        <div className='border border-gray-100 rounded-lg w-full mx-4'>
          <div className='bg-slate-50 border-b px-4 py-2 grid grid-cols-5 items-center'>
            <div className='flex items-center gap-4'>
              <p className='text-base font-bold'>Thumbnail</p>
              <p className='text-base font-bold'>Title</p>
            </div>
            <p className='text-base font-bold'>Type</p>
            <p className='text-base font-bold'>Upload Date</p>
            <p className='text-base font-bold'>Region</p>
            <p className='text-base font-bold text-end'>Action</p>
          </div>
          {loading ? (
            <div className='p-4 text-center'>Loading...</div>
          ) : error ? (
            <div className='p-4 text-red-500 text-center'>{error}</div>
          ) : filteredContents.length === 0 ? (
            <div className='p-4 text-center'>No contents found.</div>
          ) : filteredContents.map(content => (
            <div key={content._id} className='border-b px-4 py-3 grid grid-cols-5 items-center'>
              <div className='flex items-center justify-start gap-4'>
                <img className='w-14' src={getThumbnailUrl(content)} alt="" />
                <p className='text-sm'>{content.title}</p>
              </div>
              <p className='text-sm'>{content.type}</p>
              <p className='text-sm'>{new Date(content.uploadDate).toLocaleDateString()}</p>
              <p className='text-sm'>{content.region}</p>
              <div className='flex justify-end gap-2'>
                <button className='border border-black px-4 py-2 rounded-lg' onClick={() => setViewContent(content)}>View Details</button>
                <button onClick={() => handleDelete(content._id)} className='text-red-500 hover:underline ml-2'>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contents