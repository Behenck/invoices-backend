import express, { NextFunction, Request, Response } from 'express';

import "express-async-errors";

import createConnection from "@shared/infra/typeorm";

createConnection();

const app = express();

app.use(express.json());
app.get("/teste", () => {
    console.log("teste");
});

export { app }