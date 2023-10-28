import React, { useState, useEffect } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);

  useEffect(() => {
    const acceptedTerms = localStorage.getItem('acceptedTerms');
    if (acceptedTerms) {
      setHasAcceptedTerms(true);
    }
  }, []);

  const data = [
    {email: "gestor@email.com", senha: 'gestor'},
    {email: "colaborador@email.com", senha: 'colaborador'}
  ]
  const handleLoginClick = (type) => {
    if (email === data.email && password === data.password) {
      if (hasAcceptedTerms) {
        onLogin(type);
      } else {
        alert('Você deve aceitar os termos e condições para continuar.');
      }
    } else {
      alert('E-mail ou senha incorretos.');
    }
  };

  const handleTermsChange = () => {
    setHasAcceptedTerms(!hasAcceptedTerms);
    localStorage.setItem('acceptedTerms', !hasAcceptedTerms);
  };

  const handleForgotPassword = () => {
    alert('Um link para redefinir sua senha foi enviado para o seu e-mail.');
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
      <input
        type="checkbox"
        checked={hasAcceptedTerms}
        onChange={handleTermsChange}
      />
      <label>Aceito os termos e condições</label>
      <br />
      <button onClick={() => handleLoginClick('gestor')}>Login como Gestor</button>
      <button onClick={() => handleLoginClick('colaborador')}>Login como Colaborador</button>
      <button onClick={handleForgotPassword}>Esqueci a senha</button>
    </div>
  );
};

export default Login;
