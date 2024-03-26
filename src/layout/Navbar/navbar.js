import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Link,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logoutUser } from "../../store/userSlice";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const { user, error, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  let menuItems;

  if (user?.role === "superadmin") {
    menuItems = [
      // { text: "Home", link: "/" },
      { link: "/organization" },
      // { text: "Security Services", link: "/securityareas" },
      // { text: "Dashboard", link: "/dashboard" },
    ];
  } else if (user?.role === "doghandler") {
    menuItems = [
      { text: "Home", link: "/" },
      { text: "Dashboard", link: "/dashboard" },
    ];
  } else if (user?.role === "organization") {
    menuItems = [
      { text: "Home", link: "/" },
      { text: "Security Guards", link: "/organization" },
      { text: "Dashboard", link: "/dashboard" },
    ];
  } else {
    menuItems = [
      { text: "Home", link: "/" },
      // { text: "Security Guards", link: "/organization" },
      // { text: "Security Services", link: "/securityareas" },
      // { text: "Dashboard", link: "/dashboard" },
    ];
  }

  function handleLogout() {
    dispatch(logoutUser());
  }
  useEffect(() => {
    dispatch(getUser());
  }, []);
  useEffect(() => {}, [user]);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          minHeight: { xs: "90px", lg: "110px" },
        }}
      >
        <Toolbar>
          {/* Menu Icon Button */}

          {/* Logo */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              maxWidth: "40%",
              maxHeight: "40%",
            }}
          >
            <img
              src="/k9Logo.jpg"
              alt="Logo"
              style={{
                width: "54%", // Ensures the image width adjusts based on its container
                height: "150px", // Maintains the aspect ratio

                objectFit: "contain", // Sets the maximum width to 100% of the container width
              }}
            />
          </Box>

          {/* Drawer for Links and Buttons */}
          <Hidden mdUp>
            <Drawer
              anchor="left"
              open={isMenuOpen}
              onClose={toggleMenu}
              PaperProps={{
                sx: {
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#142032",
                },
              }}
            >
              <IconButton
                onClick={toggleMenu}
                sx={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  m: 1,
                  color: "white",
                }}
              >
                <CloseIcon />
              </IconButton>
              <Box>
                <img src="/logo.png" alt="Logo" sx={{ flexGrow: 1 }} />
              </Box>
              <List
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {menuItems.map((item) => (
                  <ListItem key={item.text} onClick={toggleMenu}>
                    <Link href={item.link} sx={{ textDecoration: "none" }}>
                      {/* <ListItemText
                        primary={item.text}
                        style={{
                          textDecoration: "none",
                          color: "white",
                        }}
                      /> */}
                    </Link>
                  </ListItem>
                ))}
                {user ? (
                  <>
                    <ListItem onClick={toggleMenu}>
                      <Button
                        onClick={handleLogout}
                        sx={{ width: "150px" }}
                        variant="contained"
                      >
                        logout
                      </Button>
                    </ListItem>
                  </>
                ) : (
                  <>
                    <ListItem onClick={toggleMenu}>
                      <Button sx={{ width: "150px" }} variant="contained">
                        Login
                      </Button>
                    </ListItem>
                  </>
                )}
              </List>
            </Drawer>
          </Hidden>

          {/* Links and Buttons */}
          <Hidden smDown>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                fontSize={18}
                component="div"
                sx={{
                  "& > *": { mr: "20px" },
                  fontWeight: 600,
                  display: "flex",
                  gap: 2,
                }}
              >
                {menuItems.map((item) => (
                  <Link
                    href={item.link}
                    sx={{
                      color: "#192d5c",
                      textDecoration: "none",
                      "&:hover": {
                        color: "#3766a3 ", // Light blue color
                      },
                    }}
                  >
                    {item.text}
                  </Link>
                ))}
              </Typography>
            </Box>
          </Hidden>
          <Hidden smDown>
            {user ? (
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="text" onClick={handleLogout}>
                  {user?.name}
                </Button>

                <Avatar />
                <Button variant="outlined" onClick={handleLogout}>
                  Logout
                </Button>
              </Box>
            ) : (
              <Box>
                <Button
                  onClick={() => {
                    handleLoginClick();
                  }}
                  variant="contained"
                  style={{ marginRight: "10px" }}
                >
                  Login
                </Button>
              </Box>
            )}
          </Hidden>
          <Hidden mdUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
