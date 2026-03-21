const pool = require("../db");

exports.getTodos = async (req, res) => {
  const todos = await pool.query("SELECT * FROM todos");
  res.json(todos.rows);
};

exports.createTodo = async (req, res) => {
  const { title } = req.body;
  const newTodo = await pool.query(
    "INSERT INTO todos (title) VALUES ($1) RETURNING *",
    [title]
  );
  res.json(newTodo.rows[0]);
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  await pool.query(
    "UPDATE todos SET completed = TRUE WHERE id = $1",
    [id]
  );
  res.json("Updated");
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM todos WHERE id = $1", [id]);
  res.json("Deleted");
};