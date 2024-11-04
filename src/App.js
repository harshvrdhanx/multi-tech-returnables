import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"; // Adapter for DateFns
import LoginPage from "./components/LoginPage/loginPage";
import ProjectInfoPage from "./components/ProjectInfoPage/ProjectInfoPage";
import UserRegistration from "./components/UserRegistration/UserRegistration";
import AssetRegistration from "./components/AssetRegistration/AssetRegistration";
import ClientRegistration from "./components/ClientRegistration/ClientRegistration";
import DeliveryChallanPage from "./components/DeliveryChallanPage/DeliveryChallanPage";
import GRNPage from "./components/GRNPage/GRNPage";
import InternalTransferPage from "./components/InternalTransferPage/InternalTransferPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("isLoggedIn");
  });

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              !isLoggedIn ? (
                <LoginPage onLogin={handleLogin} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <ProjectInfoPage onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/user-registration"
            element={
              isLoggedIn ? <UserRegistration /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/asset-registration"
            element={
              isLoggedIn ? <AssetRegistration /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/client-registration"
            element={
              isLoggedIn ? <ClientRegistration /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/delivery-challan"
            element={
              isLoggedIn ? <DeliveryChallanPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/grn"
            element={isLoggedIn ? <GRNPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/internal-transfer"
            element={
              isLoggedIn ? <InternalTransferPage /> : <Navigate to="/login" />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </LocalizationProvider>
  );
}

export default App;
