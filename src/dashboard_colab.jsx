import React, { useState } from 'react';

const ColabDashboard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (email === 'colab@email.cm' && password === 'colab') {
      setIsLoggedIn(true);
    } else {
      alert('E-mail ou senha incorretos!');
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <h1>Bem-vindo ao Dashboard Colab!</h1>
      ) : (
        <div>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Entrar</button>
        </div>
      )}
    </div>
  );
};

export default ColabDashboard;
