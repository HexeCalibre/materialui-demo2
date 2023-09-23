import { Box, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

const GridMUI = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h5">Grid System</Typography>

      <Grid container spacing="20px">
        <Grid item xs={12} sm={3} md={3} lg={2}>
          <Box bgcolor="primary.main" color="white">
            Box
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={2}>
          <Box bgcolor="primary.main" color="white">
            Box
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={2}>
          <Box bgcolor="primary.main" color="white">
            Box
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={4} lg={2}>
          <Box bgcolor="primary.main" color="white">
            Box
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GridMUI;
