import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import safari from "../../../images/safari.jpg";
import { Typography } from "@mui/material";

const bannerBg = {
  background: `url(${safari})`,
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 700,

  //   border: "1px solid red",
};

const Banner = () => {
  return (
    <Box style={bannerBg} sx={{ mt: 2, flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item style={{ textAlign: "left" }} xs={12} md={6}>
          <Box>
            <Typography variant="h4" sx={{ mt: 3, color: "#403d39" }}>
              One of the Best in ...
            </Typography>
            <Typography variant="h2">Automotive Industries</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          {/* <img style={{ width: "auto" }} src={bann} alt="" /> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
