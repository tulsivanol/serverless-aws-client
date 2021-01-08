import React, { useState } from "react";
import { useAppContext } from "../libs/contextLib";
import Form from "react-bootstrap/Form";
import "./Login.css";

import { onError } from "../libs/errorLib";
import { useFormFields } from "../libs/hooksLib";

import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import LoaderButton from "../components/LoaderButton";

export default function Login() {
  const { userHasAuthenticated } = useAppContext();

  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      await Auth.signIn(fields.email, fields.password);
      userHasAuthenticated(true);
      history.push("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <LoaderButton
          block
          size="lg"
          type="submit"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Login
        </LoaderButton>
      </Form>
    </div>
  );
}
