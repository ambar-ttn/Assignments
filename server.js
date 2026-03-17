const express = require("express");
const authRoutes = require("./routes/auth");
const authMiddleware = require("./middleware/auth");

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);



app.get("/protected", authMiddleware, (req, res) => {
  res.json({
    msg: "You are authorized",
    user: req.user
  });
});

app.listen(8300, () => {
  console.log("Server running on port 8300");
});