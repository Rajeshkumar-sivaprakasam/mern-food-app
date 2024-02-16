import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

//mongoose connect

mongoose.connect(process.env.MONGO_URL as string).then(()=>{
    console.log("Connected DB!")
})

const app = express();
app.use(express.json());

app.get('/test',async(req:Request,res:Response)=>{
    res.json({
        message:'Running!'
    })
})

app.listen(7000,()=>{
    console.log("Server Started on localhost:7000")
})