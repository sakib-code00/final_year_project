import { Router } from 'express';
import auth from '../middleware/auth.js';
import admin from '../middleware/admin.js';
import { getAllUsers, deleteUser, updateUserRole, addToWishlist, removeFromWishlist, getWishlist, addToDownloadHistory, getDownloadHistory } from '../controllers/userController.js';

const router = Router();

router.get('/', auth, admin, getAllUsers);
router.delete('/:id', auth, admin, deleteUser);
router.put('/:id/role', auth, admin, updateUserRole);
router.post('/wishlist/:contentId', auth, addToWishlist);
router.delete('/wishlist/:contentId', auth, removeFromWishlist);
router.get('/wishlist', auth, getWishlist);
router.post('/download/:contentId', auth, addToDownloadHistory);
router.get('/download-history', auth, getDownloadHistory);

export default router;
