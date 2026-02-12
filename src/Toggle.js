import React, { useState } from 'react';
import './Toggle.css'

export function Toggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className='wrapper'>
      {isLoggedIn ? <p>I am logged In</p> : <p>I am logged Out</p>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Click me</button>
    </div>
  )
}

