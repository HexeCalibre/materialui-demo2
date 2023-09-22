import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";

const AppBarMUI = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <AdbIcon sx={{ mr: 2, display: { xs: "none", md: "flex" } }} />
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                textDecoration: "none",
                color: "inherit",
                display: { xs: "none", md: "flex" },
              }}
            >
              My Website
            </Typography>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button sx={{ color: "inherit" }} href="/">
                Home
              </Button>
              <Button sx={{ color: "inherit" }} href="/">
                About
              </Button>
              <Button sx={{ color: "inherit" }} href="/">
                Profile
              </Button>
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton size="large" color="inherit" onClick={handleClick}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              <MenuItem onClick={handleClose}>Home</MenuItem>
              <MenuItem onClick={handleClose}>About</MenuItem>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Menu>

            <AdbIcon sx={{ mr: 2, display: { xs: "flex", md: "none" } }} />
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                textDecoration: "none",
                color: "inherit",
                display: { xs: "flex", md: "none" },
              }}
            >
              My Website
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default AppBarMUI;
