import { createMuiTheme } from "@material-ui/core/styles";

const myBlack = "#5D5C61";
const myGray = "#379683";

export default createMuiTheme({
  palette: {
    common: {
      black: `${myBlack}`,
      gray: `${myGray}`,
    },
    primary: {
      main: `${myBlack}`,
    },
    secondary: {
      main: `${myGray}`,
    },
  },
  typography: {
    h3: {
      fontFamily: "BioRhyme",
      textTransform: "none",
      fontWeight: 500,
      fontSize: "2rem",
    },
    h5: {
      fontFamily: "BioRhyme",
      textTransform: "none",
      fontWeight: 400,
      fontSize: "1.25rem",
    },
  },
});
