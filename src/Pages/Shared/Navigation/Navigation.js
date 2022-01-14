import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#403d39" }}>
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
          <NavLink style={{ textDecoration: "none" }} to="/about">
            <Button
              sx={{
                // fontWeight: "bold",
                fontSize: 17,
                color: "white",
              }}
            >
              About Us
            </Button>
          </NavLink>

          <NavLink style={{ textDecoration: "none" }} to="/myOrders">
            <Button
              sx={{
                // fontWeight: "bold",
                fontSize: 17,
                color: "white",
              }}
            >
              My Orders
            </Button>
          </NavLink>
          {/* <NavLink style={{ textDecoration: "none" }} to="/addAProduct">
            <Button
              sx={{
                // fontWeight: "bold",
                fontSize: 17,
                color: "#dc2f02",
              }}
            >
              Add Product
            </Button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/manageProducts">
            <Button
              sx={{
                // fontWeight: "bold",
                fontSize: 17,
                color: "#dc2f02",
              }}
            >
              Manage Products
            </Button>
          </NavLink> */}

          {user?.email ? (
            <Box>
              <Button
                sx={{
                  // fontWeight: "bold",
                  fontSize: 17,
                }}
                onClick={logOut}
                color="inherit"
              >
                Logout
              </Button>
            </Box>
          ) : (
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              <Button
                sx={{
                  // fontWeight: "bold",
                  fontSize: 17,
                }}
                color="inherit"
              >
                Login
              </Button>
            </NavLink>
          )}
          <>
            Signed in as:
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="/#login"
            >
              {user?.displayName}
            </a>
          </>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
