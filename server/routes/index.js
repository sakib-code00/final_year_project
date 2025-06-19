import { Router } from 'express';
import authRoutes from './auth.js';
import profileRoutes from './profile.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/profile', profileRoutes);

// Example route
router.get('/', (req, res) => {
  res.json({ message: 'API is working!' });
});

export default router;
