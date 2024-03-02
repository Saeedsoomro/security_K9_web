import React from "react";
import { Card, CardContent, Typography, Box } from "@material-ui/core";
import { SecurityServiceData } from "../../data";

const SecurityServices = () => {
  return (
    <Box
      style={{
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
        Featured Security Services
      </Typography>
      <Box style={{ display: "flex", flexWrap: "wrap" }}>
        {SecurityServiceData.map((item) => (
          <Card
            style={{
              width: "30%",
              height: "22vmax",
              borderRadius: "2vmax",
              margin: "1vmax", // Center the card horizontally
              backgroundImage: item.image,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                align="center"
                style={{ fontWeight: "bold", color: "white" }}
              >
                {item.heading}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default SecurityServices;
