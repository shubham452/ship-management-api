const mongoose = require("mongoose");

const shipModel = new mongoose.Schema(
    {
        name:
        {
            type:String,
            required: true
        },
        email:
        {
            type:String,
            required:true,
            match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
        },
    },{timestamps:true}
);

module.exports= shipModel;