import mongoose from "mongoose";
import chalk from "chalk";
import dotenv from "dotenv";

dotenv.config();


const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URL_DB; 

    await mongoose.connect(mongoUri); 

    console.log(chalk.green("✅ MongoDB Connected Successfully"));
  } catch (error) {
    console.error(chalk.bgRed.white(`❌ Error in connection: ${error.message}`));
    process.exit(1); // Exit process on failure
  }
};

export default connectDB;