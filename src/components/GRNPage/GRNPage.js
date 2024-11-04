import React from "react"; //, {useEffect}
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
} from "@mui/material";
// import axios from 'axios';
import HomeButton from "../HomeButton";

const GRNPage = () => {
  // State to store picklist data     --a
  // const [projectCodes, setProjectCodes] = useState([]);
  // const [clientCodes, setClientCodes] = useState([]);
  // const [locationCodes, setLocationCodes] = useState([]);
  // const [routeCodes, setRouteCodes] = useState([]);
  // const [assetCodes, setAssetCodes] = useState([]);
  // const [assetStatuses, setAssetStatuses] = useState([]);

  // Fetch data from the API for dropdown fields      --b
  // useEffect(() => {
  //   // Example API calls (adjust the URLs according to your API)
  //   axios.get('/api/project-codes').then(response => setProjectCodes(response.data));
  //   axios.get('/api/client-codes').then(response => setClientCodes(response.data));
  //   axios.get('/api/location-codes').then(response => setLocationCodes(response.data));
  //   axios.get('/api/route-codes').then(response => setRouteCodes(response.data));
  //   axios.get('/api/asset-codes').then(response => setAssetCodes(response.data));
  //   axios.get('/api/asset-statuses').then(response => setAssetStatuses(response.data));
  // }, []);

  // uncomment --a, --b and below, and comment the hardcoded codes section.
  // const rows = [...Array(8).keys()].map((index) => ({
  //   sequence: index + 1,
  //   assetCode: '', // Placeholder for asset code value
  //   assetStatus: '', // Placeholder for asset status value
  //   allSubcomponentsAttached: '', // Placeholder for Y/N choice
  //   remarks: '', // Placeholder for remarks
  // }));

  // Temporary static values for picklist fields
  const projectCodes = [
    { id: 1, value: "Proj001", label: "Project 001" },
    { id: 2, value: "Proj002", label: "Project 002" },
  ];

  const clientCodes = [
    { id: 1, value: "Client001", label: "Client 001" },
    { id: 2, value: "Client002", label: "Client 002" },
  ];

  const locationCodes = [
    { id: 1, value: "Loc001", label: "Location 001" },
    { id: 2, value: "Loc002", label: "Location 002" },
  ];

  const routeCodes = [
    { id: 1, value: "Route001", label: "Route 001" },
    { id: 2, value: "Route002", label: "Route 002" },
  ];

  const assetCodes = [
    { id: 1, value: "Asset001", label: "Asset 001" },
    { id: 2, value: "Asset002", label: "Asset 002" },
  ];

  const assetStatuses = [
    { id: 1, value: "Available", label: "Available" },
    { id: 2, value: "In Use", label: "In Use" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const rows = [...Array(8).keys()].map((index) => ({
    sequence: index + 1,
    assetCode: "", // Placeholder for asset code value
    assetStatus: "", // Placeholder for asset status value
    allSubcomponentsAttached: "", // Placeholder for Y/N choice
    remarks: "", // Placeholder for remarks
  }));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "100vh" }}
        >
          {/* GRN Form (First Half) */}
          <Grid item xs={10} margin={2}>
            <HomeButton />
          </Grid>
          <Grid item xs={10}>
            <h2>GRN (Edit/Modify/Delete)</h2>
          </Grid>
          <Grid item xs={5}>
            <TextField label="GRN No" fullWidth />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="GRN Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item xs={5}>
            <TextField label="Delivery Challan No" fullWidth />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="Delivery Challan Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item xs={5}>
            {/* Project Code dropdown populated with static values */}
            <TextField label="Project Code" select fullWidth>
              {projectCodes.map((code) => (
                <MenuItem key={code.id} value={code.value}>
                  {code.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={5}>
            {/* Client Code dropdown populated with static values */}
            <TextField label="Client Code" select fullWidth>
              {clientCodes.map((code) => (
                <MenuItem key={code.id} value={code.value}>
                  {code.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={5}>
            {/* From Location Code dropdown populated with static values */}
            <TextField label="From Location Code" select fullWidth>
              {locationCodes.map((code) => (
                <MenuItem key={code.id} value={code.value}>
                  {code.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={5}>
            {/* To Location Code dropdown populated with static values */}
            <TextField label="To Location Code" select fullWidth>
              {locationCodes.map((code) => (
                <MenuItem key={code.id} value={code.value}>
                  {code.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={5}>
            <TextField label="UWAY Bill Nbr" fullWidth />
          </Grid>
          <Grid item xs={5}>
            <TextField label="Customer Invoice Number" fullWidth />
          </Grid>

          <Grid item xs={5}>
            {/* Route Code dropdown populated with static values */}
            <TextField label="Route Code" select fullWidth>
              {routeCodes.map((code) => (
                <MenuItem key={code.id} value={code.value}>
                  {code.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={5}>
            <TextField label="Client Delivery Challan" select fullWidth>
              <MenuItem value="Y">Yes</MenuItem>
              <MenuItem value="N">No</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={5}>
            <TextField label="Delivery Type Code" select fullWidth>
              <MenuItem value="Internal">Internal</MenuItem>
              <MenuItem value="External">External</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={5}>
            <TextField label="Vehicle Number" fullWidth />
          </Grid>

          {/* Sequence Information Section */}
          <Grid item xs={9}>
            <h4>Sequence Information</h4>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Sequence No</TableCell>
                    <TableCell>Asset Code/ID</TableCell>
                    <TableCell>Asset Status</TableCell>
                    <TableCell>All Subcomponents Attached</TableCell>
                    <TableCell>Remarks</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.sequence}>
                      <TableCell>{row.sequence}</TableCell>
                      <TableCell>
                        {/* Asset Code dropdown populated with static values */}
                        <TextField
                          label="Asset Code/ID"
                          select
                          fullWidth
                          value={row.assetCode}
                          onChange={(e) => {
                            // Update asset code state if needed
                          }}
                        >
                          {assetCodes.map((code) => (
                            <MenuItem key={code.id} value={code.value}>
                              {code.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </TableCell>
                      <TableCell>
                        {/* Asset Status dropdown populated with static values */}
                        <TextField
                          label="Asset Status"
                          select
                          fullWidth
                          value={row.assetStatus}
                          onChange={(e) => {
                            // Update asset status state if needed
                          }}
                        >
                          {assetStatuses.map((status) => (
                            <MenuItem key={status.id} value={status.value}>
                              {status.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </TableCell>
                      <TableCell>
                        <TextField
                          label="All Subcomponents Attached"
                          select
                          fullWidth
                          value={row.allSubcomponentsAttached}
                          onChange={(e) => {
                            // Update Y/N choice if needed
                          }}
                        >
                          <MenuItem value="Y">Yes</MenuItem>
                          <MenuItem value="N">No</MenuItem>
                        </TextField>
                      </TableCell>
                      <TableCell>
                        <TextField
                          label="Remarks"
                          fullWidth
                          value={row.remarks}
                          onChange={(e) => {
                            // Update remarks if needed
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Grid item xs={12} margin={2}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default GRNPage;
