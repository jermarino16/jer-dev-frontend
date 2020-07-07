import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import theme from "./components/Theme";
import Header from "./components/Navigation/Header";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <div>Im the home page route</div>}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
