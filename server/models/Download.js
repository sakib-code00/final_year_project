import mongoose from 'mongoose';

const downloadSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: mongoose.Schema.Types.ObjectId, ref: 'Content', required: true },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model('Download', downloadSchema);
