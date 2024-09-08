import React from "react";
import styles from "./index.module.css";

const Overlay = ({ children }) => {
  return <div className={styles.overlay}>{children}</div>;
};

export default Overlay;
