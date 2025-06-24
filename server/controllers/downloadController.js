import Download from '../models/Download.js';
import Content from '../models/Content.js';

export const addDownload = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { contentId } = req.params;
    const content = await Content.findById(contentId);
    if (!content) return res.status(404).json({ message: 'Content not found' });
    await Download.create({ user: userId, content: contentId });
    res.json({ message: 'Download recorded' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const getDownloads = async (req, res) => {
  try {
    const userId = req.user.userId;
    const downloads = await Download.find({ user: userId })
      .sort({ date: -1 })
      .populate({ path: 'content', populate: { path: 'uploader', select: 'name profilePic' } });
    res.json(downloads);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
