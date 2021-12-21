import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, description, img, price } = product;

  return (
    <Grid item sx={{ mb: 10 }} xs={4} sm={4} md={4}>
      <Card
        sx={{
          minWidth: 275,
          mb: 10,
          borderRadius: 0,
          // border: "1px solid #264653",
        }}
      >
        <CardMedia
          component="img"
          //   height="140"
          style={{ width: "400px ", height: "300px", margin: "0 auto" }}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" color="#403d39" component="div">
            {name}
          </Typography>
          <br />

          <Typography
            variant="body2"
            color="text.secondary"
            style={{ textAlign: "left" }}
          >
            {description}
          </Typography>
          <br />
          <Typography sx={{ mb: 1.5 }} color="#264653">
            Price : {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            style={{ textDecoration: "none" }}
            className="w-full"
            to={`/purchase/${_id}`}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "#264653",
                width: "350px",
                borderRadius: "0px",
              }}
              // size="medium"
            >
              Book now
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
