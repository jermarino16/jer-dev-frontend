import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

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
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    props.handleActiveIndex(newValue);
  };

  return (
    <React.Fragment>
      <Tabs
        className={classes.tabContainer}
        value={props.activeIndex}
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
