import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const Main = ({ main }) => {
  const { name, imag } = main;

  return (
    <Box>
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
            image={imag}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="h2" color="#403d39" component="div">
              {name}
            </Typography>
            <br />
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default Main;
