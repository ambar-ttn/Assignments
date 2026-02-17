import React, { useContext } from 'react'
import { UserContext } from './App'
import './UserProfile.css'


const UserProfile = () => {
    const{name,mail}=useContext(UserContext)
  return (
   <div className="wrapper">
  <div className="innerDiv">
    <p>Welcome to my Website !!</p>

    <div className="profile">
      <b><p>Name : {name}</p></b>
      <b><p>Mail : {mail}</p></b>
    </div>
  </div>
</div>

  )
}

export default UserProfile