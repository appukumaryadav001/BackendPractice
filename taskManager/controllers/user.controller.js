const User = require("../models/user.model.js");


const registerUser = async (req,res)=>{
    try{
        const {username, name , email, password} = req.body;
        if(!username || !name || !email || !password){
            return res.status(400).json({
                message:"All fields are required",
            });
        }

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(409).json({
                message:"user alredy exists",
            });
        }


        const user = await User.create({
            username,
            name,
            email,
            password
        });

        return res.status(201).json({
            message:"User registered successfully",
            user,
        });
    } catch (error){
        return res.status(500).json({
            message:error.message,
        });
    }
};

module.exports = {
    registerUser,
}