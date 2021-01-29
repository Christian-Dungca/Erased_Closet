import React, { useCallback, useReducer } from "react";
import { connect } from "react-redux";
import axios from "axios";

import * as actions from "../../../../store/actions/index";
import Input from "../../../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../../../shared/components/util/validators";
import { useForm } from "../../../../shared/hooks/form-hook";
import styles from "./NewProduct.module.scss";

const NewProduct = ({ addProduct, closeFormHandler }) => {
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

  const productSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await addProduct(formState.inputs);
      closeFormHandler();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.NewProduct}>
      <div className={styles.header}>
        <h1> Create a Product </h1>
        <h1> Close </h1>
      </div>
      <form onSubmit={productSubmitHandler}>
        <div className={styles.photoUploadSection}>
          <div className={styles.photoPlaceholder}>
            <h2> + </h2>
          </div>
          <div className={styles.photoTextSection}>
            <h2> Upload product photo</h2>
            <button className={styles.uploadBtn}> Upload </button>
          </div>
        </div>
        <Input
          element="input"
          id="name"
          type="text"
          label="Product Name"
          errorText="Please enter valid name"
          placeholder="Name is required"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(4)]}
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="type"
          type="text"
          label="Type"
          errorText="Please enter valid type"
          placeholder="Type is required"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="price"
          type="text"
          label="Price"
          errorText="Please enter valid price"
          placeholder="Price must be in usd"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="details"
          type="text"
          label="Details"
          errorText="Please enter valid details"
          placeholder="Maximum of 20 characters"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(4)]}
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="color"
          type="text"
          label="Color"
          errorText="Please enter valid color"
          placeholder="Color is required"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="size"
          type="text"
          label="size"
          errorText="Please enter valid size"
          placeholder="Size is required"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />

        {/* disabled={!formState.isValid */}
        <button
          type="submit"
          disabled={!formState.isValid}
          className={styles.button}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (inputs) => dispatch(actions.createProduct(inputs)),
  };
};

export default connect(null, mapDispatchToProps)(NewProduct);
