import React, { useState } from 'react';

export function TodoList() {
  const [todos, setTodos] = useState([]); 
  const [input, setInput] = useState(''); 

  const addTodo = () => {
    if (input.trim() === '') return; 
    setTodos([...todos, input.trim()]);
    setInput(''); // clear input
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Todo List</h2>
      <div style={{ marginBottom: '10px' }}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Enter todo"
        />
        <button onClick={addTodo} style={{ marginLeft: '10px' }}>Add</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{index + 1}. {todo}</li>
        ))}
      </ul>
    </div>
  );
}
