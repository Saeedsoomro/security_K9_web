import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { grey } from "@mui/material/colors";

const OfferComponenet = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#142032",
        marginTop: "60px",
        paddingY: "30px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <CheckCircleIcon sx={{ fontSize: "100px", color: "#192d5c" }} />
          <Typography fontSize={24} color="white" fontWeight={600}>
            Tailored Security Services
          </Typography>
          <Typography fontSize={18} color="white" fontWeight={500}>
            We make sure that our security services are tailored to your unique
            needs. No unnecessary add-ons, no hidden charges and no surprises
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <CheckCircleIcon sx={{ fontSize: "100px", color: "#192d5c" }} />
          <Typography fontSize={24} color="white" fontWeight={600}>
            Experienced and Accredited
          </Typography>
          <Typography fontSize={18} color="white" fontWeight={500}>
            We make sure that our security services are tailored to your unique
            needs. No unnecessary add-ons, no hidden charges and no surprises
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <CheckCircleIcon sx={{ fontSize: "100px", color: "#192d5c" }} />
          <Typography fontSize={24} color="white" fontWeight={600}>
            A Truly International Company
          </Typography>
          <Typography fontSize={18} color="white" fontWeight={500}>
            We make sure that our security services are tailored to your unique
            needs. No unnecessary add-ons, no hidden charges and no surprises
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default OfferComponenet;
