import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToPostgres } from './config/postgres';
import { connectToMongoDB } from './config/mongodb';
import routes from './routes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectToPostgres(); 
    await connectToMongoDB(); 
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1); 
  }
};

startServer();
