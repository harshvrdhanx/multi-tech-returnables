// src/components/HomeButton.js
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomeButton = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <Button variant="contained" color="primary" onClick={goHome} style={{ marginBottom: '20px' }}>
      Home
    </Button>
  );
};

export default HomeButton;
