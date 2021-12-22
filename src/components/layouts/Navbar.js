import React, { useState } from "react";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Drawer,
  Grid,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import UpIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import HomeIcon from "@mui/icons-material/Home";
import AboutIcon from "@mui/icons-material/AccountCircle";
import SkillsIcon from "@mui/icons-material/CodeOutlined";
import PortafolioIcon from "@mui/icons-material/WebOutlined";
import ContactIcon from "@mui/icons-material/ContactPhoneOutlined";

const Navbar = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const menuItems = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      text: "About",
      icon: <AboutIcon />,
      path: "/about",
    },
    {
      text: "Skills",
      icon: <SkillsIcon />,
      path: "/skills",
    },
    {
      text: "Portafolio",
      icon: <PortafolioIcon />,
      path: "/portafolio",
    },
    {
      text: "Contact",
      icon: <ContactIcon />,
      path: "/contact",
    },
  ];
  const ItemClick = (path) => {
    navigate(path);
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: "auto" }}>
      <Toolbar>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleDrawerToggle}
        >
          <UpIcon fontSize="large" color="primary" />
        </Box>
      </Toolbar>
      <Divider />
      <List>
        <Grid container spacing={2} justifyContent="center">
          {menuItems.map((value, index) => (
            <Grid key={index} item xs={12} sm={4} lg={12}>
              <ListItem
                button
                onClick={() => ItemClick(value.path)}
                sx={{
                  background: `${
                    location.pathname === value.path ? "#f4f4f4" : null
                  }`,
                  pl: 4,
                }}
              >
                <ListItemIcon>{value.icon}</ListItemIcon>
                <ListItemText primary={value.text} />
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </List>
      <Toolbar />
    </Box>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{backgroundColor:'#fff'}} elevation={0}>
        <Container maxWidth="md">
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                edge="start"
                color="primary"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Typography
              variant="h6"
              color="primary"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              J.R.V.
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {menuItems.map((value, index) => (
                <Button
                  key={index}
                  color="primary"
                  onClick={() => navigate(value.path)}
                  sx={{
                    mx: 1,
                    background: `${
                      location.pathname === value.path ? "#f4f4f4" : null
                    }`,
                  }}
                >
                  {value.text}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav" sx={{ flexShrink: { sm: 0 } }}>
        <Drawer
          anchor="top"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: 2,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Navbar;
