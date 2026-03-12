const http = require("http");

const server = http.createServer((req,res)=>{

    res.write("Hello this is my Node HTTP server");
    res.end();

});

server.listen(4004,()=>{
    console.log("Server running on port 4004");
});
