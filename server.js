require("dotenv").config();
const express = require("express");
const connectDb = require("./config/db");



const app = express();
app.use(express.json());

connectDb();


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log("Server is connected in PORT: ", PORT));