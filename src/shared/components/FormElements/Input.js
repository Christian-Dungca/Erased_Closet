import React, { useEffect, useReducer } from "react";

import { validate } from "../../../shared/components/util/validators";

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

  const {id , onInput} = props;
  const {value, isValid} = inputState

  useEffect(() => {
    console.log(value)
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

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
        onBlur={touchHandler}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        value={inputState.value}
        onBlur={touchHandler}
      />
    );

  return (
    <div>
      <label htmlFor={props.id}></label>
      {element}
      {!inputState.isValid && inputState.isTouched && (
        <p> {props.errorText} </p>
      )}
    </div>
  );
};

export default Input;
