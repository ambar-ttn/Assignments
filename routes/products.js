const express = require("express");
const router= express.Router();



router.get("/" , (req,res)=>{
    res.send("Hey Welcome to the world of product routes. ");
})

router.get("/p1/:id", (req,res)=>{
    res.send(`Hey welcome to the page of product with id --> ${req.params.id}`);
});
module.exports=router ; 

function middleMan(req, res, next){
    console.log("Hey I am inside the middleware ...");
    next();
}


router.get("/p",middleMan,(req , res)=>{
    console.log("practiced express-router");
    res.send(`<h1>Hello I am Ambar practicing express router </h1>`)
})