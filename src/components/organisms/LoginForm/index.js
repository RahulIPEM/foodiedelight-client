import React, { useContext, useEffect, useState } from "react";
import styles from "./index.module.css";
import InputField from "../../molecules/InputField";
import PasswordField from "../../molecules/PasswordField";
import Heading from "../../atoms/Heading";
import Button from "../../atoms/Button";
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
import AuthService from "../../../service/Authentication";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../../../constants/types";
import Overlay from "../../atoms/Overlay";
import RadioInput from "../../molecules/RadioGroup";
import { radioItems } from "../../../constants";

const LoginForm = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(store);
  const objAuthService = new AuthService(state, dispatch);
  const [formData, setFormData] = useState({
    email: null,
    password: null,
    type: null,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigateToRegister = () => {
    navigate("/register");
  };

  const handleClick = () => {
    dispatch({ type: LOGIN_REQUEST });
    objAuthService
      .login(formData)
      .then((response) => {
        console.log("auth service login response ===============> ", response);
        dispatch({ type: LOGIN_SUCCESS, payload: response });
      })
      .catch((error) => {
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
        console.error("error from auth service login ============> ", error);
      });
  };

  useEffect(() => {
    console.log(
      "change in loggedInState ==================> ",
      state.loggedInState
    );
  }, [state.loggedInState]);

  return (
    <Grid container className="main-container">
      <Grid
        item
        size={{ xs: 11, sm: 8, md: 6, lg: 4 }}
        className={styles.loginContainer}
      >
        {state?.loggedInState?.isLoading && (
          <Overlay>
            <CircularProgress />
          </Overlay>
        )}
        <Heading level="1">
          Sign In <small className={styles.subHeading}>as</small>
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
        <Button className={styles.btnClass} clickHandler={handleClick}>
          Sign In
        </Button>
        <Label className={styles.labelClass}>
          Not registered? Create an account{" "}
          <Link onClick={navigateToRegister} className={styles.link}>
            Click Here
          </Link>
        </Label>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
