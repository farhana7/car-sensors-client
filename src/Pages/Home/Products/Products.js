import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Box>
      <Navigation></Navigation>
      <Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h3"
            sx={{
              mt: 5,
              fontStyle: "italic",
              fontWeight: "bold",
              color: "#403d39",
            }}
          >
            VEHICLE SERVICES
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mt: 5,
              mb: 10,
              fontSize: 24,
              color: "gray",
              fontWeight: "400",
            }}
          >
            From oil changes to brakes, tires, filters and more, with our fast,
            convenient expanded services, You Can Do More in a CarSensors.com
          </Typography>
          <Container>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {products.map((product) => (
                <Product key={product.id} product={product}></Product>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
      <Footer></Footer>
    </Box>
  );
};

export default Products;
