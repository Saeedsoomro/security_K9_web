import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { CardData } from "../../data";

const CustomCard = () => {
  return (
    <Box style={{ marginTop: "2vmax" }}>
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
        SECURITY SECTORS
      </Typography>
      <Typography
        variant="body1"
        style={{
          fontWeight: "600",
          textAlign: "center",
          marginTop: "2vmax",
          marginBottom: "2vmax",
          paddingLeft: "5vmax",
          paddingRight: "5vmax",
        }}
      >
        This is a paragraph of text using Material-UI Typography component.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
        velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
        commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed
        eleifend tristique, tortor mauris maximus dui, at lacinia nisi ipsum nec
        diam.
      </Typography>
      <Box
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {CardData.map((item) => (
          <Card
            style={{
              width: "30%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              margin: "10px",
              "@media (min-width: 600px)": {
                display: "block",
                width: "100%",
              },
            }}
          >
            {item.icon}
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ textAlign: "center", fontWeight: "600" }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                component="p"
                style={{ textAlign: "center" }}
              >
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CustomCard;
