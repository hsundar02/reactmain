import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import User.json from json;

const Login = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const [error, setError] = useState('');
        let User=require('./User.json');
        //console.log(User)
    
//go to home function
        let navigate=useNavigate();
        const gotohome=()=>{
           navigate("/Home")
        }
//login function and validation
      
        const handleLogin = (event) => {
          event.preventDefault();
          const user = User.find((user) => user.username === username);
          if (username === '' || password === '') {
            setError('Please fill in all fields.');
          } else if (!user) {
            setError('Invalid username.');
          } else if (user.password != password) {
            setError('Incorrect password.');
         } else {
            gotohome();
          }
        };


  return (
    <form onSubmit={handleLogin}>
   
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      /><br/>
   
    
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      /><br/>
   
   
   
      <button type="submit">Login</button>
   
    {error && <div>{error}</div>}
  </form>
);
  }

  
export default Login