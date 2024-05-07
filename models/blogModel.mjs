import { executeQuery } from "../configs/database.mjs";

export const blogPostFunction = async (user_id,post_title,post_description,post_content ) => {
    
    const result = await executeQuery(
        'INSERT INTO "Post"(user_id,post_title,post_description,post_content) VALUES ($1,$2,$3,$4) RETURNING *',
        [user_id,post_title,post_description,post_content]
    );
    return result; 

};

export const blogUpdateFunction = async (post_id,post_title,post_description,post_content ) => {
      
      const result = await executeQuery(
          'UPDATE "Post" SET post_title = $1, post_description = $2, post_content = $3 WHERE post_id = $4 RETURNING *',
          [post_title,post_description,post_content,post_id]
      );
      return result; 
};
