/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Box,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProjectInfoPage = ({ onLogout }) => {
  const [projectData, setProjectData] = useState({
    clientName: "",
    projectCode: "",
    startDate: "",
    endDate: "",
    numberOfBoxes: "",
  });
  const [selectedClientName, setSelectedClientName] = useState("");
  const [clientNameList, setClientNameList] = useState(null);
  const [projectCode, setProjectCode] = useState(null);

  // Simulating fetching data from an API
  useEffect(() => {
    // Example API response, replace with actual API call
    const fetchData = async () => {
      const apiData = {
        clientName: ["Client XYZ", "Client abc"],
        projectCode: "PRJ123",
        startDate: "2024-01-01",
        endDate: "2024-12-31",
        numberOfBoxes: "1000",
      };
      setClientNameList(
        apiData?.clientName.map((data) => ({
          label: data,
          value: data,
        }))
      );
      setProjectCode(apiData?.projectCode);
      setProjectData(apiData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(clientNameList);
  }, [clientNameList]);

  const dropdownStyle = {
    width: "500px",
  };

  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          Project Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Client Name</InputLabel>
                <Select
                  labelId="dropdown-label"
                  value={selectedClientName}
                  onChange={(e) => {
                    setSelectedClientName(e.target.value);
                  }}
                  label="Select an Option"
                  style={dropdownStyle}
                >
                  {clientNameList?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
          </Grid>
          <Grid item xs={6}>
            {/* <label>Project Code</label> */}
            <TextField
              label="Project Code"
              fullWidth
              value={projectCode}
              onChange={(e) => setProjectCode(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Start Date"
              fullWidth
              value={projectData.startDate}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="End Date"
              fullWidth
              value={projectData.endDate}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Number of Boxes"
              fullWidth
              value={projectData.numberOfBoxes}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </Grid>
        </Grid>

        {/* Navigation Buttons */}
        <Box mt={4} display="flex" gap={2}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/user-registration"
          >
            System User Registration
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/asset-registration"
          >
            Asset Registration
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/client-registration"
          >
            Client Registration
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/client-location"
          >
            Client Location
          </Button>
           <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/client-route"
          >
            Client Route
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/delivery-challan"
          >
            Delivery Challan
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/grn"
          >
            GRN
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/internal-transfer"
          >
            Internal Transfer
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={onLogout}
            sx={{ ml: "auto" }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProjectInfoPage;
