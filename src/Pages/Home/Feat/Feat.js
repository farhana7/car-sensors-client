import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Feat = ({ feat }) => {
  const { name, im } = feat;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid item sx={{ width: 300, mb: 5 }} xs={4} sm={4} md={4}>
        <Card
          sx={{
            minWidth: 275,
            mb: 1,
            border: 0,
            boxShadow: 0,
            backgroundColor: "#ffffff",
            // borderRadius: 0,
            // border: "1px solid #264653",
          }}
        >
          <CardMedia
            component="img"
            //   height="140"
            style={{ width: "auto ", height: "100px", margin: "0 auto" }}
            image={im}
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

export default Feat;
