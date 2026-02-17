"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkStyle = (path) => ({
    marginRight: "10px",
    color: pathname.startsWith(path) ? "red" : "black",
  });

  return (
    <header style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link href="/users" style={linkStyle("/users")}>Users</Link>
      <Link href="/todos" style={linkStyle("/todos")}>Todos</Link>
    </header>
  );
}

