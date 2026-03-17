const jwt = require("jsonwebtoken");

const SECRET = "mysecretkey";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  console.log("HEADER:", authHeader); 

  if (!authHeader) {
    return res.status(401).json({ msg: "No token provided" });
  }


  if (!authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "Malformed token" });
  }

  const token = authHeader.split(" ")[1];

  console.log("TOKEN:", token);

  try {
    const decoded = jwt.verify(token, "mysecretkey");
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err); 

    return res.status(401).json({ msg: err.message });
  }
};
module.exports = authMiddleware;