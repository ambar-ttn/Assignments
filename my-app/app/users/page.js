export default async function Users() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { cache: "no-store" }
  );
  const users = await res.json();

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#333" }}>Users</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              marginBottom: "12px",
              backgroundColor: "#fff",
            }}
          >
            <p style={{ margin: "4px 0" }}>
              <strong style={{ color: "#555" }}>Name:</strong>{" "}
              <span style={{ color: "#000" }}>{user.name}</span>
            </p>

            <p style={{ margin: "4px 0" }}>
              <strong style={{ color: "#555" }}>Email:</strong>{" "}
              <span style={{ color: "#0070f3" }}>{user.email}</span>
            </p>

            <p style={{ margin: "4px 0" }}>
              <strong style={{ color: "#555" }}>City:</strong>{" "}
              {user.address.city}
            </p>

            <p style={{ margin: "4px 0" }}>
              <strong style={{ color: "#555" }}>Company:</strong>{" "}
              {user.company.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
