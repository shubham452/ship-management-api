const mongoose = require("mongoose");

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongoDb connected");
    } catch (error) {
        console.log("error connecting the MongoDb",error.message);
    }
}

module.exports = connectDb;