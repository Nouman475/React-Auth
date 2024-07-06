import React, { useState } from "react";
import "./App.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Forgot from "./pages/Auth/Forgot";

function App() {
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  return (
    <>
      {registerSuccess ? (
        showForgotPassword ? (
          <Forgot />
        ) : (
          <Login
            setRegisterSuccess={setRegisterSuccess}
            onForgotPasswordClick={handleForgotPasswordClick}
          />
        )
      ) : (
        <Register onRegisterSuccess={() => setRegisterSuccess(true)} />
      )}
    </>
  );
}

export default App;