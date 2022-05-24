import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// will go to the verifyToken middleware
// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//     res.send("Hello, you are now logged in!");
// })

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//     res.send("You are now logged in and authorized to delete account!");
// })

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//     res.send("Welcome admin!");
// })

// update
router.put('/:id', verifyUser, updateUser);

// delete
router.delete('/:id', verifyUser, deleteUser);

// get
router.get('/:id', verifyUser, getUser);

// get all
router.get('/', verifyAdmin, getUsers);


export default router