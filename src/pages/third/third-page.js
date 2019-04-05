import React, { Component } from "react";
import HeaderComponent from "../../components/header/header-component";
import WebsiteEntryComponent from "../../components/website-entry/website-entry-component";

import "./third-page.css";

class ThirdPageComponent extends Component {
  render() {
    return (
      <div className="">
        <div className="contentDisplay container ">
          <h2 className="screenshotName newWebsiteTitle row mt-5 mb-4 ml-0">
            Submit New Website
          </h2>

          <WebsiteEntryComponent />
        </div>
      </div>
    );
  }
}

export default ThirdPageComponent;
