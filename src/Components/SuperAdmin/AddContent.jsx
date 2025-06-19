import React, { useState } from 'react'
import { IoImagesOutline } from "react-icons/io5";

const AddContent = ({ onClose }) => {
  const [form, setForm] = useState({ title: '', type: 'Photo', region: '', details: '' });
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFileChange = e => setFile(e.target.files[0]);

  const handleSubmit = async e => {
    e.preventDefault();
    setError(''); setSuccess(''); setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const data = new FormData();
      Object.entries(form).forEach(([k, v]) => data.append(k, v));
      if (file) data.append('file', file);
      const res = await fetch('/api/contents', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: data
      });
      const result = await res.json();
      if (res.ok) {
        setSuccess('Content added!');
        setTimeout(() => { onClose(); }, 1000);
      } else {
        setError(result.message || 'Add failed');
      }
    } catch {
      setError('Add failed');
    }
    setLoading(false);
  };

  return (
    <div className='fixed inset-0 bg-black/30 flex items-center justify-center z-50'>
      <form onSubmit={handleSubmit} className='bg-white rounded-xl p-8 w-[500px] flex flex-col gap-4 relative'>
        <button type='button' className='absolute top-2 right-2 text-xl' onClick={onClose}>✖</button>
        <h1 className='text-2xl font-bold mb-4'>Add New Content</h1>
        <label>Title
          <input name='title' value={form.title} onChange={handleChange} className='w-full border rounded-lg p-2 mb-2' required />
        </label>
        <label>Type
          <select name='type' value={form.type} onChange={handleChange} className='w-full border rounded-lg p-2 mb-2'>
            <option value='Photo'>Photo</option>
            <option value='Video'>Video</option>
          </select>
        </label>
        <label>Region
          <input name='region' value={form.region} onChange={handleChange} className='w-full border rounded-lg p-2 mb-2' />
        </label>
        <label>Image/Video File
          <input type='file' accept='image/*,video/*' onChange={handleFileChange} className='w-full border rounded-lg p-2 mb-2' />
        </label>
        <label>Details
          <textarea name='details' value={form.details} onChange={handleChange} className='w-full border rounded-lg p-2 mb-2' />
        </label>
        {error && <p className='text-red-500'>{error}</p>}
        {success && <p className='text-green-500'>{success}</p>}
        <div className='flex justify-end gap-2'>
          <button type='button' className='border-2 border-black rounded-xl px-4 py-2' onClick={onClose}>Cancel</button>
          <button type='submit' className='text-white bg-black rounded-xl px-4 py-2' disabled={loading}>{loading ? 'Adding...' : 'Add Content'}</button>
        </div>
      </form>
    </div>
  );
}

export default AddContent