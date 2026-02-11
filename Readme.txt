Q2.--> How to set up a React project and render a simple component.
Install Node.js
Download and install Node.js 
Create a React project-->
npx create-react-app my-app

Go into the project folder
cd my-app
Start the development server
npm start

Create a component
Create a file Hello.js

function Hello() {
  return <h1>Hello React</h1>;
}
export default Hello;


Import and render the component
In App.js
import Hello from "./Hello";

function App() {
  return <Hello />;
}

export default App;

View output in browser
Open http://localhost:3000



Q4. --> Given the following code, identify the issue and fix it:
const element = <h1>Hello, World!;</h1>;


Answer --> In JSX, {} can contain only JavaScript expressions that return a value.
A semicolon (;) is a statement terminator and does not return any value, so it causes a syntax error.
Hence we need to remove it and place it inside {}

<h1>{"Hello, World!"}</h1>