import React from "react";
import { useDispatch } from "react-redux";

import { signupUser } from "./actions";
import SignupScrenPresenter from "./SignupScreenPresenter";

const SignupScreenContainer = () => {
  const dispatch = useDispatch();

  const handleRegister = (formData) => {
    const { name, surname, email, password } = formData;

    const payload = {
      name,
      surname,
      email,
      password,
    };

    dispatch(signupUser(payload));
  };

  return <SignupScrenPresenter onRegister={handleRegister} />;
};

export default SignupScreenContainer;
