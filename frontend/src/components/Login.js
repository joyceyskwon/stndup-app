import React, { useState } from 'react';

const {username, setUsername} = useState('');
const {password, setPassword} = useState('');

const handleSubmit = (e, props) => {
  e.preventDefault()
  props.loginUser(username, password)
}

export default function Login(props) {
  return (
    <>
      <form
        onSubmit={handleSubmit}
      >  
        <label>Username : </label>
        <input 
          type="text" 
          value={username}
          placeholder="Enter Username" 
          name="username" 
          onChange={e => setUsername(e.target.value)}
          required 
        />
        <label>Password : </label>
        <input 
          type="password" 
          value={password}
          placeholder="Enter Password" 
          name="password" 
          onChange={e => setPassword(e.target.value)}
          required 
        />
        <button type="submit">Login</button>
        <input type="checkbox" checked="checked" /> Remember me
      </form>     
    </>
  )
}
