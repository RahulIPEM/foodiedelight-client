import React, { useContext, useState } from "react";
import styles from "./index.module.css";
import {
  CircularProgress,
  FormControl,
  FormControlLabel,
  Grid2 as Grid,
  Link,
  Radio,
  RadioGroup,
} from "@mui/material";
import Label from "../../atoms/Label";
import { useNavigate } from "react-router-dom";
import { store } from "../../../store";
import InputField from "../../molecules/InputField";
import PasswordField from "../../molecules/PasswordField";
import Heading from "../../atoms/Heading";
import Button from "../../atoms/Button";
import Overlay from "../../atoms/Overlay";
import RadioInput from "../../molecules/RadioGroup";
import { radioItems } from "../../../constants";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(store);
  const [formData, setFormData] = useState({
    email: null,
    password: null,
    repassword: null,
    type: "user",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  const handleClick = () => {};

  const handleLoginType = (e) => {
    console.log("login type ==============> ", e.target.value);
  };

  return (
    <Grid container className="main-container">
      <Grid
        item
        size={{ xs: 11, sm: 8, md: 6, lg: 4 }}
        className={styles.signupContainer}
      >
        {state?.loggedInState?.isLoading && (
          <Overlay>
            <CircularProgress />
          </Overlay>
        )}
        <Heading level="1">
          Sign Up <small className={styles.subHeading}>as</small>
        </Heading>
        <RadioInput
          name="type"
          value={formData["type"]}
          changeHandler={handleChange}
          radioItems={radioItems}
        />
        <InputField
          name="email"
          label="Email"
          placeholder="Enter your email"
          value={formData["email"] || ""}
          inputClass={styles.inputClass}
          containerClass={styles.inputContainer}
          labelClass={styles.labelClass}
          handleChange={handleChange}
        />
        <PasswordField
          name="password"
          label="Password"
          placeholder="Enter your password"
          value={formData["password"] || ""}
          inputClass={styles.inputClass}
          containerClass={styles.inputContainer}
          labelClass={styles.labelClass}
          handleChange={handleChange}
        />
        <PasswordField
          name="repassword"
          label="Confirm Password"
          placeholder="Re-enter your password"
          value={formData["repassword"] || ""}
          inputClass={styles.inputClass}
          containerClass={styles.inputContainer}
          labelClass={styles.labelClass}
          handleChange={handleChange}
        />
        <Button className={styles.btnClass} clickHandler={handleClick}>
          Submit
        </Button>
        <Label className={styles.labelClass}>
          Already have an account?&nbsp;
          <Link onClick={navigateToLogin} className={styles.link}>
            Log In
          </Link>
        </Label>
      </Grid>
    </Grid>
  );
};

export default RegistrationForm;
