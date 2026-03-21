const request = require("supertest");
const app = require("../server");
const pool = require("../db");

jest.setTimeout(20000);

describe("Todo API", () => {

  test("GET /todos", async () => {
    const res = await request(app).get("/todos");
    expect(res.statusCode).toBe(200);
  });

  test("POST /todos", async () => {
    const res = await request(app)
      .post("/todos")
      .send({ title: "Test Todo" });

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("Test Todo");
  });

});

afterAll(async () => {
  await pool.end();
});