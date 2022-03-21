import React from "react";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import styles from "./Slider.module.css";
import PropTypes from "prop-types";

const Slider = ({ images, id }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <section className={styles.slider}>
      <IoIosArrowForward className={styles.forwardArrow} onClick={nextSlide} />
      <IoIosArrowBack className={styles.backArrow} onClick={prevSlide} />
      {images.map((image, idx) => (
        <div className={idx === current ? "slide active" : "slide"} key={idx}>
          {idx === current && (
            <img
              className={`img${idx}`}
              width={225}
              height={160}
              src={image.url}
              alt={`hotel ${id}`}
            ></img>
          )}
        </div>
      ))}
    </section>
  );
};

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
};

export default Slider;
