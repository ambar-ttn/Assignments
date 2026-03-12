const fs = require("fs");

fs.readFile("file.txt","utf8",(err,data)=>{
  console.log("Callback executed");

  if(err){
    console.log("Error:",err);
    return;
  }

  console.log("From file data -->",data);
});

console.log("This is my async file reading.");
