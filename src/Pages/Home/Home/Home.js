import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Product from "../Product/Product";
import SomeExtra from "../SomeExtra/SomeExtra";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
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
          " QUALITY IS NOT EXPENSIVE, IT'S PRICELESS "
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mt: 2,
            mb: 5,
            fontSize: 24,
            color: "gray",
            fontWeight: "400",
          }}
        >
          Our Vision: CarSensors believes that customer deserves fairness,
          quality service and on time delivery. CarSensors will deliver
          excellence and will not compromise with customer satisfaction.
        </Typography>
      </Box>

      <Box>
        <Typography
          variant="h3"
          sx={{
            mt: 10,
            mb: 3,
            fontStyle: "italic",
            color: "#dc2f02",
            fontWeight: "bold",
          }}
        >
          OUR VEHICLE SERVICES
        </Typography>
        <Typography
          variant="h5"
          sx={{
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
            {products.slice(0, 6).map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </Grid>
        </Container>
      </Box>
      <SomeExtra></SomeExtra>
      <Brands></Brands>
      <Footer></Footer>
    </div>
  );
};

export default Home;
