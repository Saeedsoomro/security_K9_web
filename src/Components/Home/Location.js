import { Box, Typography, Grid } from "@material-ui/core";
import React from "react";
import { LocationData } from "../../data";

const Location = () => {
  return (
    <Box
      style={{
        backgroundColor: "#E9EFF5",
        paddingTop: "2vmax",
        paddingBottom: "2vmax",
        marginTop: "2vmax",
      }}
    >
      <Typography
        variant="h4"
        style={{
          textAlign: "center",
          color: "#3766a3",
          marginTop: "3vmax",
          marginBottom: "3vmax",
          fontWeight: "600",
        }}
      >
        FEATURED LOCATIONS
      </Typography>
      <Typography
        variant="body1"
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "2vmax",
          marginBottom: "2vmax",
          paddingLeft: "5vmax",
          paddingRight: "5vmax",
        }}
      >
        With more than 40 locations across Europe, visit our locations page to
        find a full list and head directly to yours. We are constantly expanding
        our coverage, so if your location is not covered, get in touch, as we
        may still be able to help you. diam.
      </Typography>
      <Box
        height="100vh" // Set the height of the box to the height of the screen
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Grid container spacing={3}>
          {LocationData.map((item) => (
            <Grid item xs={4} style={{}}>
              <Box
                style={{
                  margin: "0.6vmax",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Box>
                  <img src={item.image} alt="image" />
                </Box>
                <Typography variant="h5" align="center">
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Location;
