const fs = require("fs");

const data = fs.readFileSync("file.txt","utf8");
console.log("From file data -->", data);

console.log("This is my sync file reading.");
