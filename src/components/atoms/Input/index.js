import React from "react";
import styles from "./index.module.css";

const Input = ({
  type,
  name,
  value,
  placeholder,
  className,
  style,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className={className ? className : styles.inputClass}
      style={style ? { ...style } : {}}
      onChange={onChange}
    />
  );
};

export default Input;
