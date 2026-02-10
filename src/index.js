// require('dotenv').config({path : './.env'}) // old style
// import dotenv from "dotenv";
// dotenv.config({ path: "./.env" });
// in package-json file add (-r dotenv/config --experimental-json-modules) inside script dev to smoothly use dotenv variables
import connectDB from "./db/index.js";
connectDB();









// way 1 to connect db 
/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express"
const app = express()

(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }
    catch(error){
        console.error("ERROR: ", error)q``
        throw error
    }
})()
    */
    