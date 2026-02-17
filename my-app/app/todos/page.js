export default async function TodosPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos",
    { cache: "no-store" }
  );

  const todos = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todos List</h2>

      <ul style={{ paddingLeft: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              listStyle: "none",
              marginBottom: "8px",
              padding: "8px",
              border: "1px solid #ccc",
            }}
          >
            {todo.completed ? (
              <span style={{ color: "green" }}>
                {todo.title}
              </span>
            ) : (
              <span style={{ color: "red" }}>
                 {todo.title}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
