import React from "react";
import styles from "./Counter.module.css";
import PropTypes from "prop-types";

const Counter = ({ title, value, onClick }) => {
  return (
    <div className={styles.wrapper}>
      {title}: {""}
      <button className={styles.button} onClick={() => onClick(value + 1)}>
        +
      </button>
      {""} {value} {""}
      <button className={styles.button} onClick={() => onClick(value - 1)}>
        -
      </button>
    </div>
  );
};

Counter.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Counter;
