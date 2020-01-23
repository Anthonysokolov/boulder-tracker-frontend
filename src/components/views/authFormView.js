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
      <FormBase
        button={props.displayName}
        title={props.displayName}
        onSubmit={props.handleSubmit}
      >
        <FormField
          type="text"
          name="username"
          handler={props.handleChange}
          label="Username"
        />
        <FormField
          type="text"
          name="password"
          handler={props.handleChange}
          label="Password"
        />
      </FormBase>
    </div>
  );
};

export default AuthFormView;
