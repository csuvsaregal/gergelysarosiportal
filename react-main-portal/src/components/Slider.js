import React from "react";

import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function CarouselFadeExample() {
  let img_folder = "../../assets/";
  const getIMGsrc = (imgname) => {
    return img_folder + imgname;
  };
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="../../assets/img/tavirozsa.JPG"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../assets/img/balak.JPG"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../assets/img/mocsar2.JPG"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
