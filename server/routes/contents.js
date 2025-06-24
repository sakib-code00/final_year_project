import { Router } from 'express';
import auth from '../middleware/auth.js';
import admin from '../middleware/admin.js';
import upload from '../middleware/upload.js';
import { getAllContents, addContent, deleteContent, getPublicContents } from '../controllers/contentController.js';

const router = Router();

router.get('/', auth, admin, getAllContents);
router.get('/public', getPublicContents);
router.post('/', auth, admin, upload.single('file'), addContent);
router.delete('/:id', auth, admin, deleteContent);

export default router;
