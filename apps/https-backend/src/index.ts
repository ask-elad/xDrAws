import  express from "express";
import jwt from 'jsonwebtoken';
import { middleware } from "./middleware";
import {JWT_SECRET} from '@repo/backend-common/config';
import { CreateUserSchema } from "@repo/common/types";
import bcrypt from 'bcrypt';
import { prismaClient } from '@repo/db/client'
 

const app = express();
app.use(express.json());

app.post("/signup", (req, res) => {

    const parsedData = CreateUserSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.json({
        message: "Incorrect inputs"
        });
        return;
    }

    prismaClient.user.create({
        data: {
        email: parsedData.data?.email,
        password: parsedData.data.password,
        name: parsedData.data.name
        }
    });

    res.json({
        userId: "123"
    });
});


app.post('/room',middleware,(req,res)=>{
    //db call

    res.json({
        roomId : 123
    })
})

app.listen(3000);