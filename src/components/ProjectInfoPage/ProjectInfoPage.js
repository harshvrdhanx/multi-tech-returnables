import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Box,
  Button,
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

  // Simulating fetching data from an API
  useEffect(() => {
    // Example API response, replace with actual API call
    const fetchData = async () => {
      const apiData = {
        clientName: "Client XYZ",
        projectCode: "PRJ123",
        startDate: "2024-01-01",
        endDate: "2024-12-31",
        numberOfBoxes: "1000",
      };
      setProjectData(apiData);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          Project Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Client Name"
              fullWidth
              value={projectData.clientName}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Project Code"
              fullWidth
              value={projectData.projectCode}
              InputProps={{
                readOnly: true,
              }}
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
