import React, { Component } from "react";
import CardComponent from "../cards/card-component";
import UtilJS from "../../util/utils";
import "./website-entry-component.css";
import { configureToasts, Toast } from "toaster-js";
import "toaster-js/default.scss";

class WebsiteEntryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      data: {},
      isButtonDisabled: this.newMethod(),
      webIdentifier: "",
      isLoaderShown: false
    };
    this.submitURL = this.submitURL.bind(this);
    this.findValue = this.findValue.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  newMethod() {
    return true;
  }

  findValue(e) {
    var expression = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gi;
    var regex = new RegExp(expression);
    var url = e.target.value;
    url = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0];

    if (url.match(regex)) {
      this.setState({
        url: "http://" + url,
        webIdentifier: url,
        isButtonDisabled: false
      });
    } else {
      this.setState({
        url: "",
        isButtonDisabled: true
      });
    }
  }
  submitURL() {
    if (this.state.url !== "") {
      this.saveData({
        url: this.state.url,
        webIdentifier: this.state.webIdentifier
      });
    } else {
      console.log("Please enter in content");
    }
  }

  async saveData(data) {
    this.setState({
      isLoaderShown: true
    });
    let utilJS = new UtilJS();
    let response = await utilJS.ajax(
      "https://045lzzv2qv.sse.codesandbox.io/awards/website-details",
      "POST",
      data
    );
    this.setState({
      isLoaderShown: false
    });
    console.log(response);
    if (response.status === "ERROR") {
      new Toast("ERROR : " + response.msg);
    } else {
      new Toast("Submitted Successfully");
      this.refs.someName.value = "";
    }
  }
  render() {
    return (
      <div className="row mt-3">
        <div className="col-12 col-md-6 col-sm-12 mb-3">
          <input
            ref="someName"
            type="text"
            className="py-3 pl-3 pr-5 m-0 urlText"
            placeholder="Enter URL of the website here "
            onChange={this.findValue}
          />
          <div
            id="lds-ellipsis"
            className={!this.state.isLoaderShown ? "d-none" : ""}
          >
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className="col-3">
          <div
            className={
              this.state.isButtonDisabled
                ? "disabled rounded py-3 pl-4 pr-4 btn smallText"
                : "rounded py-3 pl-4 pr-4 btn smallText"
            }
            onClick={this.submitURL}
          >
            SUBMIT
          </div>
        </div>
      </div>
    );
  }
}

export default WebsiteEntryComponent;
