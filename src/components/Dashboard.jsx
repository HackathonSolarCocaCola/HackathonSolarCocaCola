import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ userType }) => {
  const [location, setLocation] = useState(null);
  const [benefits, setBenefits] = useState([]);

  const getBenefits = (userType, location) => {
    if (userType === 'gestor') {
      return ['Benefício de Gestor 1', 'Benefício de Gestor 2'];
    } else {
      return ['Benefício de Colaborador 1', 'Benefício de Colaborador 2'];
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    });
  }, [userType]);

  useEffect(() => {
    if (location) {
      const benefitsList = getBenefits(userType, location);
      setBenefits(benefitsList);
    }
  }, [location, userType]);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Bem-vindo, {userType}</h2>
      <div>
        {benefits.map((benefit, index) => (
          <div key={index}>{benefit}</div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
