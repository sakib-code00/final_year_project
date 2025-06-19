import React, { useEffect, useState } from 'react'
import { IoImageOutline } from "react-icons/io5";
import logoFallback from "../../assets/Images/Bpicsblack.png"

const BACKEND_URL = 'http://localhost:5000';

const GeneralSettings = () => {
  const [siteTitle, setSiteTitle] = useState('');
  const [logo, setLogo] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/settings');
      const data = await res.json();
      if (res.ok) {
        setSiteTitle(data.siteTitle || '');
        setLogo(data.logo || '');
      } else {
        setError(data.message || 'Failed to load settings');
      }
    } catch {
      setError('Failed to load settings');
    }
    setLoading(false);
  };

  const handleLogoChange = e => setFile(e.target.files[0]);

  const handleSubmit = async e => {
    e.preventDefault();
    setError(''); setSuccess('');
    try {
      const token = localStorage.getItem('token');
      const data = new FormData();
      data.append('siteTitle', siteTitle);
      if (file) data.append('logo', file);
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
        body: data
      });
      const result = await res.json();
      if (res.ok) {
        setSuccess('Settings updated!');
        setLogo(result.logo || '');
      } else {
        setError(result.message || 'Update failed');
      }
    } catch {
      setError('Update failed');
    }
  };

  const getLogoUrl = () => {
    if (logo && logo.startsWith('/uploads/')) return BACKEND_URL + logo;
    if (logo && logo.startsWith('http')) return logo;
    return logoFallback;
  };

  return (
    <div>
      <div className='my-4'>
        <h1 className='text-2xl font-bold'>General Settings</h1>
        <p className='text-sm'>Platform Configuration & System-Wide Controls</p>
      </div>
      <div className='bg-white rounded-xl p-4 flex flex-col items-center mr-4 min-h-96 justify-center'>
        <form onSubmit={handleSubmit} className='w-full max-w-lg'>
          <h1 className='text-xl font-bold mb-3'>Site Identity</h1>
          <div className='mb-3'>
            <p className='text-sm mb-1'>Site Title</p>
            <input
              className='w-full border border-gray-300 px-4 py-2 rounded-lg mb-2'
              type='text'
              value={siteTitle}
              onChange={e => setSiteTitle(e.target.value)}
              required
            />
          </div>
          <div className='mb-3'>
            <p className='text-sm mb-1'>Upload Logo</p>
            <div className='flex items-center gap-3'>
              <div className='bg-gray-200 rounded-lg p-2 w-16 h-16 flex items-center justify-center'>
                <img className='max-h-12 max-w-12' src={getLogoUrl()} alt='' />
              </div>
              <input type='file' accept='image/*' onChange={handleLogoChange} />
            </div>
          </div>
          {error && <p className='text-red-500'>{error}</p>}
          {success && <p className='text-green-500'>{success}</p>}
          <button type='submit' className='mt-4 bg-black text-white rounded-lg px-4 py-2'>Save Settings</button>
        </form>
      </div>
    </div>
  );
}

export default GeneralSettings