const express = require("express");
const app  = express();




app.get("/" , (req,res)=>{
    console.log("I am server.js file ");
})



app.listen(3000, (req,res)=>{
    console.log('Server is listening at port 3000')
}) 