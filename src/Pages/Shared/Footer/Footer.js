import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box>
      <Typography
        variant="h6"
        style={{ backgroundColor: "#000000" }}
        sx={{ mt: 5, fontSize: 13, fontWeight: 300, color: "#ffffff" }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            mt: 1,

            textAlign: "center",
            fontWeight: "bold",
            fontSize: 40,
            color: "#ae2012",
            flexGrow: 1,
          }}
        >
          Car Sensors<span style={{ fontSize: 20 }}>.com</span>
        </Typography>
        <Typography>Open: 9am - 6pm || Helpline: +81996777000</Typography>
        <br />
        Copyright, 2021 Car sensors.com Ltd. and its subsidiaries and
        affiliates. © All Rights Reserved.
        <br />
        <br />
        <Typography>
          Home || Site Map || Terms and Conditions || Privacy Policy || Cookie
          Policy || Newsletter
        </Typography>
      </Typography>
    </Box>
  );
};

export default Footer;
