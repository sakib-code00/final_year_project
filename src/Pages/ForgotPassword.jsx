import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to send reset link');
      setMessage(data.message);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-20 bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded-lg mb-3"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-blue-400 text-white py-2 rounded-lg font-semibold">Send Reset Link</button>
      </form>
      {message && <p className="text-green-600 mt-3">{message}</p>}
      {error && <p className="text-red-500 mt-3">{error}</p>}
    </div>
  );
};

export default ForgotPassword;
