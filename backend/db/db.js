import mongoose from "mongoose";
import dotenv from 'dotenv'

// config
dotenv.config();

const DB = process.env.DB_URL;

const ConnectDB = async()=>{
    try {
        await mongoose.connect(DB);
        console.log("Database Connect")
    } catch (error) {
        console.log(error);
    }
}

export default ConnectDB;