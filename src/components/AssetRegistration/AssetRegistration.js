import React from 'react';
import { TextField, Button, Container, Typography, MenuItem } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'; // Make sure to install @mui/x-date-pickers for date pickers.
import HomeButton from '../HomeButton'; 

const AssetRegistration = () => {
  return (
    <Container maxWidth="sm">
      <HomeButton />
      <Typography variant="h5" gutterBottom>
        Asset Registration
      </Typography>
      <TextField label="Asset ID" select fullWidth margin="normal">
        <MenuItem value="ASSET001">ASSET001</MenuItem>
        <MenuItem value="ASSET002">ASSET002</MenuItem>
      </TextField>
      <TextField label="QR Code" fullWidth margin="normal" />
      <DatePicker label="Asset Creation Date" fullWidth margin="normal" />
      <DatePicker label="Asset Inception Date" fullWidth margin="normal" />
      <DatePicker label="Next Inspection Date" fullWidth margin="normal" />
      <TextField label="Current Status" select fullWidth margin="normal">
        <MenuItem value="Active">Active</MenuItem>
        <MenuItem value="Inactive">Inactive</MenuItem>
      </TextField>
      <TextField label="Current Client Code" select fullWidth margin="normal">
        <MenuItem value="CLIENT001">CLIENT001</MenuItem>
        <MenuItem value="CLIENT002">CLIENT002</MenuItem>
      </TextField>
      <Button variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </Container>
  );
};

export default AssetRegistration;
