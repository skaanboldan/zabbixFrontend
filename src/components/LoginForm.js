// src/components/LoginForm.js
import React, { useState } from 'react';
import { makeStyles } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    // Eğer gerekirse genel stiller buraya eklenebilir.
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px', // Formun maksimum genişliği
    margin: '0 auto', // Formu ortalamak için
  },
  input: {
    margin: '8px 0',
  },
  button: {
    marginTop: '16px',
  },
}));

const LoginForm = ({ onLogin }) => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'kullanici' && password === 'sifre') {
      onLogin(username);
    } else {
      alert('Kullanıcı adı veya şifre hatalı.');
    }

    setUsername('');
    setPassword('');
  };

  return (
    <div className={classes.root}>
      <h2>Giriş Yap</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        <label htmlFor="username">Kullanıcı Adı:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={classes.input}
          required
        />

        <label htmlFor="password">Şifre:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={classes.input}
          required
        />

        <button type="submit" className={classes.button}>
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
