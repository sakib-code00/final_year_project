import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  website: { type: String },
  avatar: { type: String }, // deprecated, use profilePic
  profilePic: { type: String },
  username: { type: String, unique: true, sparse: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Content' }],
  downloadHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Content' }],
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
