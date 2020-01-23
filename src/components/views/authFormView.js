import React from "react";
import { FormBase, FormField, FormRow } from "./Form.jsx";

const AuthFormView = props => {
  const {
    name,
    displayName,
    handleSubmit,
    error,
    handleChange,
    isLoggedIn,
    userEmail
  } = props;

  return (
    <div>
      <FormBase button="Filler" title="Filler" onSubmit={props.submitHandler}>
        <FormField
          type="text"
          name="name"
          handler={props.usernameHandler}
          label="Username"
        />
        <FormField
          type="text"
          name="password"
          handler={props.passwordHandler}
          label="Password"
        />
      </FormBase>
    </div>
  );
};

export default AuthFormView;
