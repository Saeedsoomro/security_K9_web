import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const WhyChoose = () => {
  return (
    <Container
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        marginTop: "60px",
      }}
    >
      <Grid item xs={12} sm={6} sx={{ p: 2 }}>
        <Typography
          fontSize={{ xs: 24, sm: 28 }}
          fontWeight={600}
          color="#192d5c"
        >
          Why Choose our security
        </Typography>
        <Typography fontSize={18} color="grey.800" sx={{ my: 2 }}>
          With clients that range from multi-national corporations and famous
          brands to family retailers and small businesses, just what is it that
          makes clients stick with us for decades, recommend us to their
          associates, and keep coming back?
        </Typography>
        <Box sx={{ my: 2 }}>
          <ul>
            <li>
              <Typography fontSize={18} color="grey.800" sx={{ my: 2 }}>
                <span style={{ fontWeight: "600" }}>Price Promise:</span> With
                premium security services delivered at the best value possible
                powering everything we do, we invite you to forward us a genuine
                quote from a competitor, and we will do our absolute best to
              </Typography>
            </li>
            <li>
              <Typography fontSize={18} color="grey.800" sx={{ my: 2 }}>
                <span style={{ fontWeight: "600" }}>Fair Dealing:</span> Our
                quotes are clearly priced, and our contracts are easy to
                understand. We won’t tangle you up in a complicated web of small
                print. best to
              </Typography>
            </li>
            <li>
              <Typography fontSize={18} color="grey.800" sx={{ my: 2 }}>
                <span style={{ fontWeight: "600" }}>Targeted Security:</span> We
                aim to provide services that are right for your circumstances
                and nothing more. Through auditing, planning, and ongoing
                assessment, we deliver the results you need and expect.
              </Typography>
            </li>
            {/* <li>
              <Typography fontSize={18} color="grey.800" sx={{ my: 2 }}>
                <span style={{ fontWeight: "600" }}>Expertise:</span> With more
                than three decades of operating cross-border security throughout
                Europe, there’s not much we haven’t seen, done, or experienced.
                We bring all of that knowledge to bear on providing exceptional
                security services
              </Typography>
            </li>

            <li>
              <Typography fontSize={18} color="grey.800" sx={{ my: 2 }}>
                <span style={{ fontWeight: "600" }}>Dedication:</span> Our
                dedicated team is available to help you find the right security
                solution for your needs and budget. Our backup and support
                services are available 24 hours a day, every day
              </Typography>
            </li> */}
          </ul>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ p: 2 }}>
        <img
          src="/assets/images/securityGaurd.jpg"
          alt="Security Guards"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Grid>
    </Container>
  );
};

export default WhyChoose;
