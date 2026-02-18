"use client"

import React, { useEffect } from "react"
import { useState } from "react";
import styles from "./userClient.module.css"

export default function UserClient(){

    const[users,setUsers]=useState([]);
    useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);
return (
    <ul className={styles.list}>
      {users.length===0 ? <div>Loading....</div>:users.map((user) => (
        <li key={user.id} className={styles.item}>
          <p className={styles.username}>
            UserName: {user.username}
          </p>
          <p className={styles.company}>
            Company: {user.company.name}
          </p>
          <p className={styles.email}>
            Email: {user.email}
          </p>
        </li>
      ))}
    </ul>
  );
}