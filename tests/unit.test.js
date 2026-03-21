const todoController = require("../controllers/todoController");

test("Check createTodo function exists", () => {
  expect(todoController.createTodo).toBeDefined();
});

test("Check getTodos function exists", () => {
  expect(todoController.getTodos).toBeDefined();
});


afterAll(async () => {
  await pool.end();
});