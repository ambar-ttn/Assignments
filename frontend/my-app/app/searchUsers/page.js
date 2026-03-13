"use client";
import { useState } from "react";
import axios from "axios";

function SearchUser() {

    const [users, setUsers] = useState([]);

    const handleChange = async (e) => {

        const value = e.target.value;

        if (value) {
            const res = await axios.get(
                `http://localhost:8000/users?username=${value}`
            );

            setUsers(res.data);
        } else {
            setUsers([]);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">

            <input
                className="border p-2 rounded w-64"
                type="text"
                placeholder="Search username"
                onChange={handleChange}
            />

            <ul className="border w-64">
                {users.map((u) => (
                    <li key={u.id} className="p-2 border-b">
                        {u.username}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default SearchUser;