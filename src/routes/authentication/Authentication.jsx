import React from "react";
import SignInForm from "../../components/sign-In-form/sign-in-form";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import './authentication.style.scss'
// import {
//   createUserDocumentFromAuth,
//   signInWithGooglePopup,
// } from "../../utils/firebase/firebase.utils";

function Authentication() {
  

  return (
      <div className="authentication-container">

      <SignInForm/>
      <SignUpForm />
      </div>

  );
}

export default Authentication;
