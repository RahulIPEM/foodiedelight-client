import React from "react";
import styles from "./index.module.css";
import Label from "../../atoms/Label";
import Input from "../../atoms/Input";

const InputField = ({
  label,
  name,
  value,
  placeholder,
  inputClass,
  containerClass,
  labelClass,
  handleChange,
}) => {
  return (
    <div className={containerClass ? containerClass : styles.containerClass}>
      {label && <Label className={labelClass}>{label}</Label>}
      <Input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        className={inputClass}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField;
