import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { PiDotsThreeOutlineLight } from "react-icons/pi";

const GeneralUsers = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('/api/users', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        if (res.ok) setUsers(data);
        else setError(data.message || 'Failed to load users');
      } catch (err) {
        setError('Failed to load users');
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) setUsers(users.filter(u => u._id !== id));
      else {
        const data = await res.json();
        alert(data.message || 'Delete failed');
      }
    } catch {
      alert('Delete failed');
    }
  };

  const handleRoleChange = async (id, newRole) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`/api/users/${id}/role`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ role: newRole })
      });
      const data = await res.json();
      if (res.ok) setUsers(users.map(u => u._id === id ? data : u));
      else alert(data.message || 'Role update failed');
    } catch {
      alert('Role update failed');
    }
  };

  const filteredUsers = users.filter(u =>
    u.name?.toLowerCase().includes(search.toLowerCase()) ||
    u.email?.toLowerCase().includes(search.toLowerCase()) ||
    u.username?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className='my-4'>
        <h1 className='text-2xl font-bold'>General Users</h1>
        <p className='text-sm'>Efficient management for everyday users</p>
      </div>
      <div className='bg-white rounded-xl p-4 flex flex-col items-center mr-4 min-h-96'>
        {/*All user Title Start */}
        <div className='flex items-start justify-between w-full mb-4'>
          <h1 className='text-xl font-bold flex items-center justify-center'>All Users</h1>
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
          </div>
        </div>
        {/*All user Title end */}
        <div className='border border-gray-100 rounded-lg w-full mx-4'>
          {/* Users table head */}
          <div className='bg-slate-50 border-b px-4 py-2 grid grid-cols-5 items-center'>
            <p className='text-base font-bold'>User Name</p>
            <p className='text-base font-bold'>Email</p>
            <p className='text-base font-bold'>Username</p>
            <p className='text-base font-bold'>Role</p>
            <p className='text-base font-bold text-end'>Action</p>
          </div>
          {loading ? (
            <div className='p-4 text-center'>Loading...</div>
          ) : error ? (
            <div className='p-4 text-red-500 text-center'>{error}</div>
          ) : filteredUsers.length === 0 ? (
            <div className='p-4 text-center'>No users found.</div>
          ) : filteredUsers.map(user => (
            <div key={user._id} className='border-b px-4 py-3 grid grid-cols-5 items-center'>
              <div className='flex items-center gap-2'>
                <FaUserCircle className='text-2xl' />
                <p className='text-sm'>{user.name}</p>
              </div>
              <p className='text-sm'>{user.email}</p>
              <p className='text-sm'>{user.username || '-'}</p>
              <select
                className='text-sm border rounded px-2 py-1'
                value={user.role}
                onChange={e => handleRoleChange(user._id, e.target.value)}
              >
                <option value="user">user</option>
                <option value="admin">admin</option>
              </select>
              <div className='flex justify-end'>
                <button onClick={() => handleDelete(user._id)} className='text-red-500 hover:underline'>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GeneralUsers