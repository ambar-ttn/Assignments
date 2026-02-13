import { useState } from 'react';
import './App.css';
import { Login } from './Login';
import Logout from './Logout'
function App() {
  const[isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <div className="App">
        {isLoggedIn? <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Login>: <Logout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Logout>}
    </div>
  );
}

export default App;
