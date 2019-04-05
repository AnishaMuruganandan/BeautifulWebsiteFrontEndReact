import React, { Component } from "react";
import HeaderComponent from "../../components/header/header-component";
import { Link } from "react-router-dom";
import ScreenshotDetailsComponent from "../../components/screenshot-details/screenshot-details-component";
import WebsiteDetailsComponent from "../../components/website-details/website-details-component";
import UtilJS from "../../util/utils";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faLongArrowAltLeft);

import "./second-page.css";

class SecondPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websiteID: "",
      data: {},
      isOnload: true,
      isLoaderEnabled: true
    };
  }

  componentDidMount = async function(data) {
    if (this.state.isOnload) {
      this.setState({
        isOnload: false,
        isLoaderEnabled: true
      });

      let utilJS = new UtilJS();
      let response = await utilJS.ajax(
        "https://045lzzv2qv.sse.codesandbox.io/awards/website-details/" +
          this.props.match.params.id,
        "GET",
        data
      );

      this.setState({
        data: response.data.detailFetched[0],
        isLoaderEnabled: false
      });
      console.log(response);
    }
  };
  render() {
    return (
      <div>
        <div className="contentDisplay container">
          <div className="previousPage row ml-0 my-5">
            <div class="arrowBox">
              <FontAwesomeIcon
                className="mt-1 mr-2 arrowLeft"
                icon="long-arrow-alt-left"
              />
            </div>

            <Link to="/">
              <span class="back ">Back to all websites</span>
            </Link>
          </div>
          <h2 className="screenshotName row mt-4 mb-3 ml-0">
            {this.state.data.website_name}
          </h2>
          <div className="row mb-5">
            <div className="col-12 col-sm-12 col-md-8 pr-5 m-0 col-lg-8 col-xl-8 mb-3">
              <ScreenshotDetailsComponent websiteDetails={this.state.data} />
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 mb-3">
              <WebsiteDetailsComponent websiteDetails={this.state.data} />
            </div>
          </div>
        </div>

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

export default SecondPageComponent;
