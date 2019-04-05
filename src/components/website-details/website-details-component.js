import React, { Component } from "react";
import UtilJS from "../../util/utils";

import "./website-details-component.css";
class WebsiteDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      data: {},
      websiteID: "",
      websiteDetails: [],
      website_upvote_count: 0,
      isLoaderShown: false
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.upVoteCount = this.upVoteCount.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      websiteDetails: nextProps.websiteDetails,
      websiteID: this.state.websiteDetails.websiteID,
      website_upvote_count: nextProps.websiteDetails.website_upvote_count
    });
  }
  upVoteCount(voteCount) {
    let utilJS = new UtilJS();

    let upVoteCount = utilJS.voteCountFormatter(voteCount);

    return upVoteCount;
  }
  async incrementCount() {
    let utilJS = new UtilJS();
    this.setState({ isLoaderShown: true });
    let response = await utilJS.ajax(
      "https://045lzzv2qv.sse.codesandbox.io/awards/website-details/" +
        this.props.websiteDetails.website_id,
      "PUT",
      this.state.data
    );
    if (response.data.isUpdated) {
      this.setState({
        website_upvote_count: this.state.website_upvote_count + 1,
        isLoaderShown: false
      });
    }
  }
  render() {
    return (
      <div className="websiteDetails row">
        <div className="col-12 px-4">
          <div className="row">
            <div
              className="upVote py-3 px-4  rounded card-box-solid "
              onClick={this.incrementCount}
            >
              UPVOTE
            </div>
            <div className="voteCount ml-3 mt-3">
              {this.upVoteCount(this.state.website_upvote_count)} upvotes
            </div>
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
          <div className="visitWebsite row p-3 mt-4  bg-white rounded card-box ">
            <a target="_blank" href={this.state.websiteDetails.website_url}>
              VISIT WEBSITE
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default WebsiteDetailsComponent;
