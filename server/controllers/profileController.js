import User from '../models/User.js';

// Get profile info
export const getProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Update profile info
export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { name, email, phone, website, username } = req.body;
    // Check if username is being updated and is unique
    if (username) {
      const existing = await User.findOne({ username, _id: { $ne: userId } });
      if (existing) {
        return res.status(409).json({ message: 'Username already taken' });
      }
    }
    const user = await User.findByIdAndUpdate(
      userId,
      { name, email, phone, website, username },
      { new: true, runValidators: true, select: '-password' }
    );
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
