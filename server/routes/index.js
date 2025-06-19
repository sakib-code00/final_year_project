import { Router } from 'express';
import authRoutes from './auth.js';
import profileRoutes from './profile.js';
import dashboardRoutes from './dashboard.js';
import usersRoutes from './users.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/profile', profileRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/users', usersRoutes);

// Example route
router.get('/', (req, res) => {
  res.json({ message: 'API is working!' });
});

export default router;
