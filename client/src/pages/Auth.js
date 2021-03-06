import React, { useState, useContext } from 'react';

import CardEl from '../shared/components/UIElements/CardEl';
import Input from '../shared/components/FormElements/Input';
import Button from '../shared/components/FormElements/Button';
import { AuthContext } from '../shared/context/auth-context';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../shared/util/validators';
import { useForm } from '../shared/hooks/form-hook';
import './Auth.css';

const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const switchModeHandler = () => {
      if (!isLoginMode) {
          setFormData({
              ...formState.inputs,
              name: undefined
          },formState.inputs.email.isValid && formState.inputs.password.isValid);
      } else {
            setFormData(
                {
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            }, 
            false
            );
        }
    setIsLoginMode(prevMode => !prevMode);
};

  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login();
  };

  return (
    <CardEl className="authentication">
      <h2>{isLoginMode ? 'Login' : 'Signup'}</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
          {!isLoginMode && (
              <Input
              element="input"
              id="name"
              type="text"
              label="Your Name"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}

              />
          )}
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password, at least 5 characters."
          onInput={inputHandler}
        />
        {!isLoginMode && (
              <Input
              element="input"
              id="city"
              type="text"
              label="Your City"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}

              />
          )}
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? 'LOGIN' : 'SIGNUP'}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}</Button>
    </CardEl>
  );
};

export default Auth;
