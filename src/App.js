import React, { Component, useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom'; // Importe Routes e Route
import DashboardColab from './dashboard_colab'; // Importe o seu componente de dashboard
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use navigate em vez de history

  const users = [
    { email: 'gestor@email.com', senha: 'gestor', role: 'gestor' },
    { email: 'colab@email.com', senha: 'colab', role: 'colaborador' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email && user.senha === password);

    if (user && user.role === "gestor") {
      console.log(`Email: ${email}, Senha: ${password}`);
      navigate('/dashboard_gestor'); // Use navigate em vez de history.push
    } else if (user && user.role === "colaborador") {
      console.log(`Email: ${email}, Senha: ${password}`);
      navigate('/dashboard_colab'); // Use navigate em vez de history.push
    } else {
      alert('Email ou senha incorretos');
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard_colab" element={<DashboardColab />} />

        {/* Adicione outras rotas aqui, se necessário */}
      </Routes>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default App;
