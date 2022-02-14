import React, { Component } from "react";
import { Modal, Card, Button } from "react-bootstrap";
import Rating from "../Rating/Rating";
import "./DetailsReviews.css";

export default class DetailsReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClose = () => this.setState({ show: false });

  handleShow = () => this.setState({ show: true });

  render() {
    return (
      <div className="center">
     
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Comments</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.reviews.map((author, i) => (
              <div className="mb-5" key={i}>
                <Card border="light">
                  <Card.Header>
                    <div className="d-flex align-items-center">
                      <img
                        src={author.profile_photo_url}
                        alt="Reviewer profile"
                        className="author-image"
                      />
                      <h2 className="h5 ml-4">{author.author_name}</h2>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <div className="mr-4">
                        <Rating rating={author.rating}></Rating>
                      </div>
                      <span className="text-secondary">
                        {author.relative_time_description}
                      </span>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>{author.text}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose} size="lg">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
