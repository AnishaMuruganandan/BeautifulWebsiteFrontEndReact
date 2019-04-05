import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import UtilJS from "../../util/utils";
import "./card-component.css";
class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allWebsiteDetails: []
    };
    this.formatDate = this.formatDate.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      allWebsiteDetails: nextProps.allWebsite
    });
  }

  formatDate(dateInfo) {
    let utilJS = new UtilJS();

    let dateDiff = utilJS.formatDate(dateInfo);

    return dateDiff;
  }

  voteCount(count) {
    let utilJS = new UtilJS();

    let formattedCount = utilJS.voteCountFormatter(count);

    return formattedCount;
  }

  render() {
    return (
      <div className="cards row">
        {
          (this.items = this.state.allWebsiteDetails.map((item, index) => (
            <div className="topCard col-6 my-3 col-sm-6 col-lg-3 col-xl-3 col-md-6">
              <div class="card-box">
                {" "}
                <div className="">
                  <img
                    key={index}
                    className="screenshot"
                    alt="Vijay"
                    src={item.website_screenshot_path}
                  />
                </div>
                <div className="row mx-0 ">
                  <div className="col-12 py-3">
                    <div className="row">
                      <h5 className="col-7 largeText overflow-hidden">
                        {" "}
                        <Link to={"/website/" + item.website_id}>
                          {item.website_name}
                        </Link>
                      </h5>
                      <div class="col-5 smallText pl-0">
                        <span className="float-right mt-1">
                          {this.formatDate(item.website_upload_time)}
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 smallText">
                        {this.voteCount(item.website_upvote_count)} votes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )))
        }
      </div>
    );
  }
}

export default CardComponent;
