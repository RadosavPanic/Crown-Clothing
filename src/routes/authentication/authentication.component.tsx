import { useState, Fragment } from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import {
  AuthenticationContainerDesktop,
  AuthenticationContainerMobile,
  SwitchLink,
} from "./authentication.styles";

const Authentication = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => setIsSignIn(!isSignIn);

  return (
    <Fragment>
      <AuthenticationContainerDesktop>
        <SignInForm />
        <SignUpForm />
      </AuthenticationContainerDesktop>

      <AuthenticationContainerMobile>
        {isSignIn ? <SignInForm /> : <SignUpForm />}
        <SwitchLink onClick={toggleForm}>
          {isSignIn
            ? "Don't have an account? Sign up"
            : "Already have an account? Sign in"}
        </SwitchLink>
      </AuthenticationContainerMobile>
    </Fragment>
  );
};

export default Authentication;
