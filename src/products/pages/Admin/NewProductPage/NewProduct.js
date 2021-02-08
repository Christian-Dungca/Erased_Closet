import React, { useState, useMemo, useEffect, useRef } from "react";
import { connect } from "react-redux";
import gsap from "gsap";

import ImageUpload from "../../../../shared/components/FormElements/ImageUpload";
import * as actions from "../../../../store/actions/index";
import Input from "../../../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../../../shared/components/util/validators";
import { useForm } from "../../../../shared/hooks/form-hook";
import styles from "./NewProduct.module.scss";

const NewProduct = ({ addProduct, closeFormHandler }) => {
  const [formStep, setFormStep] = useState(1);
  const NewProductForm = useRef(0);
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
      image: {
        value: undefined,
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    const timeline = gsap.timeline({ paused: false });
    timeline.from(NewProductForm.current, {
      y: 300,
      opacity: 0,
      duration: 0.3,
    });
  }, []);

  const backButtonHandler = () => {
    setFormStep((formStep) => formStep - 1);
  };

  const continueButtonHandler = () => {
    setFormStep((formStep) => formStep + 1);
  };

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
    <div className={styles.NewProduct} ref={NewProductForm}>
      <div className={styles.header}>
        <h2 className={styles.title}> New Product Form </h2>
        <p className={styles.description}>
          Create a new product to add to the store.
        </p>
      </div>
      <form onSubmit={productSubmitHandler}>
        <StepOne
          inputHandler={inputHandler}
          currentStep={formStep}
          className={styles.StepOne}
        />
        <StepTwo inputHandler={inputHandler} currentStep={formStep} />
        <ImageUpload
          id="image"
          inputHandler={inputHandler}
          currentStep={formStep}
        />
        <button
          type="submit"
          disabled={!formState.isValid}
          className={styles.button}
          style={{ position: "absolute", top: "0", left: "0" }}
        >
          Add
        </button>
      </form>
      <div className={styles.buttonsContainer}>
        {formStep >= 2 ? (
          <button
            type="button"
            className={`${styles.back} ${styles.btn}`}
            onClick={backButtonHandler}
          >
            Back
          </button>
        ) : null}
        {formStep <= 2 ? (
          <button
            type="button"
            className={`${styles.continue} ${styles.btn}`}
            onClick={continueButtonHandler}
          >
            Continue
          </button>
        ) : null}
      </div>
    </div>
  );
};

// Details
const StepOne = ({ inputHandler, currentStep }) => {
  if (currentStep !== 1) return null;

  return (
    <div className={styles.StepOne}>
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
    </div>
  );
};

//Attributes
const StepTwo = ({ inputHandler, currentStep }) => {
  if (currentStep !== 2) return null;

  return (
    <div className={styles.StepTwo}>
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
          label="Size"
          errorText="Please enter valid size"
          placeholder="Size is required"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (inputs) => dispatch(actions.createProduct(inputs)),
  };
};

export default connect(null, mapDispatchToProps)(NewProduct);
