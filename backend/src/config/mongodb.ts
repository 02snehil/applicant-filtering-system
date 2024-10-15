import mongoose from 'mongoose';

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Unable to connect to MongoDB:', error);
  }
};
