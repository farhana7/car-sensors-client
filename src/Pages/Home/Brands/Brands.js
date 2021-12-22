import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Brand from "../Brand/Brand";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="h3"
          sx={{
            mt: 10,
            mb: 10,
            fontStyle: "italic",
            fontWeight: "bold",
            color: "#9b2226",
          }}
        >
          We Service _________________________
        </Typography>

        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {brands.map((brand) => (
              <Brand key={brand.id} brand={brand}></Brand>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Brands;
