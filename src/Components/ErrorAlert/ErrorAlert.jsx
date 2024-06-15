import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
const ErrorAlert = ({error}) => {
  return (
    <Stack style={{zIndex:"1000"}} sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {error}
      </Alert>
    </Stack>
  );
};

export default ErrorAlert;
