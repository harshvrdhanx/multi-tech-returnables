import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

const StepProgress = ({ currentStep, totalSteps }) => {
    const progress = (currentStep / totalSteps) * 100;

    return (
        <Box sx={{ width: "100%", marginTop: '30px', marginBottom: '30px' }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                {currentStep !== totalSteps ? (
                    <Typography sx={{ fontSize: "12px", color: "#1976D2" }}>
                        INFORMATION
                    </Typography>
                ) : (
                    <Typography sx={{ fontSize: "12px", color: "#1976D2" }}>
                        SEQUENCE
                    </Typography>
                )}

                <Typography sx={{ fontSize: "12px", color: "#757575" }}>
                    STEP {String(currentStep).padStart(2, "0")} OF {String(totalSteps).padStart(2, "0")}
                </Typography>
            </Box>

            <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                    height: 6,
                    borderRadius: 3,
                    mt: 1,
                    backgroundColor: "#e0e0e0",
                    "& .MuiLinearProgress-bar": {
                        backgroundColor: "#1976D2",
                    },
                }}
            />
        </Box>
    );
};

export default StepProgress;
