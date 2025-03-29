import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Checkbox,
} from "@mui/material";
import StepProgress from "../shared/StepProgressBar/stepProgressBar";

const ClientRegistration = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    clientCode: "",
    clientName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    county: "",
    pinCode: "",
    mobileNumber1: "",
    mobileNumber2: "",
    email: "",
    gstNumber: "",
    clientDttm: "",
    createUserId: "",
    isActive: "Yes",
    isOem: "",
    isTenantLocation: "",
    locationCode: "",
    locationLatitude: "",
    locationLongitude: "",
    updateDttm: "",
    updateUserId: "",
    versionStamp: "",
    clientId: "CF492N2",
  });

  const handleNext = () => {
    setPage(2);
  };

  const handleBack = () => {
    setPage(1);
  };

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleCheckboxChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.checked });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      {page !== 1 && (
        <>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleBack}
            style={{ marginTop: 20, marginRight: 10 }}
          >
            Back
          </Button>
        </>
      )}
      <h2>Client Registration</h2>
      <StepProgress currentStep={page} totalSteps={2} />
      {/* Divider */}
      {page === 1 ? (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Client Code *"
                placeholder="Enter Client Code"
                fullWidth
                value={formData.clientCode}
                onChange={handleInputChange("clientCode")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Client Name *"
                placeholder="Enter Client Name"
                fullWidth
                value={formData.clientName}
                onChange={handleInputChange("clientName")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address Line 01 *"
                placeholder="Enter Address Line 01"
                fullWidth
                value={formData.addressLine1}
                onChange={handleInputChange("addressLine1")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address Line 02"
                placeholder="Enter Address Line 02"
                fullWidth
                value={formData.addressLine2}
                onChange={handleInputChange("addressLine2")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="City"
                placeholder="Enter City"
                fullWidth
                value={formData.city}
                onChange={handleInputChange("city")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="State"
                placeholder="Enter State"
                fullWidth
                value={formData.state}
                onChange={handleInputChange("state")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="County"
                placeholder="Enter County"
                fullWidth
                value={formData.county}
                onChange={handleInputChange("county")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Pin Code"
                placeholder="Enter Pin Code"
                fullWidth
                value={formData.pinCode}
                onChange={handleInputChange("pinCode")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Mobile Number 01 *"
                placeholder="+91 8939201109"
                fullWidth
                value={formData.mobileNumber1}
                onChange={handleInputChange("mobileNumber1")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Mobile Number 02 (Optional)"
                placeholder="+91 8939201109"
                fullWidth
                value={formData.mobileNumber2}
                onChange={handleInputChange("mobileNumber2")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email Address"
                placeholder="Your email address"
                fullWidth
                value={formData.email}
                onChange={handleInputChange("email")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="GST Number"
                placeholder="Enter GST Number"
                fullWidth
                value={formData.gstNumber}
                onChange={handleInputChange("gstNumber")}
              />
            </Grid>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              style={{ marginLeft: 15, marginTop: 20 }}
            >
              Next
            </Button>
          </Grid>
        </>
      ) : (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Client dttm *"
                fullWidth
                value={formData.clientDttm}
                onChange={handleInputChange("clientDttm")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Create Users ID *"
                fullWidth
                value={formData.createUserId}
                onChange={handleInputChange("createUserId")}
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel>Is Active</FormLabel>
              <RadioGroup
                row
                value={formData.isActive}
                onChange={handleInputChange("isActive")}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                label="is oem"
                fullWidth
                value={formData.isOem}
                onChange={handleInputChange("isOem")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                label="is tenant location"
                fullWidth
                value={formData.isTenantLocation}
                onChange={handleInputChange("isTenantLocation")}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                label="Location Code"
                fullWidth
                value={formData.locationCode}
                onChange={handleInputChange("locationCode")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Location Latitude"
                fullWidth
                value={formData.locationLatitude}
                onChange={handleInputChange("locationLatitude")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Location Longitude"
                fullWidth
                value={formData.locationLongitude}
                onChange={handleInputChange("locationLongitude")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Update dttm"
                fullWidth
                value={formData.updateDttm}
                onChange={handleInputChange("updateDttm")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Update user ID"
                fullWidth
                value={formData.updateUserId}
                onChange={handleInputChange("updateUserId")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Version Stamp *"
                fullWidth
                value={formData.versionStamp}
                onChange={handleInputChange("versionStamp")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Client ID"
                fullWidth
                value={formData.clientId}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
            
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3 }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
        </>
      )}

      {/* <Divider sx={{ mb: 3 }} /> */}

      {/* Form Grid */}


      {/* Submit Button */}

    </Container>
  );
};

export default ClientRegistration;
