import express from "express";
import dotenv from "dotenv"
import mongoose, { mongo } from "mongoose"
const app = express();
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB")
    } catch (error) {
        // initial connection, if there is a problem it will not try again
        throw error
    }
};

const PORT = process.env.PORT || 3001;

// listen on connection, if there is a problem, it will log the problem
// if disconnected, it will try again
mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})

app.listen(PORT, () => {
    connect()
    console.log(`Connected to port ${PORT}`);
});