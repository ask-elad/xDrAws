import  express from "express";
import jwt from 'jsonwebtoken';
import { middleware } from "./middleware";
import {JWT_SECRET} from '@repo/backend-common/config';
import { CreateUserSchema } from "@repo/common/types";
 

const app = express();
app.use(express.json());

app.post('/signup', (req,res)=>{
    
    const data = CreateUserSchema.safeParse(req.body);
    if(!data.success){
        message:"incorrect input"
    }

    // integrate db here
})

app.post('/signin', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const userId = 1;
    const token = jwt.sign({
        userId
    },JWT_SECRET);

    res.json({
        token
    })
})

app.post('/room',middleware,(req,res)=>{
    //db call

    res.json({
        roomId : 123
    })
})

app.listen(3000);