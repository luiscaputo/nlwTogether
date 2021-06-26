import "typeorm";
import express, { NextFunction, Request, Response } from "express";
import "./database";
import { router } from "./routes";

const app = express();
app.use(express.json())

app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error){
        response.status(400).json({success: false, message: "ERROR try again"})
    }else
        response.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
})

app.listen(8080, () => console.log('Server is Running'));


