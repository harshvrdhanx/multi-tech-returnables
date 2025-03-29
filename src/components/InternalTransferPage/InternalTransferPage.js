// InternalTransferPage.js
import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Autocomplete,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const InternalTransferPage = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    Internal_Transfer_No: "",
    grn_date: "",
    challan_no: "",
    challan_date: "",
    project_code: "",
    client_code: "",
    from_location: "",
    to_location: "",
    UWAY_Bill_Nbr: "",
    customer_invoice_nbr: "",
    route_code: "",
    client_delivery_challan: "",
    delivery_type_code: "",
    vehicle_number: "",
    sequences: [...Array(1)].map((_, index) => ({
      sequence_no: index + 1,
      asset_code: "",
      asset_status: "",
      subcomponents_attached: [],
      subcomponentDetails: {},
      remarks: "",
    })),
  });

  const handleInputChange =
    (field, index = null) =>
    (e) => {
      if (index !== null) {
        const newSequences = [...formData.sequences];
        newSequences[index][field] = e.target.value;
        setFormData({ ...formData, sequences: newSequences });
      } else {
        setFormData({ ...formData, [field]: e.target.value });
      }
    };

  const handleSubcomponentChange = (newValue, index) => {
    setFormData((prevData) => {
      const newSequences = [...prevData.sequences];
      newSequences[index].subcomponents_attached = newValue;
      newSequences[index].subcomponentDetails = newValue.reduce(
        (acc, subcomponent) => {
          acc[subcomponent] = { quantity: "", unit: "", status: "" };
          return acc;
        },
        {}
      );
      return { ...prevData, sequences: newSequences };
    });
  };

  const handleSubcomponentDetailChange = (
    index,
    subcomponent,
    field,
    value
  ) => {
    const newSequences = [...formData.sequences];
    newSequences[index].subcomponentDetails[subcomponent][field] = value;
    setFormData({ ...formData, sequences: newSequences });
  };

  const addSequenceRow = () => {
    setFormData({
      ...formData,
      sequences: [
        ...formData.sequences,
        {
          sequence_no: formData.sequences.length + 1,
          asset_code: "",
          asset_status: "",
          subcomponents_attached: [],
          subcomponentDetails: {},
          remarks: "",
        },
      ],
    });
  };

  const projectCodes = ["Project1", "Project2"];
  const clientCodes = ["Client1", "Client2"];
  const locations = ["Location1", "Location2"];
  const routeCodes = ["Route1", "Route2"];
  const clientDeliveryChallanOptions = ["Y", "N"];
  const deliveryTypeCodes = ["Internal", "External"];
  const assetCodes = ["Asset1", "Asset2"];
  const status = ["InProgress", "Done"];
  const units = ["KG", "Pounds"];
  const assetStatuses = ["Active", "Inactive"];
  const subcomponentOptions = [
    "Subcomponent 1",
    "Subcomponent 2",
    "Subcomponent 3",
    "Subcomponent 4",
  ];

  const handleNext = () => {
    setPage(2);
  };

  const handleBack = () => {
    setPage(1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div>
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
      <h2>Internal Transfer (Edit/Modify/Delete)</h2>
      <form onSubmit={handleSubmit}>
        {page === 1 ? (
          <>
            <Grid container spacing={2}>
              {/* First part of the form - Left Side */}
              <Grid item xs={6}>
                <TextField
                  label="Internal Transfer No"
                  fullWidth
                  value={formData.Internal_Transfer_No}
                  onChange={handleInputChange("Internal_Transfer_No")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="GRN Date"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={formData.grn_date}
                  onChange={handleInputChange("grn_date")}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  label="Delivery Challan No"
                  fullWidth
                  value={formData.challan_no}
                  onChange={handleInputChange("challan_no")}
                />
              </Grid>

              {/* Delivery Challan Date */}
              <Grid item xs={6}>
                <TextField
                  label="Delivery Challan Date"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={formData.challan_date}
                  onChange={handleInputChange("challan_date")}
                />
              </Grid>

              {/* Project Code */}
              <Grid item xs={6}>
                <TextField
                  label="Project Code"
                  select
                  fullWidth
                  value={formData.project_code}
                  onChange={handleInputChange("project_code")}
                >
                  {projectCodes.map((project) => (
                    <MenuItem key={project} value={project}>
                      {project}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* Client Code */}
              <Grid item xs={6}>
                <TextField
                  label="Client Code"
                  select
                  fullWidth
                  value={formData.client_code}
                  onChange={handleInputChange("client_code")}
                >
                  {clientCodes.map((client) => (
                    <MenuItem key={client} value={client}>
                      {client}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* From Location Code */}
              <Grid item xs={6}>
                <TextField
                  label="From Location Code"
                  select
                  fullWidth
                  value={formData.from_location}
                  onChange={handleInputChange("from_location")}
                >
                  {locations.map((location) => (
                    <MenuItem key={location} value={location}>
                      {location}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* To Location Code */}
              <Grid item xs={6}>
                <TextField
                  label="To Location Code"
                  select
                  fullWidth
                  value={formData.to_location}
                  onChange={handleInputChange("to_location")}
                >
                  {locations.map((location) => (
                    <MenuItem key={location} value={location}>
                      {location}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* EWAY Bill Number */}
              <Grid item xs={6}>
                <TextField
                  label="UWAY Bill Nbr"
                  fullWidth
                  value={formData.UWAY_Bill_Nbr}
                  onChange={handleInputChange("UWAY_Bill_Nbr")}
                />
              </Grid>

              {/* Customer Invoice Number */}
              <Grid item xs={6}>
                <TextField
                  label="Customer Invoice Number"
                  fullWidth
                  value={formData.customer_invoice_nbr}
                  onChange={handleInputChange("customer_invoice_nbr")}
                />
              </Grid>

              {/* Route Code */}
              <Grid item xs={6}>
                <TextField
                  label="Route Code"
                  select
                  fullWidth
                  value={formData.route_code}
                  onChange={handleInputChange("route_code")}
                >
                  {routeCodes.map((route) => (
                    <MenuItem key={route} value={route}>
                      {route}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* Client Delivery Challan */}
              <Grid item xs={6}>
                <TextField
                  label="Client Delivery Challan"
                  select
                  fullWidth
                  value={formData.client_delivery_challan}
                  onChange={handleInputChange("client_delivery_challan")}
                >
                  {clientDeliveryChallanOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* Delivery Type Code */}
              <Grid item xs={6}>
                <TextField
                  label="Delivery Type Code"
                  select
                  fullWidth
                  value={formData.delivery_type_code}
                  onChange={handleInputChange("delivery_type_code")}
                >
                  {deliveryTypeCodes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* Vehicle Number */}
              <Grid item xs={6}>
                <TextField
                  label="Vehicle Number"
                  fullWidth
                  value={formData.vehicle_number}
                  onChange={handleInputChange("vehicle_number")}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              style={{ marginTop: 20 }}
            >
              Next
            </Button>
          </>
        ) : (
          <>
            <Grid item xs={12}>
              {formData.sequences.map((sequence, index) => (
                <Accordion
                  key={index}
                  defaultExpanded={index === 0}
                  sx={{ mb: 2 }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ marginBottom: "10px" }}>
                      Sequence No{" "}
                      {String(sequence.sequence_no).padStart(2, "0")}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <TextField
                          label="Sequence No"
                          value={sequence.sequence_no}
                          disabled
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          label="Asset Code/ID"
                          select
                          fullWidth
                          value={sequence.asset_code}
                          onChange={handleInputChange("asset_code", index)}
                        >
                          {assetCodes.map((asset) => (
                            <MenuItem key={asset} value={asset}>
                              {asset}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          label="Asset Status"
                          select
                          fullWidth
                          value={sequence.asset_status}
                          onChange={handleInputChange("asset_status", index)}
                        >
                          {assetStatuses.map((status) => (
                            <MenuItem key={status} value={status}>
                              {status}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <Autocomplete
                          multiple
                          options={subcomponentOptions}
                          value={sequence.subcomponents_attached}
                          onChange={(event, newValue) =>
                            handleSubcomponentChange(newValue, index)
                          }
                          renderInput={(params) => (
                            <TextField {...params} label="Subcomponents" />
                          )}
                          fullWidth
                        />
                      </Grid>

                      {sequence.subcomponents_attached.map((subcomponent) => (
                        <Grid item xs={12} key={subcomponent}>
                          <Box
                            sx={{
                              border: "1px solid #ccc",
                              borderRadius: "8px",
                              padding: "10px",
                            }}
                          >
                            <Typography
                              variant="subtitle1"
                              sx={{ fontWeight: "bold", marginBottom: 2 }}
                            >
                              {subcomponent}
                            </Typography>

                            <Grid container spacing={2} alignItems="center">
                              <Grid item xs={4}>
                                <TextField
                                  label="Quality"
                                  type="number"
                                  size="small"
                                  value={
                                    sequence.subcomponentDetails[subcomponent]
                                      ?.quantity || ""
                                  }
                                  onChange={(e) =>
                                    handleSubcomponentDetailChange(
                                      index,
                                      subcomponent,
                                      "quantity",
                                      e.target.value
                                    )
                                  }
                                  fullWidth
                                />
                              </Grid>

                              <Grid item xs={4}>
                                <TextField
                                  label="Unit"
                                  size="small"
                                  select
                                  value={
                                    sequence.subcomponentDetails[subcomponent]
                                      ?.unit || ""
                                  }
                                  onChange={(e) =>
                                    handleSubcomponentDetailChange(
                                      index,
                                      subcomponent,
                                      "unit",
                                      e.target.value
                                    )
                                  }
                                  fullWidth
                                >
                                  {units.map((asset) => (
                                    <MenuItem key={asset} value={asset}>
                                      {asset}
                                    </MenuItem>
                                  ))}
                                </TextField>
                              </Grid>

                              <Grid item xs={4}>
                                <TextField
                                  label="Status"
                                  size="small"
                                  select
                                  value={
                                    sequence.subcomponentDetails[subcomponent]
                                      ?.status || ""
                                  }
                                  onChange={(e) =>
                                    handleSubcomponentDetailChange(
                                      index,
                                      subcomponent,
                                      "status",
                                      e.target.value
                                    )
                                  }
                                  fullWidth
                                >
                                  {status.map((asset) => (
                                    <MenuItem key={asset} value={asset}>
                                      {asset}
                                    </MenuItem>
                                  ))}
                                </TextField>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              ))}

              <Button
                variant="outlined"
                color="primary"
                onClick={addSequenceRow}
                sx={{ marginRight: 2, marginTop: 2 }}
              >
                Add Sequence
              </Button>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleSubmit}
                sx={{ marginTop: 2 }}
              >
                Submit
              </Button>
            </Grid>
          </>
        )}
        {/* Sequence Information Section */}
      </form>
    </div>
  );
};

export default InternalTransferPage;
