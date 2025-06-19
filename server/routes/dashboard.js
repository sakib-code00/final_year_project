import { Router } from 'express';
import auth from '../middleware/auth.js';
import admin from '../middleware/admin.js';

const router = Router();

router.get('/', auth, admin, (req, res) => {
  res.json({ message: 'Welcome to the admin dashboard!' });
});

export default router;
