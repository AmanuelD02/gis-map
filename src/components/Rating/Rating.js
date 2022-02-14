import React, { Component } from "react";
import "./Rating.css";

export default class Rating extends Component {
  render() {
    const starSize = this.props.size === "lg" ? "2rem" : "1rem";
    const starPercentage = (this.props.rating / 5) * 100;
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    return (
      <div>
        <div className="stars-outer" style={{ fontSize: starSize }}>
          <div
            className="stars-inner"
            style={{ width: starPercentageRounded }}
          ></div>
        </div>
      </div>
    );
  }
}