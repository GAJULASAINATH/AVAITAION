//IMPORTING MODULES(files)
import express from "express";
import "dotenv/config.js";
import { connectDB } from "../src/lib/db.js";
import cookieParser from "cookie-parser";
import authRoutes from '../src/routes/authRoutes.js';

//app initialize 
const app = express();
const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cookieParser());

//routes
app.use('/auth',authRoutes)

//server setup 
app.listen(PORT, () => {
  console.log(`Node Server: http://localhost:${PORT}`);
  connectDB();
});

//
app.get('/',(req,res)=>{
  res.status(200).json({message:"BACKEND ENVIRONMENT OF AVAITAION"})
})