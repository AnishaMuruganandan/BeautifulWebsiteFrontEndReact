import React, { Component } from "react";
import CardComponent from "../cards/card-component";

import ReactPaginate from "react-paginate";

import "./all-websites-component.css";
class AllWebsitesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allWebsitesDetails: [],
      pageCount: 0,
      perPage: 8,
      offset: 0,
      selected: 0,
      loadWeb: []
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      allWebsitesDetails: nextProps.allWebsites,
      pageCount: Math.ceil(nextProps.allWebsites.length / 8),
      loadWeb: nextProps.allWebsites.slice(0, 8)
    });
  }

  componentDidMount() {
    //   this.loadCommentsFromServer();
  }

  loadCommentsFromServer() {
    let totalSize = this.state.allWebsitesDetails.length;

    let offset = this.state.offset;

    let maxCount = this.state.selected * this.state.perPage;

    let pageEnd;
    if (maxCount > totalSize && offset < totalSize) {
      pageEnd = totalSize;
    } else {
      pageEnd = maxCount;
    }

    this.setState({
      loadWeb: this.state.allWebsitesDetails.slice(offset, pageEnd)
    });
  }

  handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.state.perPage);

    this.setState({ offset: offset, selected: selected + 1 }, () => {
      this.loadCommentsFromServer();
    });
  };
  render() {
    return (
      <div className="mb-5">
        <h2 className="my-5 row">
          <div className="col-12">All Websites</div>
        </h2>
        <CardComponent allWebsite={this.state.loadWeb} />
        <ReactPaginate
          previousLabel={"⟨"}
          nextLabel={"⟩"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}

export default AllWebsitesComponent;
