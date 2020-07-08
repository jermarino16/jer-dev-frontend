import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  useMediaQuery,
} from "@material-ui/core";
import {
  ContactMailOutlined as ContactMailOutlinedIcon,
  Menu as MenuIcon,
  PermIdentity as PermIdentityIcon,
} from "@material-ui/icons";
import { makeStyles, useTheme } from "@material-ui/styles";

import Logo from "../Logo";
import NavLinks from "./NavLinks";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.primary,
    height: "6rem",
    zIndex: theme.zIndex.modal + 1,
  },
  drawer: {
    backgroundColor: theme.palette.common.green,
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
    color: "white",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  listItem: {
    color: "white",
    opacity: 0.7,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  listText: {
    fontFamily: "BioRhyme",
    fontWeight: 400,
    fontSize: "1.25rem",
  },
  logoContainer: {
    color: "white",
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  selectedListItem: {
    color: "white",
    opacity: 1,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  toolbar: {
    margin: "auto 0",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2.5em",
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);

  const [activeIndex, setActiveIndex] = useState(false);

  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  };

  const routes = [
    { label: "Home", link: "/", index: false },
    { label: "About", link: "/about", index: 0 },
    { label: "Contact", link: "/contact", index: 1 },
  ];

  const drawers = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List>
          <ListItem
            component={Link}
            to="/about"
            selected={activeIndex === 0}
            className={
              activeIndex === 0 ? classes.selectedListItem : classes.listItem
            }
          >
            <ListItemIcon onClick={() => setOpenDrawer(false)}>
              <PermIdentityIcon color="error" />
            </ListItemIcon>
            <ListItemText
              primary="About"
              onClick={() => setOpenDrawer(false)}
              className={classes.listText}
              disableTypography
            />
          </ListItem>
          <ListItem
            component={Link}
            to="/contact"
            selected={activeIndex === 1}
            className={
              activeIndex === 1 ? classes.selectedListItem : classes.listItem
            }
          >
            <ListItemIcon onClick={() => setOpenDrawer(false)}>
              <ContactMailOutlinedIcon color="error" />
            </ListItemIcon>
            <ListItemText
              primary="Contact"
              onClick={() => setOpenDrawer(!openDrawer)}
              className={classes.listText}
              disableTypography
            />
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  useEffect(() => {
    routes.forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (activeIndex !== route.index) {
            setActiveIndex(route.index);
          }
          break;
        default:
          break;
      }
    });
  }, [routes, activeIndex]);

  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Button
            component={Link}
            to="/"
            className={classes.logoContainer}
            onClick={() => handleActiveIndex(false)}
          >
            <Logo />
          </Button>
          {matches ? (
            drawers
          ) : (
            <NavLinks
              activeIndex={activeIndex}
              handleActiveIndex={handleActiveIndex}
              routes={routes}
            />
          )}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
