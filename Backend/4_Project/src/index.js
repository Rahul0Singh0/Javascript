require('dotenv').config({path: './env'});
// import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

import connectDB from "./db/index.js";

// 2. connect db
// dotenv.config({
//     path: './env'
// })
// connectDB();

// 1. connect db
// ()() is immediate function to execute immediately

import express from "express";
const app = express();
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", () => {
            console.log("ERROR: ", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log("ERROR: ",error);
        throw error;
    }
} )()
