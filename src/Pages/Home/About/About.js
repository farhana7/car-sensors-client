import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";

// const aboutBg = {
//   background: `url(${})`,
//   marginTop: 100,
//   paddingTop: 25,
//   height: 450,
// };

const About = () => {
  return (
    <Box>
      <Navigation></Navigation>
      <Box>
        <Typography
          variant="h3"
          sx={{
            mt: 20,
            fontStyle: "italic",
            fontWeight: "bold",
            color: "#403d39",
          }}
        >
          About Us
        </Typography>
        {/* 
    <Box style={} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{
              width: "auto",
              marginTop: "-25px",
              height: 389,
            }}
            src={company}
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            color="green"
            sx={{
              textAlign: "left",
              fontSize: 17,
              fontWeight: "400",
              fontStyle: "italic",
            }}
          >
           
          </Typography>
        </Grid>
      </Grid>
      <Button
        style={{ color: "green" }}
        sx={{ pt: 4, fontSize: 18, fontWeight: "bold" }}
      >
        Learn More
      </Button>
    </Box> */}
      </Box>
      <Footer></Footer>
    </Box>
  );
};

export default About;
