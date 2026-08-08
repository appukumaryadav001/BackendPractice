const express = require("express");
const port =  3000;
const path = require("path");
const app = express();
const expressSession = require("express-session");
const flash = require("connect-flash");
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:"appu@001"
}))

app.use(flash());

app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(port,()=>{
    console.log(`Server Start at port ${port}`)
})