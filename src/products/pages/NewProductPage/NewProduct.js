import React from "react";

import Input from "../../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../../shared/components/util/validators";

const NewProduct = () => {
  return (
    <div>
      <h1> Form for New Product </h1>
      <form>
        <Input
          element="input"
          id="name"
          type="text"
          label="name"
          errorText="Please enter valid name"
          placeholder="name"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(4)]}
        />
      </form>
    </div>
  );
};

export default NewProduct;
