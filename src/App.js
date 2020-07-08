import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavContext } from "./context/NavContext";
import theme from "./components/Theme";
import Header from "./components/Navigation/Header";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavContext.Provider
        value={{
          activeIndex: 0,
        }}
      >
        <Router>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              component={() => <div>Im the home page route</div>}
            />
            <Route
              exact
              path="/about"
              component={() => <div>Im the about page route</div>}
            />
            <Route
              exact
              path="/contact"
              component={() => <div>Im the contact page route</div>}
            />
          </Switch>
        </Router>
      </NavContext.Provider>
    </ThemeProvider>
  );
};

export default App;
