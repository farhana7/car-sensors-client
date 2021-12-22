import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Main from "../Main/Main";

const Mains = () => {
  const [mains, setMains] = useState([]);

  useEffect(() => {
    fetch("mains.json")
      .then((res) => res.json())
      .then((data) => setMains(data));
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
            color: "#dc2f02",
          }}
        >
          We Service ---
        </Typography>

        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {mains.map((main) => (
              <Main key={main.id} main={main}></Main>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Mains;
