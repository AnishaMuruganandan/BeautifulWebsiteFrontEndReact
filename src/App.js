import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import FirstPageComponent from "./pages/first/first-page";
import SecondPageComponent from "./pages/second/second-page";
import ThirdPageComponent from "./pages/third/third-page";
import HeaderComponent from "./components/header/header-component";

// import SecondPageComponent from "./pages/second/second-page";
//import ThirdPageComponent from "./pages/third/third-page";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <HeaderComponent />

        <Switch>
          <Route exact path="/" component={() => <FirstPageComponent />} />
          <Route exact path="/website/:id" component={SecondPageComponent} />
          <Route exact path="/submit" component={ThirdPageComponent} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
