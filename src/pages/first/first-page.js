import React, { Component } from "react";
import HeaderComponent from "../../components/header/header-component";
import TopWebsiteComponent from "../../components/top-websites/top-websites-component";
import AllWebsitesComponent from "../../components/all-websites/all-websites-component";
import UtilJS from "../../util/utils";

class FirstPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topFour: [],
      allData: [],
      data: {},
      isOnload: true,
      isLoaderEnabled: true
    };
  }

  componentDidMount = async function(data) {
    if (this.state.isOnload) {
      this.setState({
        isLoaderEnabled: true,
        isOnload: false
      });

      let utilJS = new UtilJS();
      let response = await utilJS.ajax(
        "https://045lzzv2qv.sse.codesandbox.io/awards/website-details",
        "GET",
        data
      );

      this.setState({
        topFour: response.data.topFour,
        allData: response.data.dataByDate,

        isLoaderEnabled: false
      });
      // this.props.toggleLoader();
    }
  };

  render() {
    return (
      <div className="container">
        <TopWebsiteComponent topWebsites={this.state.topFour} />
        <AllWebsitesComponent allWebsites={this.state.allData} />
        <div
          id="loader"
          className={!this.state.isLoaderEnabled ? "d-none" : ""}
        >
          <div className="box">
            <div className="ball1" />
            <div className="ball2"> </div>
            <div className="ball3"> </div>
            <div id="loaderContent"> Loading... </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstPageComponent;
