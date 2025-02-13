import React, {useState, useEffect} from 'react';
import { TextField, Button, Container, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import HomeButton from '../HomeButton';

const ClientRoute = ()  => {

     const [formData, setFormData] = useState({
        id: "",
        create_dttm: "",
        create_users_id: "",
        expected_travel_time_days: "",
        expected_travel_time_hours: "",
        route_code:"",
        route_desc:"",
        route_seq_no: "",
        update_dttm: "",
        update_user_id: "",
        version_stamp: "",
        client_id: "",
        client_loc_depot_id: "",
    	  client_loc_hub_id: "",
        
      });

      const handleInputChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.value });
      };
    
      const handleSubmit = () => {
        console.log("Form Data:", formData);
      };

    return (
        <>
                <Container maxWidth="sm" sx={{ mt: 4 }}>
          <HomeButton />
          <Typography variant="h5" gutterBottom>
            Client Route
          </Typography>
    
          {/* Input fields for Client Registration */}
          <TextField
            label="id"
            fullWidth
            margin="normal"
            value={formData.id}
            onChange={handleInputChange("id")}
          />
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
          <TextField
            label="expected travel time days"
            fullWidth
            margin="normal"
            value={formData.expected_travel_time_days}
            onChange={handleInputChange("expected_travel_time_days")}
          />
          <TextField
            label="expected travel time hours"
            fullWidth
            margin="normal"
            value={formData.expected_travel_time_hours}
            onChange={handleInputChange("expected_travel_time_hours")}
          />
          <TextField
            label="route code"
            fullWidth
            margin="normal"
            value={formData.route_code}
            onChange={handleInputChange("route_code")}
          />
          <TextField
            label="route desc"
            fullWidth
            margin="normal"
            value={formData.route_desc}
            onChange={handleInputChange("route_desc")}
          />
          <TextField
            label="route seq no"
            fullWidth
            margin="normal"
            value={formData.route_seq_no}
            onChange={handleInputChange("route_seq_no")}
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
          <TextField
            label="client loc depot id"
            fullWidth
            margin="normal"
            value={formData.client_loc_depot_id}
            onChange={handleInputChange("client_loc_depot_id")}
          />
          <TextField
            label="client loc hub id"
            fullWidth
            margin="normal"
            value={formData.client_loc_hub_id}
            onChange={handleInputChange("client_loc_hub_id")}
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
        </>
    )
}

export default ClientRoute;