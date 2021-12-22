import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

// const aboutBg = {
//   background: `url(${})`,
//   marginTop: 100,
//   paddingTop: 25,
//   height: 450,
// };

const About = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box>
        <Typography
          variant="h3"
          sx={{
            mt: 7,
            mb: 7,
            fontStyle: "italic",
            fontWeight: "bold",
            color: "#2d3142",
          }}
        >
          About Us
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {/* <Container> */}
            <Typography
              variant="h5"
              color="white"
              sx={{
                mt: 5,
                mb: 5,
                ml: 5,
                mr: 5,
                pt: 5,
                py: 5,
                pl: 5,
                pr: 5,
                textAlign: "center",
                fontSize: 25,
                fontWeight: "500",
                fontStyle: "italic",

                backgroundColor: "#a6a2a2",
                borderRadius: 5,
              }}
            >
              Car Sensors Automobiles began with the thought of customer in
              mind. Our partner Asano Sōichirō believed customer deserves
              fairness, quality service and on time delivery of their 2nd
              biggest investment. And along came Enomoto Daisuke with years of
              expertise with largest automotive service providers in Japan with
              similar philosophy. Together with friends, they established Car
              Sensors Automobiles with their first shop located at Tokyo, Japan.
              CarSensors Automobiles now rivals any automotive service providers
              in quality and on-time service.
            </Typography>

            <br />
            <Typography
              variant="h5"
              color="black"
              sx={{
                mt: 5,
                mb: 5,
                pt: 5,
                py: 5,
                pl: 5,
                pr: 5,
                textAlign: "center",
                fontSize: 25,
                fontWeight: "400",
                fontStyle: "italic",
                backgroundColor: "#ccd5ae",
                borderRadius: 5,
              }}
            >
              <p
                style={{ fontWeight: "bold", fontSize: 35, textAlign: "left" }}
              >
                Asano Sōichirō{" "}
              </p>
              <br />
              Mr. Asano Sōichirō Joined CarSensors Automobiles as a Managing
              Partner in 2000. Prior to joining CarSensors he began his
              successful carrier in 1985 with DH Associates later Unifirst
              Corporation and Rosenthal Automotive Group in Maryland, USA. He
              directed the service department and was directly involved with the
              production and the customer care departments. Upon his return from
              USA he joined Sony as Export Manager for North America and later
              at Toyota as AGM. He is a Certified Master Service Consultant with
              Mazda Motor Corporation, Emission Inspector for State of Maryland,
              US EPA (United States Environmental Protection Agency) MACS
              certified (Mobile Air Conditioning System) Inspector. Mr. Asano
              believes there is no substitution to quality, fairness and on time
              delivery in automotive industry.
            </Typography>

            <Typography
              variant="h5"
              color="black"
              sx={{
                mt: 5,
                mb: 5,
                pt: 5,
                py: 5,
                pl: 5,
                pr: 5,
                textAlign: "center",
                fontSize: 25,
                fontWeight: "400",
                fontStyle: "italic",
                backgroundColor: "#ffcb69",
                borderRadius: 5,
              }}
            >
              <p
                style={{ fontWeight: "bold", fontSize: 35, textAlign: "left" }}
              >
                Enomoto Daisuke
              </p>
              Enomoto Daisuke A leading personality in Automotive & Customer
              service industry in Japan. Mr.Daisuke worked with Toyota for long
              12 years. As a Toyota trained Advisor with the service department
              he helped the service department to enhance its vision and mission
              towards customer satisfaction. He is a visionary who always wants
              to make sure 100% satisfaction of each customer. Keeping that in
              mind, he established CarSensors Automobiles in 2000 to fulfill
              that lifelong dream where service; customer care and customer
              satisfaction will be nothing but the best in Japan.
            </Typography>
            <Typography
              variant="h5"
              color="black"
              sx={{
                mt: 5,
                mb: 5,
                pt: 5,
                py: 5,
                pl: 5,
                pr: 5,
                textAlign: "center",
                fontSize: 25,
                fontWeight: "400",
                fontStyle: "italic",
                backgroundColor: "#90be6d",

                borderRadius: 5,
              }}
            >
              <p
                style={{ fontWeight: "bold", fontSize: 35, textAlign: "left" }}
              >
                Fujita Den
              </p>
              Fujita Den. has been working in the automotive industry in Japan
              for long 17 years. After receiving his degree in Engineering he
              joined Toyota and worked for fifteen years accumulating vast
              technical knowledge in technical sector. A Toyota medal recipient,
              Fujita Den. was a Technical Advisor with Toyota. He later joined
              TireTrak Automobiles as GM. He is also a Technical Advisor for
              Japan Technical Education Board (JTEB). He joined CarSensors
              Automobiles as a partner after its inception and is directly
              involved with Technical Training, Production and Quality Control.
            </Typography>
            <Typography
              variant="h5"
              color="black"
              sx={{
                mt: 5,
                mb: 5,
                pt: 5,
                py: 5,
                pl: 5,
                pr: 5,
                textAlign: "center",
                fontSize: 25,
                fontWeight: "400",
                fontStyle: "italic",
                backgroundColor: "#b08968",
                borderRadius: 5,
              }}
            >
              <p
                style={{ fontWeight: "bold", fontSize: 35, textAlign: "left" }}
              >
                Fukuda Yoshitaka.
              </p>
              Fukuda Yoshitaka is a well known veteran in the automobile
              industry for over two decades. He joined Haq’s Bay, well reputed
              recondition vehicle Sales and Service Company in 1994. As a young
              automobile engineer he quickly earned the nick name “Mr.
              Dependable” with his vehicle knowledge, superior customer service
              and dedication towards service excellence. He was managing Haq’s
              Bay entire service center operation as its head when he decided to
              pursue his lifelong dream to become an entrepreneur and joined
              CarSensors Automobiles in December 2007 as a business partner. Mr.
              Yoshitaka believes that Customer service excellence is achieved by
              consistently exceeding customer expectations not just every time
              but all the time.
            </Typography>

            {/* </Container> */}
          </Grid>
          {/* <Button
        style={{ color: "green" }}
        sx={{ pt: 4, fontSize: 18, fontWeight: "bold" }}
      >
        Learn More
      </Button> */}
        </Box>
      </Box>
    </Box>
  );
};

export default About;
