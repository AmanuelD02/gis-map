import React, { Component } from "react";
import "./DetailsImage.css";

export default class DetailsImage extends Component {
  render() {
    return (
      <div className="place-image-wrapper">
        <img src={this.props.url} alt="Place related to a google maps search" />
      </div>
    );
  }
}
