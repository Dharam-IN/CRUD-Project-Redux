import express from 'express';
import mongoose from 'mongoose';
import User from '../model/UserModel.js';

const router = express.Router();

// User Add
router.post("/createuser", async(req, res)=>{
    const {name, email, age} = req.body;

    try {
        const userAdded = User.create({
            name: name,
            email: email,
            age: age
        })

        res.status(201).json(userAdded);

    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message})
    }

})


// All User
router.get("/showall", async(req, res)=>{
    try {
        const ShowAll = await User.find();
        res.status(200).json(ShowAll)
    } catch (error) {
        console.log(error)
    }
})

// get single user
router.get("/:id", async(req, res)=>{
    const {id} = req.params;
    try {
        const SingleUser = await User.findById({_id: id})
        res.status(200).json(SingleUser)
    } catch (error) {
        console.log(error)
    }
})

// Delete user
router.get("/:id", async(req, res)=>{
    const {id} = req.params;
    try {
        const DeleteUser = await User.findByIdAndDelete({_id: id});
        res.status(200).json(DeleteUser)
        } catch (error) {
        console.log(error);
    }
})

// Update User
router.patch("/:id", async(req, res)=>{
    const {id} = req.params;
    const {name, email, age} = req.body;

    try {
        const UpdateUser = await User.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(UpdateUser)
    } catch (error) {
        console.log(error)
    }
})


export default router;