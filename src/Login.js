import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";

const Login = () => {
  const signIn = () => {
    // clever google login shizz...

    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.androidheadlines.com/wp-content/uploads/2020/06/Discord-Branding-Your-Place-To-Talk.jpg"
          alt="discord logo"
        />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default Login;
