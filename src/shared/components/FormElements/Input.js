import React, { useEffect, useReducer } from "react";

import { validate } from "../../../shared/components/util/validators";
import styles from "./Input.module.scss";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return { ...state, isTouched: true };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    isTouched: false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    // console.log(value);
    onInput(props.id, inputState.value, inputState.isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const classNames = inputState.isValid ? [styles.Input, styles.validInput] : [styles.Input];

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        // placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
        onBlur={touchHandler}
        className={styles.Input}
      ></input>
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        value={inputState.value}
        onBlur={touchHandler}
      />
    );

  return (
    <>
      <div className={styles.inputContainer}>
        {element}
        <label htmlFor={props.id}>{props.label}</label>
      </div>
      {/* {!inputState.isValid && inputState.isTouched && (
        <p> {props.errorText} </p>
      )} */}
    </>
  );
};

export default Input;
