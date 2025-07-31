import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

const mongo_url = process.env.MONGO_URI;

mongoose.connect(mongo_url)
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ DB connection failed:", err.message));
