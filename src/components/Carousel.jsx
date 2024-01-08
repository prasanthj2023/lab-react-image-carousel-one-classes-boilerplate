import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      index: 2,
    };
  }

  render() {
    let prevImage = () => {
      this.setState((prevState) => ({
        index: (prevState.index - 1 + images.length) % images.length,
      }));
    };

    let nextImage = () => {
      this.setState((prev) => ({
        index: (prev.index + 1) % images.length,
      }));
    };

    return (
      <div id="main">
        <div className="btn">
          <ArrowBackIosIcon onClick={prevImage} />
        </div>
        <div>
          <div id="image">
            <img src={images[this.state.index].img} />
            <h1 className="abs-title">
              <span>{images[this.state.index].title}</span>
            </h1>
            <p className="abs-sub">
              <span>{images[this.state.index].subtitle}</span>
            </p>
          </div>
        </div>
        <div className="btn">
          <ArrowForwardIosIcon onClick={nextImage} />
        </div>
      </div>
    );
  }
}

export default Carousel;
