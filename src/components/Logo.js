import React from "react";

import { Avatar, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";
import imageLogo from "../resources/images/temp.jpg";

const useStyles = makeStyles((theme) => ({
  imageLogo: {
    marginRight: "20px",
  },
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Avatar
        variant="circle"
        className={classes.imageLogo}
        alt="JM"
        src={imageLogo}
      />
      <Typography variant="h3">Jeremy Marino</Typography>
    </React.Fragment>
  );
};

export default Logo;
