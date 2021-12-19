import React from "react";
import Carousel from "react-bootstrap/Carousel";
export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <Carousel>
          {props.photos.map(function (photo, index) {
            return (
              <Carousel.Item interval={2100} key={index}>
                <div className="d-block w-100">
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={photo.src.landscape}
                      alt="wordImage"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </section>
    );
  } else {
    return null;
  }
}
