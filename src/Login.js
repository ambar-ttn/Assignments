import React from 'react'
import './Login.css'

export const Login = ({isLoggedIn,setIsLoggedIn}) => {
  return (
    <div className='login'>
       Hello You are logged in.
       <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
    </div>
  )
}
