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
        <h2 className={styles.headerTitle}> New Product Form </h2>
      </div>
      <p className={styles.formDescription}>
        Create a new product to add to the store.
      </p>
      <form onSubmit={productSubmitHandler}>
        <div className={styles.name}>
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
        </div>
        <div className={styles.type}>
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
        </div>
        <div className={styles.price}>
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
        </div>
        <div className={styles.details}>
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
        </div>
        <div className={styles.color}>
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
        </div>
        <div className={styles.size}>
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
        </div>
        {/* disabled={!formState.isValid */}
        <button
          type="submit"
          disabled={!formState.isValid}
          className={styles.button}
        >
          Add
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
