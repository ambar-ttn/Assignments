require("dotenv").config();
const express = require("express");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running");
});

app.use("/todos", todoRoutes);

// Start server only if not testing
if (process.env.NODE_ENV !== "test") {
  app.listen(process.env.PORT || 5001, () => {
    console.log(`Server running on port ${process.env.PORT || 5001}`);
  });
}

// IMPORTANT
module.exports = app;