import express from 'express';
import {blogPost,blogUpdate} from '../controllers/blogController.mjs';
const router = express.Router();


router.post('/post', (blogPost));
router.patch('/update', (blogUpdate));

export default router;

