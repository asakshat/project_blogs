import express from 'express';
import {blogPost,blogUpdate,getBlog} from '../controllers/blogController.mjs';
const router = express.Router();


router.post('/post', (blogPost));
router.patch('/update', (blogUpdate));
router.get('/getposts', (getBlog));

export default router;

