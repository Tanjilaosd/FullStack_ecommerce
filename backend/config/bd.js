import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";
const MongoUrl = process.env.MONGO_URL

const connectDb = async (options = {}) => {
    try {
        await mongoose.connect(MongoUrl,options)
        console.log("connection mongodb successfully")
    } catch (error) {
        console.log("mongodb is not connected", error.message)
        
    }
}

export default connectDb