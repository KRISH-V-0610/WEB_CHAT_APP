//External Modules
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import bodyParser from 'body-parser';

//Connect to MongoDB
import { connectDB } from './lib/db.js';

//Route imports
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';

dotenv.config();
const app = express();


//Data parser middlewares
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true , limit: "10mb" }));
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true, // Enable Set-Cookie headers.
}))



//Router Middlewares  
app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server is running on port: http://localhost:${PORT}`);
  connectDB();
});