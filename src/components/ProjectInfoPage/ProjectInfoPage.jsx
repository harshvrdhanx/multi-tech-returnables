import React, { useEffect, useState } from "react";
import AodIcon from '@mui/icons-material/Aod';
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
  Drawer,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  CssBaseline,
  IconButton,

} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import UserRegistration from "../UserRegistration/UserRegistration";
import AssetRegistration from "../AssetRegistration/AssetRegistration";
import ClientRegistration from "../ClientRegistration/ClientRegistration";
import ClientRoute from "../ClientRoute/ClientRoute";
import DeliveryChallan from "../DeliveryChallanPage/DeliveryChallanPage";
import GRN from "../GRNPage/GRNPage";
import InternalTransfer from "../InternalTransferPage/InternalTransferPage";

const formComponents = {
  "User Registration": <UserRegistration />,
  "Asset Registration": <AssetRegistration />,
  "Client Registration": <ClientRegistration />,
  "Client Route": <ClientRoute />,
  "Delivery Challan": <DeliveryChallan/>,
  GRN: <GRN />,
  "Internal Transfer": <InternalTransfer />,
};

const Sidebar = ({
  formKeys,
  setSelectedForm,
  mobileOpen,
  handleDrawerToggle,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={isMobile ? mobileOpen : true}
      onClose={handleDrawerToggle}
      sx={{
        width: isMobile ? "auto" : 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          marginTop: "64px",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <Typography variant="subtitle1" sx={{ p: 2, fontWeight: "bold" }}>
          Forms
        </Typography>
        <List>
          {formKeys.map((form, index) => (
            <ListItem button key={index} onClick={() => {
              setSelectedForm(form) 
              handleDrawerToggle()
            }}>
             <AodIcon sx={{ mx:"5%" }}/> <ListItemText primary={form} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

const ProjectForm = ({ clientNameList, projectData, setShowForms }) => (
  <Container maxWidth="md" sx={{ mt: 5, textAlign: "center" }}>
    <Typography variant="h6" fontWeight="bold">
      Project Information
    </Typography>
    <Grid container spacing={3} mt={2}>
      <Grid item xs={12}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Client Name</InputLabel>
          <Select defaultValue="" label="Client Name">
            {clientNameList?.map(({ value }) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      {Object.entries(projectData).map(([key, value]) => (
        <Grid item xs={12} key={key}>
          <TextField
            label={key}
            fullWidth
            variant="outlined"
            value={value}
            InputProps={{ readOnly: true }}
          />
        </Grid>
      ))}
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => setShowForms(true)}
        >
          FORMS
        </Button>
      </Grid>
    </Grid>
  </Container>
);

const ProjectInfoPage = ({ onLogout }) => {
  const formKeys = Object.keys(formComponents);
  const [selectedForm, setSelectedForm] = useState(formKeys[0]);
  const [showForms, setShowForms] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [clientNameList, setClientNameList] = useState([]);
  const [projectData, setProjectData] = useState({});

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setClientNameList([
      { label: "Client XYZ", value: "Client XYZ" },
      { label: "Client abc", value: "Client abc" },
    ]);
    setProjectData({
      projectCode: "PRJ123",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      numberOfBoxes: "1000",
    });
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
        {isMobile && (
            <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ flexGrow: 1, color: "#FFF" }}>
            Multitech Returnable
          </Typography>
          <Button color="inherit" onClick={onLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      {showForms && (
        <Sidebar formKeys={formKeys} setSelectedForm={setSelectedForm} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
      )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: showForms ? (isMobile ? "100%" : "calc(100% - 140px)") : "100%",
          ml: showForms ? (isMobile ? 0 : "0px") : 0,
          mt: 8,
        }}
      >
        {!showForms ? (
          <ProjectForm
            clientNameList={clientNameList}
            projectData={projectData}
            setShowForms={setShowForms}
            formKeys={formKeys}
          />
        ) : (
          <Box sx={{ width: "100%", maxWidth: "1200px", mx: "0" }}>
            {formComponents[selectedForm]}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProjectInfoPage;
