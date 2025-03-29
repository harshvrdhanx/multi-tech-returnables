import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // use this to navigate on login success

  const handleLogin = () => {
    // Mock login logic - you can replace this with actual authentication
    if (loginId && password) {
      onLogin(); // Call the login handler from the parent component
      navigate('/'); // Redirect to Project Information page
    } else {
      alert('Please enter both Login ID and Password');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
        <Typography variant="h4" gutterBottom>
          Multi-tech Returnables
        </Typography>
        <TextField
          label="Login ID"
          variant="outlined"
          fullWidth
          margin="normal"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
