
import { connect } from "mongoose";

const connectDB = async (MONGO_URI) => {
  try {
    const conn = await connect(MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log(`MONGODB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Couldn't connect to MONGODB: ${error.message}`);
    process.exit(1);
  }
};

export { connectDB };
