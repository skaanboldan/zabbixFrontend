// src/components/LoginForm.js
import React, { useState } from 'react';
import { styled } from '@mui/system';

const StyledDiv = styled('div')({
  // General styles if needed
});

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '300px',
  margin: '0 auto',
});

const StyledInput = styled('input')({
  margin: '8px 0',
});

const StyledButton = styled('button')({
  marginTop: '16px',
});

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin') {
      onLogin(username);
    } else {
      alert('Kullanıcı adı veya şifre hatalı.');
    }

    setUsername('');
    setPassword('');
  };

  return (
    <StyledDiv>
      <h2 style={{ textAlign: 'center' }}>Giriş Yap</h2>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="username">Kullanıcı Adı:</label>
        <StyledInput
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          sx={{ border: '1px solid #ccc', padding: '8px' }}
        />

        <label htmlFor="password">Şifre:</label>
        <StyledInput
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          sx={{ border: '1px solid #ccc', padding: '8px' }}
        />

        <StyledButton
          type="submit"
          sx={{ backgroundColor: '#4caf50', color: 'white', padding: '8px 16px', cursor: 'pointer' }}
        >
          Giriş Yap
        </StyledButton>
      </StyledForm>
    </StyledDiv>
  );
};

export default LoginForm;
