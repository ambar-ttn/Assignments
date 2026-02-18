"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";


const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  background-color: #222;
  color: white;
  padding: 12px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
`;

const Tr = styled.tr`
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
`;



export default function UserClient() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  if (users.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <h2>Users Table (Client Side)</h2>

      <Table>
        <thead>
          <tr>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th>Company</Th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.username}</Td>
              <Td>{user.email}</Td>
              <Td>{user.company.name}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
