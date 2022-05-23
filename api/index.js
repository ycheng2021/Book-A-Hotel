import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"

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

// middlewares
app.use(express.json());

// whenever there is request for this endpoint, it will use authRoute
app.use("/api/auth", authRoute);
// users hotels and rooms
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.listen(PORT, () => {
    connect()
    console.log(`Connected to port ${PORT}`);
});