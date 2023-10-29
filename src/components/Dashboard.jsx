import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import axios from 'axios';

const Dashboard = ({ userType }) => {
  const [location, setLocation] = useState(null);
  const [benefits, setBenefits] = useState([]);

  const getBenefits = (userType, location) => {
    if (userType === 'gestor') {
      return ['Benefício de Gestor 1', 'Benefício de Gestor 2', 'Benefício de Gestor 3'];
    } else {
      return ['Benefício de Colaborador 1', 'Benefício de Colaborador 2', 'Benefício de Colaborador 3'];
    }
  };

  const fetchLocationFromGoogle = async () => {
    try {
      const response = await axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_GOOGLE_API_KEY`);
      const { location } = response.data;
      setLocation(location);
    } catch (error) {
      console.error('Erro ao obter localização do Google:', error);
    }
  };

  useEffect(() => {
    fetchLocationFromGoogle();
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
      {benefits.map((benefit, index) => (
        <div key={index}>{benefit}</div>
      ))}
      {location && (
        <div>
          <h3>Sua localização atual do Google:</h3>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lng}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
