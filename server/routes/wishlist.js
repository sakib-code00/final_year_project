import { Router } from 'express';
import auth from '../middleware/auth.js';
import { addToWishlist, removeFromWishlist, getWishlist } from '../controllers/wishlistController.js';

const router = Router();

router.get('/', auth, getWishlist);
router.post('/add', auth, addToWishlist);
router.post('/remove', auth, removeFromWishlist);

export default router;
