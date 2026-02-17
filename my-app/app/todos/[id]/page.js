import { notFound } from "next/navigation";

export default async function TodoDetail({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) notFound();

  const todo = await res.json();

  if (!todo?.id) notFound();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo Details</h2>

      <p><strong>Title:</strong> {todo.title}</p>
      <p>
        <strong>Status:</strong>{" "}
        {todo.completed ? "Completed" : "Pending"}
      </p>
      <p><strong>User ID:</strong> {todo.userId}</p>
    </div>
  );
}
