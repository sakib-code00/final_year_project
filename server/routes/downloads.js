import { Router } from 'express';
import auth from '../middleware/auth.js';
import { addDownload, getDownloads } from '../controllers/downloadController.js';

const router = Router();

router.post('/:contentId', auth, addDownload);
router.get('/', auth, getDownloads);

export default router;
