import React from "react";
import styles from "./index.module.css";

const Button = ({ className, clickHandler, children }) => {
  return (
    <button
      className={className ? className : styles.btnClass}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
