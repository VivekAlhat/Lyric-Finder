import React from "react";
import { Provider } from "./context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/layout/Navbar";
import Home from "./Components/layout/Home";
import "./App.css";

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Nav />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
