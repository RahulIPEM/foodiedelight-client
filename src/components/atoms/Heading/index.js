import React from "react";
import styles from "./index.module.css";

function Heading({ level, className, hr, children }) {
  const HeadingComponent = `h${level}`;

  return (
    <>
      <HeadingComponent className={className}>{children}</HeadingComponent>
      {hr && <hr />}
    </>
  );
}

export default Heading;
