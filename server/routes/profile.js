import { Router } from 'express';
import { getProfile, updateProfile } from '../controllers/profileController.js';
import auth from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = Router();

router.get('/', auth, getProfile);
router.put('/', auth, upload.single('profilePic'), updateProfile);

export default router;
