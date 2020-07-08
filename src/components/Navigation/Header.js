import React from "react";
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

  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Button component={Link} to="/" className={classes.logoContainer}>
            <Logo />
          </Button>
          {matches ? null : <NavLinks activeIndex={false} />}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
