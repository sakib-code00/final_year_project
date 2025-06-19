import Content from '../models/Content.js';
import path from 'path';

export const getAllContents = async (req, res) => {
  try {
    const contents = await Content.find().populate('uploader', 'name email');
    res.json(contents);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const addContent = async (req, res) => {
  try {
    const { title, type, region, details } = req.body;
    const uploader = req.user.userId;
    let thumbnail = req.body.thumbnail;
    if (req.file) {
      thumbnail = `/uploads/${req.file.filename}`;
    }
    const content = new Content({ title, type, region, thumbnail, details, uploader });
    await content.save();
    res.status(201).json(content);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const deleteContent = async (req, res) => {
  try {
    const { id } = req.params;
    const content = await Content.findByIdAndDelete(id);
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.json({ message: 'Content deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
