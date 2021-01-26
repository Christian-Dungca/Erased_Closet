import axios from "axios";
import React, { useCallback, useReducer } from "react";

import Input from "../../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../../shared/components/util/validators";
import { useForm } from "../../../shared/hooks/form-hook";

const NewProduct = () => {
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      type: {
        value: "",
        isValid: false,
      },
      price: {
        value: "",
        isValid: false,
      },
      details: {
        value: "",
        isValid: false,
      },
      color: {
        value: "",
        isValid: false,
      },
      size: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  // SEND A POST REQUEST USING AXIOS
  // Aync Await
  // https://api/products
  const productSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      // await axios.post("http://localhost:5000/api/products", {
      //   name: formState.inputs.name.value,
      //   type: formState.inputs.type.value,
      //   price: formState.inputs.price.value,
      //   details: formState.inputs.details.value,
      //   color: formState.inputs.color.value,
      //   size: formState.inputs.size.value,
      // });
      console.table(formState.inputs)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1> Form for New Product </h1>
      <form onSubmit={productSubmitHandler}>
        <Input
          element="input"
          id="name"
          type="text"
          label="name"
          errorText="Please enter valid name"
          placeholder="name"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(4)]}
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="type"
          type="text"
          label="type"
          errorText="Please enter valid type"
          placeholder="type"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="price"
          type="text"
          label="price"
          errorText="Please enter valid price"
          placeholder="price"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="details"
          type="text"
          label="details"
          errorText="Please enter valid details"
          placeholder="details"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(4)]}
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="color"
          type="text"
          label="color"
          errorText="Please enter valid color"
          placeholder="color"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="size"
          type="text"
          label="size"
          errorText="Please enter valid size"
          placeholder="size"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <button type="submit" disabled={!formState.isValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
