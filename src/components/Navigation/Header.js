import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { AppBar, Button, Toolbar, useMediaQuery } from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/styles";

import Logo from "../Logo";
import NavLinks from "./NavLinks";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.primary,
    height: "6rem",
  },
  logoContainer: {
    color: "white",
    padding: 0,
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

  const [activeIndex, setActiveIndex] = useState(false);

  const handleActiveIndex = (index) => {
    console.log("header function called");
    setActiveIndex(index);
  };

  const routes = [
    { label: "Home", link: "/", index: false },
    { label: "About", link: "/about", index: 0 },
    { label: "Contact", link: "/contact", index: 1 },
  ];

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
          {matches ? null : (
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
