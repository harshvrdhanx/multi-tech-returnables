import React, {useState, useEffect} from 'react';
import { TextField, Button, Container, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import HomeButton from '../HomeButton';

const ClientLocation = () => {

 const [formData, setFormData] = useState({
    create_dttm: "",
    create_users_id: "",
    is_active: "Y",
    is_oem: "",
    is_tenant_loc: "",
    location_code: "",
    location_latitude: "",
    location_longitude: "",
    update_dttm: "",
    update_user_id: "",
    version_stamp: "",
    client_id: ""
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
            Client Location
          </Typography>
    
          {/* Input fields for Client Registration */}
          <TextField
            label="create dttm"
            fullWidth
            margin="normal"
            value={formData.create_dttm}
            onChange={handleInputChange("create_dttm")}
          />
          <TextField
            label="create users id"
            fullWidth
            margin="normal"
            value={formData.create_users_id}
            onChange={handleInputChange("create_users_id")}
          />
          <Typography variant="body1" gutterBottom>
                Is active:
              </Typography>
              <RadioGroup
                row
                value={formData.is_active}
                onChange={handleInputChange("is_active")}
              >
                <FormControlLabel value="Y" control={<Radio />} label="Y" />
                <FormControlLabel value="N" control={<Radio />} label="N" />
              </RadioGroup>
          <TextField
            label="is oem"
            fullWidth
            margin="normal"
            value={formData.is_oem}
            onChange={handleInputChange("is_oem")}
          />
          <TextField
            label="is tenant loc"
            fullWidth
            margin="normal"
            value={formData.is_tenant_loc}
            onChange={handleInputChange("is_tenant_loc")}
          />
          <TextField
            label="location code"
            fullWidth
            margin="normal"
            value={formData.location_code}
            onChange={handleInputChange("location_code")}
          />
          <TextField
            label="location latitude"
            fullWidth
            margin="normal"
            value={formData.location_latitude}
            onChange={handleInputChange("location_latitude")}
          />
           <TextField
            label="location longitude"
            fullWidth
            margin="normal"
            value={formData.location_longitude}
            onChange={handleInputChange("location_longitude")}
          />      
          <TextField
            label="update dttm"
            fullWidth
            margin="normal"
            value={formData.update_dttm}
            onChange={handleInputChange("update_dttm")}
          />
          <TextField
            label="update user id"
            fullWidth
            margin="normal"
            value={formData.update_user_id}
            onChange={handleInputChange("update_user_id")}
          />
          <TextField
            label="version stamp"
            fullWidth
            margin="normal"
            value={formData.version_stamp}
            onChange={handleInputChange("version_stamp")}
          />
          <TextField
            label="client id"
            fullWidth
            margin="normal"
            value={formData.client_id}
            onChange={handleInputChange("client_id")}
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
}

export default ClientLocation;