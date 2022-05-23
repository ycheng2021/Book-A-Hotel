import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// will go to the verifyToken middleware
router.get('/checkAuthentication', verifyToken, (req, res, next) => {
    res.send("Hello, you are now logged in!");
})

router.get('/checkUser/:id', verifyUser, (req, res, next) => {
    res.send("You are now logged in and authorized to delete account!");
})

// update
router.put('/:id', updateUser);

// delete
router.delete('/:id', deleteUser);

// get
router.get('/:id', getUser);

// get all
router.get('/', getUsers);


export default router