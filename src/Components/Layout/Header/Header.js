import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { NavLink } from "react-router-dom";
import image from "../../../Assets/image.jpg";
import "./Header.css";

const drawerWidth = 230;
const navItems = [
  { id: 1, title: "Home", link: "/", className: "header-link" },
  { id: 2, title: "About", link: "/about", className: "header-link" },
  { id: 3, title: "Contact", link: "/contact", className: "header-link" },
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2 }}
        component="div"
        className="name-symbol"
      >
        B
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item?.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>
                <NavLink
                  to={item?.link}
                  children={item?.title}
                  className={item?.className}
                  exact={item?.link === "/" ? true : false}
                />
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  function ElevateOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 6 : 0,
    });
  }

  return (
    <>
      <CssBaseline />
      <ElevateOnScroll {...props}>
        <Box sx={{ display: "flex" }} className="header-container">
          <AppBar component="nav">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none", md: "none" } }}
              >
                <MenuIcon className="sidebar-toggler-button" />
              </IconButton>
              <Box>
                <Typography
                  variant="h6"
                  component="div"
                  className="name-symbol"
                  sx={{
                    display: { xs: "none", sm: "block", md: "block" },
                  }}
                >
                  B
                </Typography>
              </Box>

              <Box
                sx={{ display: { xs: "none", sm: "block", md: "block" } }}
                className="nav-item-container"
              >
                <Stack
                  direction={{ xs: "column", sm: "row", md: "row" }}
                  spacing={{ xs: 1, sm: 1, md: 2 }}
                  divider={
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ color: "#ddd", height: "auto" }}
                    />
                  }
                >
                  {navItems.map((item) => (
                    <NavLink
                      key={item?.id}
                      to={item?.link}
                      exact={item?.link === "/" ? true : false}
                      children={item?.title}
                      className={item?.className}
                    />
                  ))}
                </Stack>
              </Box>
              <Box
                sx={{ display: { xs: "block", sm: "block", md: "block" } }}
                className="profile_image"
              >
                <NavLink to="/" exact>
                  <img src={image} alt="profile" />
                </NavLink>
              </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
            <Drawer
              className="drawer-container"
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>
      </ElevateOnScroll>
      <Toolbar />
    </>
  );
}

export default Header;
