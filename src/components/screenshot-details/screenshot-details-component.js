import React, { Component } from "react";

import "./screenshot-detatils-component.css";
class ScreenshotDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websiteDetails: []
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      websiteDetails: nextProps.websiteDetails
    });
  }
  render() {
    return (
      <img
        className="screenshotImg card-box-solid  "
        src={this.state.websiteDetails.website_screenshot_path}
        alt={this.state.websiteDetails.website_name}
      />
    );
  }
}

export default ScreenshotDetailsComponent;
