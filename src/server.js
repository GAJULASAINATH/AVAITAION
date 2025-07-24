//IMPORTING MODULES(files)
import express from "express";
import "dotenv/config.js";
import { connectDB } from "../src/lib/db.js";
import cookieParser from "cookie-parser";
import authRoutes from '../src/routes/authRoutes.js';
import searchRoutes from '../src/routes/searchRoutes.js';
import bookingRoutes from '../src/routes/bookingRoutes.js';
import bookingApprovalRoutes from '../src/routes/bookingApprovalRoutes.js';

//APP INSTANTIATION
const app = express();
const PORT = process.env.PORT;

//MIDDLEWARES
app.use(express.json());
app.use(cookieParser());

//ROUTES
app.use('/auth',authRoutes)
app.use('/api', searchRoutes);
app.use('/api', bookingRoutes);
app.use('/api', bookingApprovalRoutes);

//SERVER SETUP 
app.listen(PORT, () => {
  console.log(`Node Server: http://localhost:${PORT}`);
  connectDB();
});

//HOME
app.get('/',(req,res)=>{
  res.status(200).json({message:"BACKEND ENVIRONMENT OF AVAITAION"})
})