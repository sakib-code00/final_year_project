import { Router } from 'express';
import authRoutes from './auth.js';
import profileRoutes from './profile.js';
import dashboardRoutes from './dashboard.js';
import usersRoutes from './users.js';
import contentsRoutes from './contents.js';
import settingsRoutes from './settings.js';
import wishlistRoutes from './wishlist.js';
import downloadsRoutes from './downloads.js';
import forgotPasswordRoutes from './forgotPassword.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/auth', forgotPasswordRoutes);
router.use('/profile', profileRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/users', usersRoutes);
router.use('/contents', contentsRoutes);
router.use('/settings', settingsRoutes);
router.use('/wishlist', wishlistRoutes);
router.use('/downloads', downloadsRoutes);

// Example route
router.get('/', (req, res) => {
  res.json({ message: 'API is working!' });
});

export default router;
