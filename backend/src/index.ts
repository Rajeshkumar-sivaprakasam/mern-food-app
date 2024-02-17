import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import myUserRoute from "./routes/user.route";

//mongoose connect

mongoose.connect(process.env.MONGO_URL as string).then(()=>{
    console.log("Connected DB!")
})

const app = express();
app.use(express.json());

app.use("/api/my/user", myUserRoute);

app.listen(7000,()=>{
    console.log("Server Started on localhost:7000")
})