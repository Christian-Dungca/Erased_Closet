import React from "react";
import { Link } from "react-router-dom";


import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/components/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import Input from "../../shared/components/FormElements/Input";
import styles from "./Login.module.scss";

const SignUpPage = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "", 
        isValid: false,
      },
    },
    false
  );

  return (
    <div className={styles.LoginPage}>
      <div className={styles.formContainer}>
        <h1 className={styles.formTitle}> Sign In </h1>
        <form>
          <div className={styles.emailInput}>
            <Input
              element="input"
              id="email"
              type="text"
              label="Email"
              errorText="An email is required"
              placeholder="A valid email"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
            />
          </div>
          <div className={styles.passwordInput}>
            <Input
              element="input"
              id="password"
              type="text"
              label="Password"
              errorText="A password is required"
              placeholder="Password"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
            />
          </div>
          <button className={styles.formBtn}> Sign Up</button>
        </form>
        <div className={styles.switchToSignUp}>
          <p>
            or <Link to="/signup">sign up</Link>
          </p>
        </div>
      </div>
      <div className={styles.imageContainer}></div>
    </div>
  );
};

export default SignUpPage;
