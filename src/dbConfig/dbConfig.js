import mongoose from 'mongoose';

export async function connectDB() {
  try {
    mongoose.connect(process.env.MONGODB_URI)
    const connection = mongoose.connection;
    connection.on('connected', () => {
      console.log('MongoDB Connected');
    })

    connection.on('error', (err) => {
      console.log(`MongoDB connection error: ${err}`);
      process.exit(1)
    })

    connection.on('disconnected', () => {
      console.log('MongoDB disconnected')
      process.exit(0)
    }) //not necessary

  } catch (error) {
    console.log(error);
  }
}

