import { blogPostFunction, blogUpdateFunction } from "../models/blogModel.mjs";
import { executeQuery } from "../configs/database.mjs";

export const blogPost = async (req, res) => {
    const { user_id, post_title, post_description, post_content } = req.body;
    if (!user_id || !post_title || !post_description || !post_content) {
        res.status(400).json({ message: 'All fields are required' });
        return;
    }
    try {
       const post = await blogPostFunction(user_id, post_title, post_description, post_content);
      res.status(201).json({data : post});
    } catch (error) {
      console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const blogUpdate = async (req, res) => {
    const { post_id, post_title, post_description, post_content } = req.body;
    if (!post_id || !post_title || !post_description || !post_content) {
        res.status(400).json({ message: 'All fields are required' });
        return;
    }
    try {
       const post = await blogUpdateFunction(post_id , post_title, post_description, post_content);
      res.status(201).json({data : post});
    } catch (error) {
      console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
export const getBlog = async (req, res) => {
  try {
    const response = await executeQuery('SELECT * FROM "Post"');
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json({ error: err.message }); 
  }

}