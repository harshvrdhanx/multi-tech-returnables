// InternalTransferPage.js
import React from "react";
import { TextField, MenuItem, Grid, Button } from "@mui/material";
import HomeButton from "../HomeButton";

const InternalTransferPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <HomeButton />

      <h2>Internal Transfer (Edit/Modify/Delete)</h2>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* First part of the form - Left Side */}
          <Grid item xs={6}>
            <TextField label="Internal Transfer No" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="GRN Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField label="Delivery Challan No" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Delivery Challan Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField label="Project Code" select fullWidth>
              <MenuItem value="Project1">Project1</MenuItem>
              <MenuItem value="Project2">Project2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Client Code" select fullWidth>
              <MenuItem value="Client1">Client1</MenuItem>
              <MenuItem value="Client2">Client2</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField label="From Location Code" select fullWidth>
              <MenuItem value="Location1">Location1</MenuItem>
              <MenuItem value="Location2">Location2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField label="To Location Code" select fullWidth>
              <MenuItem value="Location1">Location1</MenuItem>
              <MenuItem value="Location2">Location2</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField label="UWAY Bill Nbr" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Customer Invoice Number" fullWidth />
          </Grid>

          <Grid item xs={6}>
            <TextField label="Route Code" select fullWidth>
              {/* Add choices here */}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Client Delivery Challan" select fullWidth>
              <MenuItem value="Y">Yes</MenuItem>
              <MenuItem value="N">No</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField label="Delivery Type Code" select fullWidth>
              <MenuItem value="Internal">Internal</MenuItem>
              <MenuItem value="External">External</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Vehicle Number" fullWidth />
          </Grid>

          {/* Sequence Information Section */}
          <Grid item xs={12}>
            <h4>Sequence Information</h4>
            {[...Array(8).keys()].map((_, index) => (
              <Grid container spacing={2} key={index}>
                <Grid item xs={1}>
                  <TextField
                    label="Sequence No"
                    defaultValue={index + 1}
                    disabled
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField label="Asset Code/ID" select fullWidth>
                    {/* Asset Code choices */}
                  </TextField>
                </Grid>
                <Grid item xs={3}>
                  <TextField label="Asset Status" select fullWidth>
                    {/* Asset Status choices */}
                  </TextField>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    label="All Subcomponents Attached"
                    select
                    fullWidth
                  >
                    <MenuItem value="Y">Yes</MenuItem>
                    <MenuItem value="N">No</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={3}>
                  <TextField label="Remarks" fullWidth />
                </Grid>
              </Grid>
            ))}
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default InternalTransferPage;
