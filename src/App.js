import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './Login';
import { createContext } from 'react';
import UserProfile from './UserProfile';

 export const UserContext = createContext();


function App() {

  const[name,setName] = useState('');
  const[mail,setMail]=useState('');

  const[isLoggedin,setIsLoggedin]=useState(false);

  return (
   <UserContext.Provider value={{name,mail,setName,setMail}}>

    <div className='wrapper'>

     {isLoggedin ? <UserProfile/> : <Login isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>}         

    </div>
   </UserContext.Provider>
  );
}

export default App;
