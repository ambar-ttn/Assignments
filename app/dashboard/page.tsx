"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [users, setUsers] = useState<User[]>([]);

  // Protect page
  if (status === "loading") return <p>Loading...</p>;
  if (!session) redirect("/login");

  // Fetch users
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h2>Dashboard</h2>
        <button onClick={() => signOut({ callbackUrl: "/login" })}>
          Logout
        </button>
      </div>

      <h3>Users List</h3>

      <div className="grid">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}