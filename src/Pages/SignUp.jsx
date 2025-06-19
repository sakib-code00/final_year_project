import React, { useState } from 'react'
import Frame1 from '../assets/Images/Frame 232 (1).png'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password })
            });
            let data = {};
            const contentType = res.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                data = await res.json();
            }
            if (!res.ok) throw new Error(data.message || "Signup failed");
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/user");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className='w-7/12 flex flex-col gap-3 bg-white items-center justify-center rounded-xl mx-auto p-4'>
            <div className='flex items-center relative'>
                <div className='w-6/12'>
                    <img className='w-full h-full' src={Frame1} alt="" />
                </div>
                <div className='pl-8 flex flex-col items-start gap-5 w-6/12'>
                    <div>
                        <h1 className='text-3xl font-bold'>Create an account</h1>
                        <p className='text-bse font-normal text-gray-500 mt-2'>Please enter your details now</p>
                    </div>
                    <form className='w-full' onSubmit={handleSubmit}>
                        <div className='flex justify-between items-start gap-4'>
                            <div className='w-full mb-3'>
                                <p className='mb-1'>Name</p>
                                <input className=' w-full px-3 py-2 border rounded-lg focus:outline-none' type="text" placeholder='Name' value={name} onChange={e => setName(e.target.value)} required />
                            </div>
                        </div>
                        <p className='mb-1 w-full'>Email</p>
                        <input className=' w-full px-3 py-2 border rounded-lg focus:outline-none' type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required />
                        <p className='mb-1 mt-3'>Password</p>
                        <input className=' w-full px-3 py-2 border rounded-lg focus:outline-none' type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} required />
                        {error && <p className='text-red-500 mt-2'>{error}</p>}
                        <button type="submit" className='text-center w-full bg-blue-400 text-white text-lg font-semibold rounded-2xl py-3 mt-4'>Create Account</button>
                    </form>
                    <p className=''>Already have an account? <Link to="/login" className='text-blue-400 font-semibold'>Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp