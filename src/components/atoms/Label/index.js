import React from "react";
import styles from "./index.module.css";

const Label = ({ children, className }) => {
  return (
    <label className={className ? className : styles.labelClass}>
      {children}
    </label>
  );
};

export default Label;
