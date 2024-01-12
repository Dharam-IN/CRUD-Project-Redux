import mongoose from "mongoose";

// Create Schema
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    age:{
        type: Number,
        required: true
    }
},{timestamps: true});

// Create Model

const User = new mongoose.model("UserModel", UserSchema);

export default User;