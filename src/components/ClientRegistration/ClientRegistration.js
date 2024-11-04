import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import HomeButton from '../HomeButton';
const ClientRegistration = () => {
  return (
    <Container maxWidth="sm">
      <HomeButton/>
      <Typography variant="h5" gutterBottom>
        Client Registration
      </Typography>
      <TextField label="Client Code" fullWidth margin="normal" />
      <TextField label="Name" fullWidth margin="normal" />
      <TextField label="Address 1" fullWidth margin="normal" />
      <TextField label="Address 2" fullWidth margin="normal" />
      <TextField label="City" fullWidth margin="normal" />
      <TextField label="Mobile Number" fullWidth margin="normal" />
      <TextField label="State" fullWidth margin="normal" />
      <TextField label="Pin Code" fullWidth margin="normal" />
      <TextField label="Country" fullWidth margin="normal" />
      <TextField label="Location Code" fullWidth margin="normal" />
      <Button variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </Container>
  );
};

export default ClientRegistration;
