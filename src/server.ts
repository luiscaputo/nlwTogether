import "typeorm";
import express from "express";
import "./database";

const app = express();


app.listen(8080, () => console.log('Server is Running'));


