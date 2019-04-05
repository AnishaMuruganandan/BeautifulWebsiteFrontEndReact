import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header-component.css";
class HeaderComponent extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="heading">
            <Link to="/"> Beautiful Websites</Link>
          </div>
          <Link className="newButton mt-3" to="/submit">
            SUBMIT NEW
          </Link>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
