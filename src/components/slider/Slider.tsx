import React from "react";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import styles from "./Slider.module.css";
// import PropTypes from "prop-types";

// Interface
interface Props {
  images: { url: string }[];
  id: string; // it should be string.. why doesn't it complain when set to number? cos it's not used as typical number and it doesn't cause a problem?
}

// const Slider = ({ images, id }) => {
const Slider: React.FC<Props> = ({ images, id }) => {
  const [current, setCurrent] = useState<number>(0);
  const length: number = images.length;

  const nextSlide = (): void => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = (): void => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }
  // console.log(images);
  // console.log(typeof id);
  // console.table(images);

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

// Slider.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.object).isRequired,
//   id: PropTypes.string.isRequired,
// };

export default Slider;
