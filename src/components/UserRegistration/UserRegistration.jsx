import React, { useState }  from 'react';
import { TextField, Button, Grid, Container, Typography, MenuItem, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import HomeButton from '../HomeButton'; 

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    userType: "",
    userName: "",
    userId: "",
    managerUserId: "",
    mobileNbr1: "",
    mobileNbr2: "",
    mobileNbr3: "",
    locationCode: "",
    active: "Y",
  });

  const assetStatuses = ["Active", "Inactive"];

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };
  
  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };
  
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        User Registration
      </Typography>

      {/* Dropdown for User Type */}

      {/* Text Fields */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="User Type"
            select
            fullWidth
            margin="normal"
            value={formData.userType}
            onChange={handleInputChange("userType")}
          >
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="User">User</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="User Name"
            fullWidth
            margin="normal"
            value={formData.userName}
            onChange={handleInputChange("userName")}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="User ID"
            fullWidth
            margin="normal"
            value={formData.userId}
            onChange={handleInputChange("userId")}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Manager User ID"
            fullWidth
            margin="normal"
            value={formData.managerUserId}
            onChange={handleInputChange("managerUserId")}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Mobile Nbr 1"
            fullWidth
            margin="normal"
            value={formData.mobileNbr1}
            onChange={handleInputChange("mobileNbr1")}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Mobile Nbr 2"
            fullWidth
            margin="normal"
            value={formData.mobileNbr2}
            onChange={handleInputChange("mobileNbr2")}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Mobile Nbr 3"
            fullWidth
            margin="normal"
            value={formData.mobileNbr3}
            onChange={handleInputChange("mobileNbr3")}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Location Code"
            fullWidth
            margin="normal"
            value={formData.locationCode}
            onChange={handleInputChange("locationCode")}
          />
        </Grid>
        <Grid item xs={6}>
          {/* Radio Buttons for Active Status */}
          {/* <Typography variant="body1" gutterBottom>
            Active:
          </Typography>
          <RadioGroup
            row
            value={formData.active}
            onChange={handleInputChange("active")}
          >
            <FormControlLabel value="Y" control={<Radio />} label="Y" />
            <FormControlLabel value="N" control={<Radio />} label="N" />
          </RadioGroup> */}
          <TextField
            label="Active"
            select
            fullWidth
            margin="normal"
            value={formData.active}
            onChange={handleInputChange("active")}
          >
            {assetStatuses.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      {/* Submit Button */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default UserRegistration;
