import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Grid,
  Box,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import HomeButton from "../HomeButton";

const ClientRoute = () => {
  const [formData, setFormData] = useState({
    client_id: "",
    create_dttm: "",
    create_users_id: "",
    expected_travel_time_days: 0,
    expected_travel_time_hours: 0,
    route_code: "",
    route_desc: "",
    route_seq_no: "",
    update_dttm: "",
    update_user_id: "",
    version_stamp: "",
    client_loc_depot_id: "",
    client_loc_hub_id: "",
    is_active: "Yes",
  });

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleCounterChange = (field, value) => {
    setFormData({ ...formData, [field]: Math.max(0, value) });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <HomeButton />
      <Typography variant="h5" gutterBottom>
        Client Route
      </Typography>

      <Grid container spacing={2}>
        {/* Client ID & Create Dttm */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Client ID *"
            fullWidth
            value={formData.client_id}
            onChange={handleInputChange("client_id")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Create dttm *"
            fullWidth
            value={formData.create_dttm}
            onChange={handleInputChange("create_dttm")}
          />
        </Grid>

        {/* Is Active */}
        <Grid item xs={12}>
          <Typography variant="subtitle1">Is Active</Typography>
          <RadioGroup
            row
            value={formData.is_active}
            onChange={handleInputChange("is_active")}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>

        {/* Create User ID & Expected Travel Time */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Create Users ID"
            fullWidth
            value={formData.create_users_id}
            onChange={handleInputChange("create_users_id")}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="subtitle2">Expected travel time - Days</Typography>
          <Box display="flex" alignItems="center">
            <IconButton
              onClick={() =>
                handleCounterChange(
                  "expected_travel_time_days",
                  formData.expected_travel_time_days - 1
                )
              }
            >
              <RemoveIcon />
            </IconButton>
            <Typography>{formData.expected_travel_time_days}</Typography>
            <IconButton
              onClick={() =>
                handleCounterChange(
                  "expected_travel_time_days",
                  formData.expected_travel_time_days + 1
                )
              }
            >
              <AddIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="subtitle2">Hours</Typography>
          <Box display="flex" alignItems="center">
            <IconButton
              onClick={() =>
                handleCounterChange(
                  "expected_travel_time_hours",
                  formData.expected_travel_time_hours - 1
                )
              }
            >
              <RemoveIcon />
            </IconButton>
            <Typography>{formData.expected_travel_time_hours}</Typography>
            <IconButton
              onClick={() =>
                handleCounterChange(
                  "expected_travel_time_hours",
                  formData.expected_travel_time_hours + 1
                )
              }
            >
              <AddIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Route Code & Description */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Route Code"
            fullWidth
            value={formData.route_code}
            onChange={handleInputChange("route_code")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Route Description"
            fullWidth
            multiline
            value={formData.route_desc}
            onChange={handleInputChange("route_desc")}
          />
        </Grid>

        {/* Route Seq No & Update Dttm */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Route Seq No"
            fullWidth
            value={formData.route_seq_no}
            onChange={handleInputChange("route_seq_no")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Update dttm"
            fullWidth
            value={formData.update_dttm}
            onChange={handleInputChange("update_dttm")}
          />
        </Grid>

        {/* Update User ID & Version Stamp */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Update user ID"
            fullWidth
            value={formData.update_user_id}
            onChange={handleInputChange("update_user_id")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Version Stamp *"
            fullWidth
            value={formData.version_stamp}
            onChange={handleInputChange("version_stamp")}
          />
        </Grid>

        {/* Client Loc Depot & Hub ID */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Client Loc Depot ID"
            fullWidth
            value={formData.client_loc_depot_id}
            onChange={handleInputChange("client_loc_depot_id")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Client Loc Hub ID"
            fullWidth
            value={formData.client_loc_hub_id}
            onChange={handleInputChange("client_loc_hub_id")}
          />
        </Grid>

        {/* Submit */}
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            SUBMIT
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ClientRoute;
