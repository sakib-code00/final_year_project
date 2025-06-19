import React, { useEffect, useState } from 'react'
import { useSettings } from '../contexts/SettingsContext';
import logoFallback from '../assets/Images/logo1.png'
import bpic from '../assets/Images/Bpics.png'
import { Link, useNavigate } from 'react-router-dom'

const BACKEND_URL = 'http://localhost:5000';

const NavBar = () => {
  const navigate = useNavigate();
  const gotoHome = () => navigate("/home");
  const { logo, siteTitle } = useSettings();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  const getLogoUrl = () => {
    if (logo && logo.startsWith('/uploads/')) return BACKEND_URL + logo;
    if (logo && logo.startsWith('http')) return logo;
    return logoFallback;
  };

  return (
    <div className='w-full'>
      <div className="navbar fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md text-white shadow-md">
        <div className="flex-1">
          <a onClick={gotoHome} className="btn btn-ghost text-xl">
            <div className='flex items-center justify-center'>
              <img src={getLogoUrl()} alt="logo" className='h-8 w-8 object-contain'/>
              <span className='ml-2 font-bold'>{siteTitle || 'Site Title'}</span>
            </div>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {user ? (
              <>
                <li><Link to="/user">Hi, {user.name}</Link></li>
                <li><button onClick={handleLogout} className='cursor-pointer'>Logout</button></li>
              </>
            ) : (
              <>
                <li><Link to="/login" className='cursor-pointer'>Login</Link></li>
                <li><Link to="/signup" className='cursor-pointer'>Join Now</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar