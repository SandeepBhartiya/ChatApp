import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app=express();

dotenv.config();
const PORT=process.env.PORT||9000;


app.listen(PORT,()=>{
    console.log(`Listen At ${PORT}`)
})