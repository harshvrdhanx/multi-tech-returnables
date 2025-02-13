import React, {useState, useEffect} from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import HomeButton from '../HomeButton';
const ClientRegistration = () => {
  const [formData, setFormData] = useState({
    clientCode: "",
    name: "",
    address1: "",
    address2: "",
    city: "",
    email: "",
    mobileNumber1: "",
    mobileNumber2: "",
    state: "",
    pinCode: "",
    country: "",
    gstNumber: ""
  });

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <HomeButton />
      <Typography variant="h5" gutterBottom>
        Client Registration
      </Typography>

      {/* Input fields for Client Registration */}
      <TextField
        label="Client Code"
        fullWidth
        margin="normal"
        value={formData.clientCode}
        onChange={handleInputChange("clientCode")}
      />
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        value={formData.name}
        onChange={handleInputChange("name")}
      />
      <TextField
        label="Address 1"
        fullWidth
        margin="normal"
        value={formData.address1}
        onChange={handleInputChange("address1")}
      />
      <TextField
        label="Address 2"
        fullWidth
        margin="normal"
        value={formData.address2}
        onChange={handleInputChange("address2")}
      />
      <TextField
        label="City"
        fullWidth
        margin="normal"
        value={formData.city}
        onChange={handleInputChange("city")}
      />
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={formData.email}
        onChange={handleInputChange("email")}
      />
      <TextField
        label="Mobile Number 1"
        fullWidth
        margin="normal"
        value={formData.mobileNumber1}
        onChange={handleInputChange("mobileNumber1")}
      />
       <TextField
        label="Mobile Number 2"
        fullWidth
        margin="normal"
        value={formData.mobileNumber2}
        onChange={handleInputChange("mobileNumber2")}
      />      
      <TextField
        label="State"
        fullWidth
        margin="normal"
        value={formData.state}
        onChange={handleInputChange("state")}
      />
      <TextField
        label="Pin Code"
        fullWidth
        margin="normal"
        value={formData.pinCode}
        onChange={handleInputChange("pinCode")}
      />
      <TextField
        label="Country"
        fullWidth
        margin="normal"
        value={formData.country}
        onChange={handleInputChange("country")}
      />
      <TextField
        label="GST Number"
        fullWidth
        margin="normal"
        value={formData.gstNumber}
        onChange={handleInputChange("gstNumber")}
      />

      {/* Submit Button */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Container>
  );
};

export default ClientRegistration;
