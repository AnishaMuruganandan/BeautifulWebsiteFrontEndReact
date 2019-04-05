import React, { Component } from "react";
import CardComponent from "../cards/card-component";

import "./top-websites-component.css";

class TopWebsiteComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allWebsitesDetails: []
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      allWebsitesDetails: nextProps.topWebsites
    });
  }
  render() {
    return (
      <div className="mb-5">
        <h2 className="my-5 row">
          <div className="col-12">Top Websites</div>
        </h2>
        <CardComponent allWebsite={this.state.allWebsitesDetails} />
      </div>
    );
  }
}

export default TopWebsiteComponent;
