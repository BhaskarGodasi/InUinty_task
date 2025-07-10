import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
  const { setUser, setToken } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      setToken(res.data.token);
      setUser(res.data.user);
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <h2>Login</h2>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
      {error && <p style={{color:'red'}}>{error}</p>}
    </form>
  );
};

export default Login; 