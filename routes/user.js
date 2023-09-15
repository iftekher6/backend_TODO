import express from 'express';
import { User } from '../models/user.js'; 
import { getMyProfile, logiNew, logout, registerNew} from '../contorllers/user.js';
import { isAuthenticated } from '../middlewars/auth.js';

const router = express.Router();


router.post('/loginn', logiNew);
router.get('/logout', logout);

router.post('/new', registerNew);

router.get('/me', isAuthenticated,getMyProfile);

export default router;

