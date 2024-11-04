import React from 'react';
import { TextField, Button, Container, Typography, MenuItem, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import HomeButton from '../HomeButton'; 

const UserRegistration = () => {
  return (
    <Container maxWidth="sm">
      <HomeButton />
      <Typography variant="h5" gutterBottom>
        User Registration
      </Typography>
      <TextField label="User Type" select fullWidth margin="normal">
        <MenuItem value="Admin">Admin</MenuItem>
        <MenuItem value="User">User</MenuItem>
      </TextField>
      <TextField label="User Name" fullWidth margin="normal" />
      <TextField label="User ID" fullWidth margin="normal" />
      <TextField label="Manager User ID" fullWidth margin="normal" />
      <TextField label="Mobile Nbr 1" fullWidth margin="normal" />
      <TextField label="Mobile Nbr 2" fullWidth margin="normal" />
      <TextField label="Mobile Nbr 3" fullWidth margin="normal" />
      <TextField label="Location Code" fullWidth margin="normal" />
      <Typography variant="body1" gutterBottom>
        Active:
      </Typography>
      <RadioGroup row>
        <FormControlLabel value="Y" control={<Radio />} label="Y" />
        <FormControlLabel value="N" control={<Radio />} label="N" />
      </RadioGroup>
      <Button variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </Container>
  );
};

export default UserRegistration;
