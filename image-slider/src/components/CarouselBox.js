import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100vh"
            src="/img/slide-1.jpeg"
            alt=""
          />
          <Carousel.Caption>
            <h3>Special Offer 50%</h3>
            <p>LoremoLoremoLoremoLoremo</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100vh"
            src="/img/slide-2.jpeg"
            alt=""
          />
          <Carousel.Caption>
            <h3>Special Offer 70%</h3>
            <p>LoremoLoremoLoremoLoremo</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100vh"
            src="/img/slide-3.jpeg"
            alt=""
          />
          <Carousel.Caption>
            <h3>Special Offer 10%</h3>
            <p>LoremoLoremoLoremoLoremo</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
