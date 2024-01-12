import express from 'express';
import dotenv from 'dotenv';
import ConnectDB from './db/db.js';
import User from './model/UserModel.js';
import UserRouter from './routes/userRouter.js';
import cors from 'cors'

dotenv.config();

const app = express();

// middleware
app.use(express.json())
app.use(cors())
app.use(UserRouter)

// DB Call
ConnectDB();



app.get("/", async (req, res)=>{

    res.send({
        message: "API Running"
    })
})

// PORT
// const port = process.env.PORT;

app.listen(5000,()=>{
    console.log(`Server Running on 5000 Port`)
})

