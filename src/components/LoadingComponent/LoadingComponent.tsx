import React from "react";
import { Grid, Typography } from "@mui/material";

const LoadingComponent = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="h2" component="h2">
        Loading
      </Typography>
    </Grid>
  );
};

export default LoadingComponent;
