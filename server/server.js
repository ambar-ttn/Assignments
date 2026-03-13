const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

let students = require("./students.json");
const users = require("./users.json");


// USERS SEARCH
app.get("/users", (req, res) => {

    const search = req.query.username;

    if (search) {
        const result = users.filter((val) =>
            val.username.toLowerCase().startsWith(search.toLowerCase())
        );

        return res.json(result);
    }

    res.json(users);
});


// GET STUDENTS + FILTER
app.get("/students", (req, res) => {

    const name = req.query.name;
    const branch = req.query.branch;

    let result = students;

    if (name) {
        result = result.filter((s) =>
            s.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    if (branch) {
        result = result.filter((s) =>
            s.branch.toLowerCase() === branch.toLowerCase()
        );
    }

    res.json(result);
});


// DELETE STUDENT
app.delete("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    students = students.filter((s) => s.id !== id);

    res.json({
        message: "Student deleted successfully"
    });
});


app.listen(8000, () => {
    console.log("Server running on port 8000");
});