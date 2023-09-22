import { Button, Link, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

const MenuMUI = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const menuArray = [
    { name: "Option1", link: "https:/google.com" },
    { name: "Option2", link: "https:/facebook.com" },
    { name: "Option3", link: "https:/yahoo.com" },
  ];

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  return (
    <div>
      <>
        <Button variant="contained" onClick={handleClick}>
          Open Menu 1
        </Button>

        <Button variant="contained" onClick={handleClick}>
          Open Menu 2
        </Button>

        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {/* <MenuItem
            linkButton={true}
            containerElement={<Link to="https://google.com" />}
            onClose={handleClose}
          >
            Menu 1
          </MenuItem>
          <MenuItem onClose={handleClose}>Menu 2</MenuItem>
          <MenuItem onClose={handleClose}>Menu 3</MenuItem>
          <MenuItem component="a" href="https://google.com">
            Go to google
          </MenuItem> */}

          {menuArray.map((menu) => {
            return (
              <MenuItem component="a" href={menu.link} onClose={handleClose}>
                {menu.name}
              </MenuItem>
            );
          })}
        </Menu>
      </>
    </div>
  );
};

export default MenuMUI;
