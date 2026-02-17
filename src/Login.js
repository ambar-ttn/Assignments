import React, { useContext } from 'react'
import './Login.css'
import { UserContext } from './App'

const Login = ({isLoggedin,setIsLoggedin}) => {

    const {name,mail,setMail,setName} = useContext(UserContext)
   function changeHandler(e){

       if(e.target.name==='userName'){
        setName(e.target.value);
       }
       else if(e.target.name==='mail'){
        setMail(e.target.value)
       }
   }
   function clickHandler(e){
       e.preventDefault();
       setIsLoggedin(true);
   }
  return (
    <div className='wrapper'>
     <form className='frm'>
        <input 
        type='text'
        name='userName'
        placeholder='Enter your name'
        required 
        value={name}
        onChange={changeHandler}
        />

         <input 
        type='text'
        name='mail'
        required 
        placeholder='Enter your mail'
        value={mail}
        onChange={changeHandler}

        />

        <button onClick={clickHandler}>Login</button>
     </form>

    </div>
  )
}

export default Login