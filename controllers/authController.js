const User = require("../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register=async(req,res)=>{

    try {
        const {username,email,password}= req.body;

        if(!username || !password || !email)
        {
            return res.status(400).json({error:"all field required"});
        }
        const existingUser = await User.findOne({email})
        if(existingUser)
        {
            return res.status(400).json({error:"User already exist"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = new User({username, email, password:hashedPassword});
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!user)
        {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)
        {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const token = jwt.sign(
            {
                id:user._id,
                email:user.email,
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"1h"
            }
        );
        res.status(200).json({token});

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};