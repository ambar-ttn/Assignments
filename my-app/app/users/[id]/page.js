import { notFound } from "next/navigation";

export default async function UserDetail({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) notFound();

  const user = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Details</h2>

      <ul>
        <li><strong>Name:</strong> {user.name}</li>
        <li><strong>Email:</strong> {user.email}</li>
        <li><strong>Company:</strong> {user.company?.name}</li>
      </ul>

      <a href={`/users/${id}/todos`}>View Todos →</a>
    </div>
  );
}
