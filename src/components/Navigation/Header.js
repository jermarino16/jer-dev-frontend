import React from "react";

import {
  AppBar,
  Avatar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";
import imageLogo from "../../resources/images/temp.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: theme.palette.primary,
    height: "6rem",
  },
  imageLogo: {
    marginRight: "20px",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.h5,
    minWidth: 10,
    marginLeft: "25px",
  },
  toolbar: {
    margin: "auto 0",
  },
}));

const Header = () => {
  const classes = useStyles();
  //   const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Avatar
            variant="circle"
            className={classes.imageLogo}
            alt="JM"
            src={imageLogo}
          />
          <Typography variant="h3" className={classes.title}>
            Jeremy Marino
          </Typography>
          <Tabs
            className={classes.tabContainer}
            value={value}
            onChange={handleChange}
          >
            <Tab className={classes.tab} label="About" />
            <Tab className={classes.tab} label="Contact" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
