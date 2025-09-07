require("dotenv").config();
const express = require("express");
const connectDb = require("./config/db");
const shipRoutes = require("./routes/shipRoutes");
const authRoutes = require("./routes/authRoutes");



const app = express();
app.use(express.json());

connectDb();

app.use("/auth",authRoutes);
app.use("/ships",shipRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log("Server is connected in PORT: ", PORT));