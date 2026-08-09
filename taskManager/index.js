
const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/",(req,res)=>{
    res.send("Server start...");
});
app.get("/about",(req,res)=>{
    res.send("Name : Appu Kumar")
})

app.listen(port,()=>{
    console.log(`Server Start from port ${port}`);
});