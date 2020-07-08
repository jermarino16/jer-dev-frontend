import React from "react";
import { Link } from "react-router-dom";

import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import {
  ContactMailOutlined as ContactMailOutlinedIcon,
  Menu as MenuIcon,
  PermIdentity as PermIdentityIcon,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
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

  selectedListItem: {
    color: "white",
    opacity: 1,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2.5em",
  },
}));

const Drawer = (props) => {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleDrawer = (openOrClosed) => {
    props.handleDrawer(openOrClosed);
  };

  return (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={props.openDrawer}
        onOpen={() => handleDrawer(true)}
        onClose={() => handleDrawer(false)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List>
          <ListItem
            component={Link}
            to="/about"
            selected={props.activeIndex === 0}
            className={
              props.activeIndex === 0
                ? classes.selectedListItem
                : classes.listItem
            }
            onClick={() => {
              handleDrawer(false);
              props.handleActiveIndex(0);
            }}
          >
            <ListItemIcon>
              <PermIdentityIcon color="error" />
            </ListItemIcon>
            <ListItemText
              primary="About"
              className={classes.listText}
              disableTypography
            />
          </ListItem>
          <ListItem
            component={Link}
            to="/contact"
            selected={props.activeIndex === 1}
            className={
              props.activeIndex === 1
                ? classes.selectedListItem
                : classes.listItem
            }
            onClick={() => {
              handleDrawer(false);
              props.handleActiveIndex(1);
            }}
          >
            <ListItemIcon onClick={() => handleDrawer(false)}>
              <ContactMailOutlinedIcon color="error" />
            </ListItemIcon>
            <ListItemText
              primary="Contact"
              onClick={() => handleDrawer(false)}
              className={classes.listText}
              disableTypography
            />
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => handleDrawer(!props.openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );
};

export default Drawer;
