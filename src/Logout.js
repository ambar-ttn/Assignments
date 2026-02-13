import React from 'react'
import './Logout.css'

const Logout = ({setIsLoggedIn,isLoggedin}) => {
  return (
<div className='logout'>
       Hello You are not logged In.
       <button onClick={()=>setIsLoggedIn(true)}>LogIn</button>
    </div>
  )
}
export default Logout