
const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const connectDB = require("./config/db.config.js");
const userRoutes = require("./routes/user.route.js");
//DB connect
connectDB();
app.use(express.static("public"));
app.use(express.json());
app.use("/api/users",userRoutes);


app.get("/",(req,res)=>{
    res.send("Server start...");
});
app.get("/about",(req,res)=>{
    res.send("Name : Appu Kumar")
})

app.listen(port,()=>{
    console.log(`Server Start from port ${port}`);
});