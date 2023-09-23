import { Box, Grid, styled } from "@mui/material";
import React from "react";

const sxStyle = {
  width: 200,
  height: 100,
  border: "solid 10px blue",
};

const StyledBox = styled(Box)(({ theme }) => ({
  width: 200,
  height: 100,
  border: "solid 10px red",
}));

const inLineStyle = {
  width: 200,
  height: 100,
  border: "solid 10px brown",
};

const StyleMUI = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <Box sx={{ width: 200, height: 100, border: "solid 10px orange" }}>
            Direct Styling
          </Box>
        </Grid>

        <Grid item>
          <Box sx={sxStyle}>Styling variable</Box>
        </Grid>

        <Grid item>
          <StyledBox>Styled Components</StyledBox>
        </Grid>

        <Grid item>
          <Box style={inLineStyle} sx={sxStyle}>
            in Line Styling
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default StyleMUI;
