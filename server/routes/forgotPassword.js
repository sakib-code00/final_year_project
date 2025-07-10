import express from 'express';
import User from '../models/User.js';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

const router = express.Router();

// POST /api/auth/forgot-password
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'Email is required' });
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: 'User not found' });
  // Generate token
  const token = crypto.randomBytes(20).toString('hex');
  user.resetPasswordToken = token;
  user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
  await user.save();
  // Send email
  const resetUrl = `http://localhost:5173/reset-password/${token}`;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'imdshakil24@gmail.com',
      pass: 'ssml jmfd otpl uzdr',
    },
  });
  const mailOptions = {
    from: 'imdshakil24@gmail.com',
    to: email,
    subject: 'Password Reset',
    text: `You requested a password reset. Click the link to reset: ${resetUrl}`,
  };
  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Password reset link sent to your email.' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send email', error: err.message });
  }
});

// POST /api/auth/reset-password/:token
router.post('/reset-password/:token', async (req, res) => {
  const { password } = req.body;
  const user = await User.findOne({
    resetPasswordToken: req.params.token,
    resetPasswordExpires: { $gt: Date.now() }
  });
  if (!user) return res.status(400).json({ message: 'Invalid or expired token' });
  user.password = password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save();
  res.json({ message: 'Password has been reset' });
});

export default router;
