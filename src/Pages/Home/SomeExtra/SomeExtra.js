import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import pajero from "../../../images/pajero.jpg";
import mitsubishi from "../../../images/Mitsubishi.jpg";

const someBg = {
  background: `url(${mitsubishi})`,
  marginTop: 100,
  paddingTop: 25,
  height: 450,
};

const SomeExtra = () => {
  return (
    <Box style={someBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item style={{ textAlign: "left" }} xs={12} md={6}>
          <Typography
            variant="h3"
            color="green"
            sx={{
              fontSize: 40,
              textAlign: "left",
              fontStyle: "italic",
              color: "#1d3557",
              fontWeight: "bold",
            }}
          >
            Get in touch
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: 40,
              textAlign: "right",
              fontStyle: "italic",
              color: "#1d3557",
            }}
          >
            and let us know how we can help
          </Typography>

          <br />
          <br />
        </Grid>
      </Grid>
      {/* <Button
        style={{ color: "green" }}
        sx={{ pt: 4, fontSize: 18, fontWeight: "bold" }}
      >
        Learn More
      </Button> */}
    </Box>
  );
};

export default SomeExtra;
