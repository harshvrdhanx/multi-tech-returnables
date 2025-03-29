import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  MenuItem,
  Box,
  Grid,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker"; // Make sure to install @mui/x-date-pickers for date pickers.
import HomeButton from "../HomeButton";
import { QRCodeCanvas } from "qrcode.react";

const AssetRegistration = () => {
  const [formData, setFormData] = useState({
    assetId: "",
    userType: "",
    assetInceptionDate: null,
    nextInspectionDate: null,
    currentStatus: "",
    currentClientCode: "",
  });

  const [isQRCodeReady, setIsQRCodeReady] = useState(false);

  const clientCodes = ["Client1", "Client2"];
  const assetStatuses = ["Active", "Inactive"];
  const userType = ["New", "Old"];

  useEffect(() => {
    if (formData.qrCode) {
      setIsQRCodeReady(true);
    }
  }, [formData.qrCode]);

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleDateChange = (field) => (newValue) => {
    setFormData({ ...formData, [field]: newValue });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  const handleDownloadQRCode = () => {
    const qrCodeCanvas = document.getElementById("qrCodeCanvas");
    const pngUrl = qrCodeCanvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr_code.png";
    downloadLink.click();
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <HomeButton />
      <Grid container spacing={4}>
        {/* Left Side: Form */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Asset Registration
          </Typography>

          {/* Dropdown for Asset ID */}
          {/* <TextField
            label="Asset ID"
            select
            fullWidth
            margin="normal"
            value={formData.assetId}
            onChange={handleInputChange("assetId")}
          >
            <MenuItem value="ASSET001">ASSET001</MenuItem>
            <MenuItem value="ASSET002">ASSET002</MenuItem>
          </TextField> */}

          <TextField
            label="Asset ID"
            fullWidth
            margin="normal"
            value={formData.assetId}
            onChange={(e) =>
              setFormData({ ...formData, assetId: e.target.value })
            }
          />

          {/* QR Code Input */}

          {/* Date Pickers */}
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="User Type"
              fullWidth
              select
              margin="normal"
              value={formData.userType}
              onChange={(e) =>
                setFormData({ ...formData, userType: e.target.value })
              }
            >
              {userType.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>

            <DatePicker
              label="Asset Inception Date"
              value={formData.assetInceptionDate}
              onChange={handleDateChange("assetInceptionDate")}
              renderInput={(params) => (
                <TextField {...params} fullWidth margin="normal" />
              )}
            />
            <DatePicker
              label="Next Inspection Date"
              value={formData.nextInspectionDate}
              onChange={handleDateChange("nextInspectionDate")}
              renderInput={(params) => (
                <TextField {...params} fullWidth margin="normal" />
              )}
            />
          </Box>

          {/* Dropdown for Current Status */}
          <TextField
            label="Current Status"
            select
            fullWidth
            margin="normal"
            value={formData.currentStatus}
            onChange={handleInputChange("currentStatus")}
          >
            {assetStatuses.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>

          {/* Dropdown for Current Client Code */}
          <TextField
            label="Current Client Code"
            select
            fullWidth
            margin="normal"
            value={formData.currentClientCode}
            onChange={handleInputChange("currentClientCode")}
          >
            {clientCodes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>

          {/* Submit Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </Grid>

        {/* Right Side: QR Code and Download */}
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            {isQRCodeReady && (
              <QRCodeCanvas
                id="qrCodeCanvas"
                value={formData.qrCode || "No QR Code Data"}
                size={200}
                bgColor="#ffffff"
                fgColor="#000000"
                level="Q"
                includeMargin={true}
              />
            )}

            <Button
              variant="outlined"
              onClick={handleDownloadQRCode}
              sx={{ mt: 2 }}
            >
              Download QR Code
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AssetRegistration;
