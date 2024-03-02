import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Container,
  Grid,
} from "@mui/material";

const Testimonials = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        marginY: "70px",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 400, margin: "auto", textAlign: "center" }}>
            <CardContent>
              <Box sx={{ width: 70, height: 70, margin: "auto" }}>
                <Avatar
                  alt="Avatar"
                  src="/avatar.jpg"
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Typography
                variant="h5"
                sx={{ marginTop: "20px" }}
                component="h2"
                gutterBottom
              >
                Titan Security Europe
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Our CCTV security services extend from installation and setup to
                remote monitoring via our central monitoring stations. Linked
                with our local mobile security response units, you can be sure
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 400, margin: "auto", textAlign: "center" }}>
            <CardContent>
              <Box sx={{ width: 70, height: 70, margin: "auto" }}>
                <Avatar
                  alt="Avatar"
                  src="/avatar.jpg"
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Typography
                variant="h5"
                sx={{ marginTop: "20px" }}
                component="h2"
                gutterBottom
              >
                Titan Security Europe
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Our CCTV security services extend from installation and setup to
                remote monitoring via our central monitoring stations. Linked
                with our local mobile security response units, you can be sure
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 400, margin: "auto", textAlign: "center" }}>
            <CardContent>
              <Box sx={{ width: 70, height: 70, margin: "auto" }}>
                <Avatar
                  alt="Avatar"
                  src="/avatar.jpg"
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Typography
                variant="h5"
                sx={{ marginTop: "20px" }}
                component="h2"
                gutterBottom
              >
                Titan Security Europe
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Our CCTV security services extend from installation and setup to
                remote monitoring via our central monitoring stations. Linked
                with our local mobile security response units, you can be sure
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testimonials;
