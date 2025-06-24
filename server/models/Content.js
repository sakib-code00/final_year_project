import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['Photo', 'Video'], required: true },
  region: { type: String },
  thumbnail: { type: String },
  image: { type: String }, // Add this field for downloadable image path
  uploadDate: { type: Date, default: Date.now },
  details: { type: String },
  uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.model('Content', contentSchema);
