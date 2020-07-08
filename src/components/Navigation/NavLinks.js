import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { NavContext } from "../../context/NavContext";

const useStyles = makeStyles((theme) => ({
  tab: {
    ...theme.typography.h5,
    minWidth: 10,
    marginLeft: "25px",
  },
  tabContainer: {
    marginLeft: "auto",
  },
}));

const NavLinks = (props) => {
  const navContext = useContext(NavContext);
  const classes = useStyles();
  // const [selectedIndex, setSelectedIndex] = useState(false);

  const handleChange = (event, newValue) => {
    // setSelectedIndex(newValue);
    console.log(navContext);
    navContext.activeIndex = newValue;
  };
  const routes = [
    { label: "Home", link: "/", index: false },
    { label: "About", link: "/about", index: 0 },
    { label: "Contact", link: "/contact", index: 1 },
  ];

  useEffect(() => {
    console.log("render!");

    routes.forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (navContext.activeIndex !== route.index) {
            navContext.activeIndex = route.index;
          }
          break;
        default:
          break;
      }
    });
  }, [routes, navContext.activeIndex]);

  return (
    <React.Fragment>
      <Tabs
        className={classes.tabContainer}
        value={navContext.activeIndex}
        onChange={handleChange}
      >
        <Tab
          className={classes.tab}
          component={Link}
          to="/about"
          label="About"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/contact"
          label="Contact"
        />
      </Tabs>
    </React.Fragment>
  );
};
export default NavLinks;
