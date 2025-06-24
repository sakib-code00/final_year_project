import User from '../models/User.js';
import Content from '../models/Content.js';

// Get all users (admin only)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Delete a user (admin only)
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Update user role (admin only)
export const updateUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    if (!['user', 'admin'].includes(role)) {
      return res.status(400).json({ message: 'Invalid role' });
    }
    const user = await User.findByIdAndUpdate(id, { role }, { new: true, runValidators: true, select: '-password' });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const addToWishlist = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { contentId } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    if (user.wishlist.includes(contentId)) {
      return res.status(409).json({ message: 'Already in wishlist' });
    }
    user.wishlist.push(contentId);
    await user.save();
    res.json({ message: 'Added to wishlist', wishlist: user.wishlist });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const removeFromWishlist = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { contentId } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    user.wishlist = user.wishlist.filter(id => id.toString() !== contentId);
    await user.save();
    res.json({ message: 'Removed from wishlist', wishlist: user.wishlist });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const getWishlist = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId).populate({
      path: 'wishlist',
      populate: { path: 'uploader', select: 'name profilePic' }
    });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user.wishlist);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const addToDownloadHistory = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { contentId } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    if (!user.downloadHistory.includes(contentId)) {
      user.downloadHistory.push(contentId);
      await user.save();
    }
    res.json({ message: 'Added to download history', downloadHistory: user.downloadHistory });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const getDownloadHistory = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId).populate({
      path: 'downloadHistory',
      populate: { path: 'uploader', select: 'name profilePic' }
    });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user.downloadHistory);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
