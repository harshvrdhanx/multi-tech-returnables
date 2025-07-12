import React, { useState, useEffect } from "react";
import {
  TextField,
  MenuItem,
  Grid,
  Button,
  Autocomplete,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  ListItemText,
  OutlinedInput
} from "@mui/material";
import StepProgress from "../shared/StepProgressBar/stepProgressBar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DeliveryChallanPage = () => {
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
    sequences: [],
  });
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [secondDropdownValue, setSecondDropdownValue] = useState("");
  const [showPage2Content, setShowPage2Content] = useState(false);
  const [dummyData, setDummyData] = useState([]);

  const handleInputChange = (field, index = null) => (e) => {
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
      const allowedSubcomponents = newSequences[index].subcomponents_default_attached; // Only allow operations on existing subcomponents
      const filteredNewValue = newValue.filter((subcomponent) =>
        allowedSubcomponents.includes(subcomponent)
      );

      newSequences[index].subcomponents_attached = filteredNewValue;
      newSequences[index].subcomponentDetails = filteredNewValue.reduce((acc, subcomponent) => {
        acc[subcomponent] = newSequences[index].subComponentDetails_default[subcomponent] || { quantity: "", unit: "", status: "" };
        return acc;
      }, {});
      return { ...prevData, sequences: newSequences };
    });
  };

  const handleSubcomponentDetailChange = (index, subcomponent, field, value) => {
    const newSequences = [...formData.sequences];
    newSequences[index].subcomponentDetails[subcomponent][field] = value;
    console.log('xq', newSequences[index].subcomponentDetails, index, subcomponent, field, value);
    setFormData({ ...formData, sequences: newSequences });
  };

  function isValidSubcomponentDetails(obj, attached) {
    return obj &&
      typeof obj === 'object' &&
      Object.values(obj).every(
        subcomponent =>
          subcomponent &&
          typeof subcomponent === 'object' &&
          'quantity' in subcomponent &&
          'unit' in subcomponent &&
          'status' in subcomponent
      );
  }

  function addSequenceRow2(subComponent) {
    const newSequences = [...formData.sequences];
    subComponent.forEach((subComp) => {
      const subcomponentDetails = subComp.subcomponents_attached.reduce((details, subcomponent) => {
        details[subcomponent] = { quantity: "", unit: "", status: "" };
        return details;
      }, {});
      newSequences.push({
        sequence_no: newSequences.length + 1,
        asset_code: "",
        asset_status: "",
        subcomponents_attached: subComp.subcomponents_attached || [],
        subcomponentDetails: isValidSubcomponentDetails(subComp?.subcomponentDetails) ? subComp.subcomponentDetails : subcomponentDetails,
        remarks: "",
        subcomponents_default_attached: subComp.subcomponents_attached || [],
        subComponentDetails_default: isValidSubcomponentDetails(subComp?.subcomponentDetails) ? subComp.subcomponentDetails : subcomponentDetails,
      });
    });

    setFormData({
      ...formData,
      sequences: newSequences,
    });
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

  const handleNext = () => {
    setPage(2);
  };

  const handleBack = () => {
    setPage(1);
    setShowPage2Content(false);
    setSelectedOptions([]);
    setFormData({ ...formData, sequences: [] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!showPage2Content) {
      console.log("Selected Options:", selectedOptions);
      console.log("Second Dropdown Value:", secondDropdownValue);
    } else {
      console.log("Form Data:", formData);
    }
  };

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((option) => option !== value)
        : [...prev, value]
    );
  };

  const handleConfirmationOk = () => {
    if (secondDropdownValue === "regular") {
      setShowPage2Content(true);
      const dummyComps = [ // data from API
        {sequence_no: 1, asset_code: "Asset1", asset_status: "Active", subcomponents_attached: ["Subcomponent 1", "Subcomponent 2"], subcomponentDetails: {
          "Subcomponent 1": { quantity: "2", unit: "", status: "" },
          "Subcomponent 2": { quantity: "", unit: "", status: "" }
        } },
        {sequence_no: 2, asset_code: "Asset2", asset_status: "Inactive", subcomponents_attached: ["Subcomponent 3", "Subcomponent 4"], subcomponentDetails: {
          "Subcomponent 3": { quantity: "3", unit: "", status: "" },
          "Subcomponent 4": { quantity: "", unit: "", status: "" }
        } },
        {sequence_no: 3, asset_code: "Asset2", asset_status: "Inactive", subcomponents_attached: ["Subcomponent 2", "Subcomponent 4"], subcomponentDetails: {
          "Subcomponent 2": { quantity: "1", unit: "", status: "" },
          "Subcomponent 4": { quantity: "", unit: "", status: "" }
        } },
      ];
      setDummyData(dummyComps);
      // handleSubcomponentChange(dummyComps, 0); // Reset subcomponents for the first sequence
    } else {
      setShowPage2Content(false);
    }
    setConfirmationOpen(false);
  };

  useEffect(() => {
    if(dummyData.length > 0){
      addSequenceRow2(dummyData)
    }
  }, [dummyData]);

  const handleSecondDropdownChange = (event) => {
    setSecondDropdownValue(event.target.value);
  };

  const handleOpenConfirmation = () => {
    setConfirmationOpen(true);
  };

  const handleCloseConfirmation = () => {
    setConfirmationOpen(false);
  };

  const projectCodes = ["Project1", "Project2"];
  const clientCodes = ["Client1", "Client2"];
  const locations = ["Location1", "Location2"];
  const routeCodes = ["Route1", "Route2"];
  const clientDeliveryChallanOptions = ["Y", "N"];
  const deliveryTypeCodes = ["Internal", "External"];
  const assetCodes = ["Asset1", "Asset2"];
  const status = ['InProgress', "Done"];
  const units = ["KG", "Pounds"];
  const assetStatuses = ["Active", "Inactive"];
  const subcomponentOptions = ["Subcomponent 1", "Subcomponent 2", "Subcomponent 3", "Subcomponent 4"];


  const dropdownOptions = ["Option 1", "Option 2", "Option 3"];
  const secondDropdownOptions = ["regular", "internal transfer", "repair", "other"];

  const handleDropdownChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions(typeof value === 'string' ? value.split(',') : value);
  };

  const handleDeleteSequence = (index) => {
    const newSequences = [...formData.sequences];
    newSequences.splice(index, 1);
    setFormData({ ...formData, sequences: newSequences });
  };

  return (
    <div>
      {page !== 1 && (
        <Button
          variant="contained"
          color="secondary"
          onClick={handleBack}
          style={{ marginTop: 20, marginRight: 10 }}
        >
          Back
        </Button>
      )}
      <h2>Delivery Challan (Edit/Modify/Delete)</h2>
      <form onSubmit={handleSubmit}>
        <StepProgress currentStep={page} totalSteps={2} />
        <div>
          {page === 1 ? (
            <>
              {/* Page 1 content */}
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="GRN No"
                    value={formData.grn_no}
                    onChange={handleInputChange("grn_no")}
                    fullWidth
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
                {/* Delivery Challan No */}
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
                    label="E-WAYBillNbr"
                    fullWidth
                    value={formData.eway_bill_nbr}
                    onChange={handleInputChange("eway_bill_nbr")}
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

                {/* Sequences */}
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
              {!showPage2Content ? (
                <>
                  <FormControl fullWidth>
                    <InputLabel>Select Asset Options</InputLabel>
                    <Select
                      multiple
                      value={selectedOptions}
                      onChange={handleDropdownChange}
                      input={<OutlinedInput label="Select Options" />}
                      renderValue={(selected) => selected.join(', ')}
                    >
                      {dropdownOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          <Checkbox checked={selectedOptions.indexOf(option) > -1} />
                          <ListItemText primary={option} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpenConfirmation}
                    style={{ marginTop: 20 }}
                  >
                    OK
                  </Button>
                </>
              ) : (
                <>
                  {/* Page 2 content */}
                  <Grid item xs={12}>
                    {formData.sequences.map((sequence, index) => (
                      <Accordion key={index} defaultExpanded={index === 0} sx={{ mb: 2 }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography sx={{ marginBottom: '10px' }}>
                            Sequence No {String(sequence.sequence_no).padStart(2, "0")}
                          </Typography>
                          <Button
                            variant="outlined"
                            color="error"
                            onClick={() => handleDeleteSequence(index)}
                            sx={{ marginLeft: 'auto' }}
                          >
                            Delete
                          </Button>
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
                                  <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 2 }}>
                                    {subcomponent}
                                  </Typography>

                                  <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={4}>
                                      <TextField
                                        label="Quality"
                                        type="number"
                                        size="small"
                                        value={sequence.subcomponentDetails[subcomponent]?.quantity || ""}
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
                                        value={sequence.subcomponentDetails[subcomponent]?.unit || ""}
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
                                          sequence.subcomponentDetails[subcomponent]?.status || ""}
                                        onChange={(e) =>
                                          handleSubcomponentDetailChange(
                                            index,
                                            subcomponent,
                                            "status",
                                            e.target.value
                                          )
                                        }
                                        fullWidth
                                      >{status.map((asset) => (
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

                    <Button variant="contained" color="primary" type="submit" onClick={handleSubmit} sx={{ marginTop: 2 }}>
                      Submit
                    </Button>
                  </Grid>
                </>
              )}
              {/* <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleSubmit}
                sx={{ marginTop: 2 }}
              >
                Submit
              </Button> */}
            </>
          )}
        </div>
      </form>

      {/* Confirmation Dialog */}
      <Dialog open={confirmationOpen} onClose={handleCloseConfirmation}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to proceed?</Typography>
          <TextField
            label="Select Option"
            select
            fullWidth
            value={secondDropdownValue}
            onChange={handleSecondDropdownChange}
            style={{ marginTop: 20 }}
          >
            {secondDropdownOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmation} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleConfirmationOk} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeliveryChallanPage;
