import { Router } from 'express';
import authRoutes from './auth.js';
import profileRoutes from './profile.js';
import dashboardRoutes from './dashboard.js';
import usersRoutes from './users.js';
import contentsRoutes from './contents.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/profile', profileRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/users', usersRoutes);
router.use('/contents', contentsRoutes);

// Example route
router.get('/', (req, res) => {
  res.json({ message: 'API is working!' });
});

export default router;
