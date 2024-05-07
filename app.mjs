import express from 'express';
import authRoute from './routes/authRoute.mjs';
import blogRoute from './routes/blogRoute.mjs';
import { authenticateToken } from './middleware/authenticate.mjs';
import { useCors } from './configs/cors.mjs';

const app = express();

app.use(express.json());
app.use(useCors);
app.get('/', (req, res) => {
res.send('Hello World');
});

// auth
app.use('/auth', authRoute);


app.use(authenticateToken);
app.use('/blog', blogRoute);


app.listen(process.env.PORT, (req,res) => {
  console.log('Server is running on port 3000');
});