import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Container } from "@mui/material";

const DashboardHero = () => {
  return (
    <>
      <Box
        style={{
          backgroundImage: "url('/cyber.jpg')",
          color: "white",
          width: "100%",
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            gutterBottom
            style={{ fontWeight: "bold", fontStyle: "italic" }}
          >
            Dashboard
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            metus vestibulum, condimentum dui at, ullamcorper risus. Morbi id
            ante id arcu tincidunt volutpat. Nulla facilisi. Nulla id luctus
            metus. Duis auctor mi eget erat convallis fermentum. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default DashboardHero;
