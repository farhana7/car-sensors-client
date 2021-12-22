import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Feat from "../Feat/Feat";

const Featured = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container sx={{ flexGrow: 1, mt: 10, backgroundColor: "#9b2226" }}>
        <Typography
          variant="h2"
          sx={{ mt: 3, color: "#ffffff", fontStyle: "italic", flexGrow: 1 }}
        >
          {" "}
          20 minutes Oil change, First time & Fastest in the country
        </Typography>
      </Container>
      <Typography
        variant="h3"
        sx={{
          mt: 15,
          mb: 15,
          //   fontStyle: "italic",
          color: "#403d39",
          flexGrow: 1,
          //   fontWeight: "bold",
        }}
      >
        POPULAR CATEGORIES
      </Typography>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {features.map((feat) => (
            <Feat key={feat.id} feat={feat}></Feat>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Featured;
