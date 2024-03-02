import React from "react";
import {
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const Footer = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "#142032",
        color: "white",
        padding: "1vmax 4vmax",
        fontFamily: "Arial",
        marginTop: "50px",
      }}
    >
      <Grid item xs={12} sm={6} md={3}>
        <Typography
          variant="h4"
          fontSize={24}
          fontWeight={600}
          sx={{ fontFamily: "Roboto, sans-serif" }}
        >
          OUR DETAILS
        </Typography>
        <List>
          <ListItemText
            primaryTypographyProps={{
              sx: { fontSize: "18px", fontWeight: 500 },
            }}
          >
            Titan Security Europe 61 Bridge Street, Kington, Herefordshire, HR5
            3DJ
          </ListItemText>

          <ListItemText
            primaryTypographyProps={{
              sx: { fontSize: "18px", fontWeight: 500 },
            }}
          >
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              +441803 446004
            </Link>
          </ListItemText>

          <ListItemText
            primaryTypographyProps={{
              sx: { fontSize: "18px", fontWeight: 500 },
            }}
          >
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
              }}
            >
              support@titansecurityeurope.com
            </Link>
          </ListItemText>
        </List>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Typography
          variant="h4"
          fontSize={24}
          fontWeight={600}
          sx={{ fontFamily: "Roboto, sans-serif" }}
        >
          SECTORS
        </Typography>
        <List style={{ listStyle: "none" }}>
          <ListItemText
            primaryTypographyProps={{
              sx: { fontSize: "18px", fontWeight: 500 },
            }}
          >
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Security Equipment Hire
            </Link>
          </ListItemText>

          <ListItemText
            primaryTypographyProps={{
              sx: { fontSize: "18px", fontWeight: 500 },
            }}
          >
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Security Guards
            </Link>
          </ListItemText>

          <ListItemText
            primaryTypographyProps={{
              sx: { fontSize: "18px", fontWeight: 500 },
            }}
          >
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Recruitment and Staffing Solutions
            </Link>
          </ListItemText>
        </List>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Typography
          variant="h4"
          fontSize={24}
          fontWeight={600}
          sx={{ fontFamily: "Roboto, sans-serif" }}
        >
          SERVICES
        </Typography>
        <List style={{ listStyle: "none" }}>
          <ListItemText
            primaryTypographyProps={{
              sx: { fontSize: "18px", fontWeight: 500 },
            }}
          >
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Crime Scene Guarding
            </Link>
          </ListItemText>

          <ListItemText
            primaryTypographyProps={{
              sx: { fontSize: "18px", fontWeight: 500 },
            }}
          >
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Close Protection Security
            </Link>
          </ListItemText>

          <ListItemText
            primaryTypographyProps={{
              sx: { fontSize: "18px", fontWeight: 500 },
            }}
          >
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Corporate Security Guard Service
            </Link>
          </ListItemText>
        </List>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography
          variant="h4"
          fontSize={24}
          fontWeight={600}
          sx={{ fontFamily: "Roboto, sans-serif" }}
        >
          LATEST NEWS
        </Typography>
        <List style={{ listStyle: "none" }}>
          <ListItemText
            primaryTypographyProps={{
              sx: { fontSize: "18px", fontWeight: 500 },
            }}
          >
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Cheap Business Security
            </Link>
          </ListItemText>

          <ListItemText
            primaryTypographyProps={{
              sx: { fontSize: "18px", fontWeight: 500 },
            }}
          >
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Case Study: UK Theatre
            </Link>
          </ListItemText>
          <ListItemText
            primaryTypographyProps={{
              sx: { fontSize: "18px", fontWeight: 500 },
            }}
          >
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Case Study: Redundancies in Germany
            </Link>
          </ListItemText>
        </List>
      </Grid>
    </Grid>
  );
};

export default Footer;
