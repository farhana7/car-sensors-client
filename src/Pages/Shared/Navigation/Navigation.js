import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#403d39", height: "90px" }}
      >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              mt: 1,
              fontStyle: "italic",
              textAlign: "left",
              fontWeight: "bold",
              fontSize: 45,
              color: "#dc2f02",
              flexGrow: 1,
            }}
          >
            Car Sensors<span style={{ fontSize: 20 }}>.com</span>
          </Typography>

          <NavLink style={{ textDecoration: "none" }} to="/home">
            <Button
              sx={{
                // fontWeight: "bold",
                fontSize: 17,
                color: "white",
              }}
            >
              Home
            </Button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/about">
            <Button
              sx={{
                // fontWeight: "bold",
                fontSize: 17,
                color: "white",
              }}
            >
              About us
            </Button>
          </NavLink>

          <NavLink style={{ textDecoration: "none" }} to="/products">
            <Button
              sx={{
                // fontWeight: "bold",
                fontSize: 17,
                color: "white",
              }}
            >
              Explore
            </Button>
          </NavLink>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;