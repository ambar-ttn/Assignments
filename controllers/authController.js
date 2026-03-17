const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getUsers, saveUsers } = require("../utils/fileHandler.js");

const SECRET = "mysecretkey";

const signup = async (req, res) => {
  const { email, password } = req.body;

  const users = getUsers();

  const exist = users.find(u => u.email === email);
  if (exist) {
    return res.status(400).json({ msg: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ email, password: hashedPassword });
  saveUsers(users);

  res.json({ msg: "User registered successfully" });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const users = getUsers();

  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(400).json({ msg: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ msg: "Invalid credentials" });
  }

  const token = jwt.sign({ email }, SECRET, { expiresIn: "1h" });

  res.json({ token });
};

module.exports = { signup, login };