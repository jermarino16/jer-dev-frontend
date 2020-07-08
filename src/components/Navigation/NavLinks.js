import React from "react";
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
        {props.routes.map((route, index) =>
          index > 0 ? (
            <Tab
              key={`${route.label}${index}`}
              className={classes.tab}
              component={Link}
              to={route.link}
              label={route.label}
            />
          ) : null
        )}
      </Tabs>
    </React.Fragment>
  );
};
export default NavLinks;
