import { Router } from 'express';
import auth from '../middleware/auth.js';
import admin from '../middleware/admin.js';
import { getAllUsers, deleteUser, updateUserRole } from '../controllers/userController.js';

const router = Router();

router.get('/', auth, admin, getAllUsers);
router.delete('/:id', auth, admin, deleteUser);
router.put('/:id/role', auth, admin, updateUserRole);

export default router;
