"use client";
import { useEffect, useState } from "react";
import axios from "axios";

function Students() {

  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");

  const fetchStudents = async (n = "", b = "") => {

    let url = `http://localhost:8000/students?name=${n}&branch=${b}`;

    const res = await axios.get(url);
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleName = (e) => {
    const val = e.target.value;
    setName(val);
    fetchStudents(val, branch);
  };

  const handleBranch = (e) => {
    const val = e.target.value;
    setBranch(val);
    fetchStudents(name, val);
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:8000/students/${id}`);
    fetchStudents(name, branch);
  };

  return (
    <div>

      <h2>Students</h2>

      <input
        placeholder="Search by name"
        onChange={handleName}
      />

      <select onChange={handleBranch}>
        <option value="">All</option>
        <option value="CSE">CSE</option>
        <option value="ECE">ECE</option>
        <option value="IT">IT</option>
        <option value="ME">ME</option>
      </select>

      <table border="1">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.branch}</td>
              <td>{s.age}</td>
              <td>
                <button onClick={() => deleteStudent(s.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default Students;