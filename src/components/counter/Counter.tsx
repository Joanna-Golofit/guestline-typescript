import React from "react";
import styles from "./Counter.module.css";
// import PropTypes from "prop-types";

interface Props {
  title: string;
  value: number;
  onClick: React.Dispatch<React.SetStateAction<number>>;
}

const Counter: React.FC<Props> = ({ title, value, onClick }) => {
  
  const checkQty = () => {
    value > 0 && onClick(value - 1)
  }
  // console.log(value);
  return (
    <div className={styles.wrapper}>
      {title}: {""}
      <button className={styles.button} onClick={() => onClick(value + 1)}>
        +
      </button>
      {""} {value} {""}
      <button
        className={
          value === 0 ? `${styles.buttonDisabled}` : `${styles.button}`
        }
        onClick={() => checkQty()}
      >
        -
      </button>
    </div>
  );
};

// Counter.propTypes = {
//   title: PropTypes.string.isRequired,
//   value: PropTypes.number.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

export default Counter;
