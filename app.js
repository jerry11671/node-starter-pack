import dotenv from "dotenv"
import "express-async-errors"
dotenv.config()

import notFoundMiddleware from "./middlewares/not-found.js"
import { errorHandlerMiddleware } from "./middlewares/error-handler.js"
import cors from "cors"
import { StatusCodes } from "http-status-codes"

import express from "express";

const app = express()

const PORT = process.env.PORT || 3000;

app.get("/healthcheck", (req, res) => {
    return res.status(StatusCodes.OK).json({ message: "server is active", api_docs: "" });
})

// Middlewares
app.use(express.json())
app.use(cors())


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


// Server setup
app.listen(PORT, () => {
    console.log("Server is active");
});