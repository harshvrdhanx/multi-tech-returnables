// DeliveryChallanPage.js
import React from "react";
import { TextField, MenuItem, Grid, Button } from "@mui/material";
import HomeButton from "../HomeButton";

const DeliveryChallanPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <HomeButton />
      <h2>Delivery Challan (Edit/Modify/Delete)</h2>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
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
              {/* Add choices for project codes */}
              <MenuItem value="Project1">Project1</MenuItem>
              <MenuItem value="Project2">Project2</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField label="Client Code" select fullWidth>
              {/* Add choices for client codes */}
              <MenuItem value="Client1">Client1</MenuItem>
              <MenuItem value="Client2">Client2</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField label="From Location Code" select fullWidth>
              {/* Add location codes */}
              <MenuItem value="Location1">Location1</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField label="To Location Code" select fullWidth>
              {/* Add location codes */}
              <MenuItem value="Location2">Location2</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField label="UWAYBillNbr" fullWidth />
          </Grid>

          <Grid item xs={6}>
            <TextField label="Customer Invoice Number" fullWidth />
          </Grid>

          <Grid item xs={6}>
            <TextField label="Route Code" select fullWidth>
              {/* Add choices for Route Code */}
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField label="Client Delivery Challan" select fullWidth>
              {/* Add choices for Yes/No */}
              <MenuItem value="Y">Yes</MenuItem>
              <MenuItem value="N">No</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField label="Delivery Type Code" select fullWidth>
              {/* Add choices for Internal/External */}
              <MenuItem value="Internal">Internal</MenuItem>
              <MenuItem value="External">External</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField label="Vehicle Number" fullWidth />
          </Grid>

          {/* Sequence No, Asset Code, etc. */}
          <Grid item xs={12}>
            <h4>Sequence Information</h4>
            {[...Array(10).keys()].map((_, index) => (
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
                    {/* Yes/No choices */}
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

export default DeliveryChallanPage;
