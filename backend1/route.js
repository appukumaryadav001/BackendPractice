var express = require("express");
var router = express.Router();
router.get("/app", function(req,res){
    res.send("Hi I am route");
})


module.exports = router;