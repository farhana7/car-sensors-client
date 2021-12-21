import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const Brand = ({ brand }) => {
  const { name, image } = brand;

  return (
    <Box>
      <Typography sx={{ border: "1px solid green" }}></Typography>
      <br />
      <br />
      <Grid item sx={{ width: 200, mb: 5 }} xs={4} sm={4} md={4}>
        <Card
          sx={{
            minWidth: 275,
            mb: 1,
            border: 0,
            boxShadow: 0,
            // borderRadius: 0,
            // border: "1px solid #264653",
          }}
        >
          <CardMedia
            component="img"
            //   height="140"
            style={{ width: "auto ", height: "80px", margin: "0 auto" }}
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="h5" color="#403d39" component="div">
              {name}
            </Typography>
            <br />
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default Brand;
