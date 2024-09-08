import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const RadioInput = ({ name, value, changeHandler, className, radioItems }) => {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name={name}
        value={value}
        onChange={changeHandler}
        className={className ? className : ""}
      >
        {radioItems?.length &&
          radioItems.map(({ id, value, label }) => {
            return (
              <FormControlLabel
                key={id}
                value={value}
                control={<Radio />}
                label={label}
              />
            );
          })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioInput;
