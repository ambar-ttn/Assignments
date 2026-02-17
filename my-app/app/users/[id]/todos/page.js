import { notFound } from "next/navigation";

export default async function UserTodos({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/todos`,
    { cache: "no-store" }
  );

  if (!res.ok) notFound();

  const todos = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Todos</h2>

      <ul style={{ paddingLeft: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              listStyle: "none",
              marginBottom: "8px",
              padding: "8px",
              border: "1px solid #ddd",
            }}
          >
            {todo.completed ? (
              <span style={{ color: "green" }}>
                 Completed — {todo.title}
              </span>
            ) : (
              <span style={{ color: "red" }}>
                 Incomplete — {todo.title}
              </span>
            )}
          </li>
        ))}
      </ul>

      <a href={`/users/${id}`}>← Back to User</a>
    </div>
  );
}
