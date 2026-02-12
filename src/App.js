import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';
import { Counters } from './Counters';
import { Parent } from './Parent';
import { Toggle } from './Toggle';
import { TodoList } from './TodoList';
import { Route, Routes, Link } from 'react-router-dom';


function App() {

  return (
    <>
      <div style={{ padding: "20px", backgroundColor: "#eee" }}>
        <span style={{ margin: "0 10px" }}><Link to="/">1 Home</Link></span>
        <span style={{ margin: "0 10px" }}><Link to="/counter">2 Counter</Link></span>
        <span style={{ margin: "0 10px" }}><Link to="/counters">3 Counters</Link></span>
        <span style={{ margin: "0 10px" }}><Link to="/parent">4 Parent</Link></span>
        <span style={{ margin: "0 10px" }}><Link to="/toggle">5 Toggle</Link></span>
        <span style={{ margin: "0 10px" }}><Link to="/todolist">6 TodoList</Link></span>
      </div>

      <Routes>
        <Route path="/" element={<h1>It is Home page</h1>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/counters" element={<Counters />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/toggle" element={<Toggle />} />
        <Route path="/todolist" element={<TodoList />} />
      </Routes>


    </>

  );
}

export default App;
