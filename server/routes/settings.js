import { Router } from 'express';
import auth from '../middleware/auth.js';
import admin from '../middleware/admin.js';
import upload from '../middleware/upload.js';
import { getSettings, updateSettings } from '../controllers/settingsController.js';

const router = Router();

router.get('/', getSettings);
router.put('/', auth, admin, upload.single('logo'), async (req, res, next) => {
  // If a file is uploaded, set logo to the file path
  if (req.file) req.body.logo = `/uploads/${req.file.filename}`;
  next();
}, updateSettings);

export default router;
