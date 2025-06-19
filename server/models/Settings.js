import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema({
  siteTitle: { type: String, default: 'My App' },
  logo: { type: String }, // URL or /uploads path
}, { timestamps: true });

export default mongoose.model('Settings', settingsSchema);
