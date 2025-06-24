import User from '../models/User.js';
import Content from '../models/Content.js';

// Add to wishlist
export const addToWishlist = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { contentId } = req.body;
    if (!contentId) return res.status(400).json({ message: 'Content ID required' });
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    if (user.wishlist.includes(contentId)) {
      return res.status(409).json({ message: 'Already in wishlist' });
    }
    user.wishlist.push(contentId);
    await user.save();
    res.json({ message: 'Added to wishlist' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Remove from wishlist
export const removeFromWishlist = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { contentId } = req.body;
    if (!contentId) return res.status(400).json({ message: 'Content ID required' });
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    user.wishlist = user.wishlist.filter(id => id.toString() !== contentId);
    await user.save();
    res.json({ message: 'Removed from wishlist' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get wishlist
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
