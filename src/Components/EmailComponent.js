import { Box, Container, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

const EmailComponent = () => {
  return (
    <Container
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        marginY: "50px",
      }}
    >
      <Grid item xs={12} sm={6} sx={{ p: 2 }}>
        <Typography
          fontSize={{ xs: 24, sm: 28 }}
          fontWeight={600}
          color="#192d5c"
        >
          SECURITY GUARDS AND SECURITY SERVICES YOU CAN TRUST
        </Typography>
        <Typography fontSize={20} color="grey.800" sx={{ my: 2 }}>
          When you need an honest, reliable, and trustworthy security company in
          Europe, Titan Security is an industry leader, supplying high-quality
          security guards and a full range of security services.
        </Typography>
        <Box sx={{ my: 2 }}>
          <ul>
            <Typography fontSize={18} fontWeight={600} color="grey.900">
              <li>
                Over three decades of providing top-rated security for Europe
              </li>
            </Typography>
            <Typography fontSize={18} fontWeight={600} color="grey.900">
              <li>
                Reliable, professional security guards to enhance your business
                reputation
              </li>
            </Typography>
            <Typography fontSize={18} fontWeight={600} color="grey.900">
              <li>
                Security services backed by the latest security technology
              </li>
            </Typography>
            <Typography fontSize={18} fontWeight={600} color="grey.900">
              <li>
                Complex, challenging or sensitive security issues are a
                speciality
              </li>
            </Typography>
          </ul>
        </Box>
        <Typography fontSize={20} color="grey.800" sx={{ my: 2 }}>
          Whatever your security needs, we are just a phone call away with
          advice and assistance to help you get the security you deserve. Fill
          out the contact form to get in touch without further obligation
        </Typography>
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

export default EmailComponent;
