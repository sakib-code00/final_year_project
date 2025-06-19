import React, { useEffect, useState } from 'react'
import image9 from '../MainContent/Wishlist/images/image 9.png'
import image3 from '../MainContent/Wishlist/images/image 3 (1).png'
import { CiLocationOn } from "react-icons/ci";
import { TbEdit } from "react-icons/tb";
import { PiFileArrowDown } from "react-icons/pi";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', website: '', username: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('/api/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        if (res.ok) {
          setProfile(data);
          setForm({
            name: data.name || '',
            email: data.email || '',
            phone: data.phone || '',
            website: data.website || '',
            username: data.username || ''
          });
        } else {
          setError(data.message || 'Failed to load profile');
        }
      } catch (err) {
        setError('Failed to load profile');
      }
    };
    fetchProfile();
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = async e => {
    e.preventDefault();
    setError(''); setSuccess('');
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setProfile(data);
        setEdit(false);
        setSuccess('Profile updated!');
      } else {
        setError(data.message || 'Update failed');
      }
    } catch (err) {
      setError('Update failed');
    }
  };

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <div>
        {/*------Profile Head------- */}
        <div className='bg-white rounded-xl p-6'>
          <div>
            {/*------ user name and image------- */}
            <div>
              <img className='rounded-xl' src={image9} alt="" />
            </div>
            <div className='relative bottom-20 left-10'>
              <div className='flex items-end justify-between w-11/12'>
                <div className='flex items-end justify-center gap-2'>
                  <img className='bg-gray-400 border rounded-full p-1' src={image3} alt="" />
                  <div>
                    <h1>{profile.name}</h1>
                    <p>@{profile.username || profile.email?.split('@')[0]}</p>
                  </div>
                </div>
                <button className='flex items-center justify-center gap-1 bg-gray-200 py-2 px-3 rounded-xl' onClick={() => setEdit(true)}>
                  <TbEdit />
                  <p>Edit profile</p>
                </button>
              </div>
            </div>
            {/*------ user name and image end here------- */}
          </div>
        </div>
        {/*------Profile Head------- */}
        {/*------Profile Main Content------- */}
        <div className='mt-6 flex items-start justify-between gap-6'>
          {/*------Personal Information------- */}
          <div className='bg-white p-4 rounded-xl w-full'>
            <div className='flex items-center justify-between'>
              <h1>Personal information</h1>
              <TbEdit onClick={() => setEdit(true)} style={{ cursor: 'pointer' }} />
            </div>
            {edit ? (
              <form onSubmit={handleUpdate} className='space-y-4'>
                <div>
                  <p>Name:</p>
                  <input name='name' value={form.name} onChange={handleChange} className='w-full px-3 py-2 border rounded-lg focus:outline-none' />
                </div>
                <div>
                  <p>Username:</p>
                  <input name='username' value={form.username} onChange={handleChange} className='w-full px-3 py-2 border rounded-lg focus:outline-none' />
                </div>
                <div>
                  <p>Email:</p>
                  <input name='email' value={form.email} onChange={handleChange} className='w-full px-3 py-2 border rounded-lg focus:outline-none' />
                </div>
                <div>
                  <p>Phone Number:</p>
                  <input name='phone' value={form.phone} onChange={handleChange} className='w-full px-3 py-2 border rounded-lg focus:outline-none' />
                </div>
                <div>
                  <p>Website:</p>
                  <input name='website' value={form.website} onChange={handleChange} className='w-full px-3 py-2 border rounded-lg focus:outline-none' />
                </div>
                {error && <p className='text-red-500'>{error}</p>}
                {success && <p className='text-green-500'>{success}</p>}
                <button type='submit' className='bg-blue-400 text-white rounded-xl px-4 py-2'>Save</button>
                <button type='button' className='ml-2 bg-gray-300 rounded-xl px-4 py-2' onClick={() => setEdit(false)}>Cancel</button>
              </form>
            ) : (
              <>
                <div>
                  <p>Username:</p>
                  <p>{profile.username || '-'}</p>
                  <hr className='border mt-4 mb-4' />
                </div>
                <div>
                  <p>Email:</p>
                  <p>{profile.email}</p>
                  <hr className='border mt-4 mb-4' />
                </div>
                <div>
                  <p>Phone Number:</p>
                  <p>{profile.phone || '-'}</p>
                  <hr className='border mt-4 mb-4' />
                </div>
                <div>
                  <p>Website:</p>
                  <p>{profile.website || '-'}</p>
                  <hr className='border mt-4 mb-4' />
                </div>
              </>
            )}
          </div>
          {/*------Personal Information End------- */}
        </div>
        {/*------Profile Main content End------- */}
      </div>
    </div>
  )
}

export default Profile