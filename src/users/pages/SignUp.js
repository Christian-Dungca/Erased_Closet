import React from "react";
import { Link } from "react-router-dom";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/components/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import Input from "../../shared/components/FormElements/Input";
import styles from "./SignUp.module.scss";

const SignUpPage = () => {
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
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
    <div className={styles.SignUpPage}>
      <div className={styles.formContainer}>
        <h1 className={styles.formTitle}> Create Account</h1>
        <p className={styles.formDescription}>
          {" "}
          sign up to be able to add items to cart and puchase items
        </p>
        <form>
          <div className={styles.nameInput}>
            <Input
              element="input"
              id="name"
              type="text"
              label="Name"
              errorText="A name is required"
              placeholder="Your name"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
            />
          </div>
          <div className={styles.emailInput}>
            <Input
              element="input"
              id="email"
              type="text"
              label="Email"
              errorText="An email is required"
              placeholder="A valid email"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
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
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
              onInput={inputHandler}
            />
          </div>
          <button className={styles.formBtn}> Sign Up</button>
        </form>
        <div className={styles.switchToLogin}>
          <p>
            or <Link to="/login">login</Link>
          </p>
        </div>
      </div>
      <div className={styles.imageContainer}></div>
    </div>
  );
};

export default SignUpPage;
