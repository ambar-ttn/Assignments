const fs = require("fs");

const getUsers = () => {
  const data = fs.readFileSync("./data/users.json");
  return JSON.parse(data);
};

const saveUsers = (users) => {
  fs.writeFileSync("./data/users.json", JSON.stringify(users, null, 2));
};

module.exports = { getUsers, saveUsers };