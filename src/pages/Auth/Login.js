import React, { useState } from "react";
import { users } from "./Register";
import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";
const initialState = { email: "", password: "" };


export default function Login(props) {
  const [state, setState] = useState(initialState);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const notify = (msg,type) => {
    let bg
    switch(type){
      case "error": bg = "linear-gradient(to right, #f12711, #f5af19)" ; break
      case "success": bg="linear-gradient(to right, #dce35b, #45b649)" ;break
      default : bg="blue"
    }
    Toastify({
      text: msg,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: bg,
      },
    }).showToast();
  }
  

  const handleLogin = () => {
    let { email, password } = state;
    let user = users.find((user) => user.email === email);
    if (!user) {
      notify("Email not found.", "error");
    } else if (user.password !== password) {
      notify("Incorrect password.","error");
    } else {
      notify("Login successful!","success");
    }
    console.log("user :>> ", user);
  };

  return (
    <main className="py-5">
      <div className="container mt-5 mt-sm-0">
        <div className="row">
          <div className="col">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="card p-5 mt-5">
                  <div className="fs-3">Clarity</div>
                  <p className="mt-3 mb-1">
                    <b>Login</b>
                  </p>
                  <p>To continue you need to register</p>
                  <p htmlFor="email" className="d-block mb-0">
                    Email address
                  </p>
                  <input type="email" name="email" onChange={handleChange} />
                  <div className="d-flex justify-content-between mt-3">
                    <label className="d-block" htmlFor="password">
                      Password
                    </label>
                    <p className="mb-0 text-danger" onClick={props.onForgotPasswordClick}>Fogot password</p>
                  </div>
                  <input
                    type="password"
                    className="mt-0 mb-5"
                    name="password"
                    onChange={handleChange}
                  />
                  <button className="btn btn-danger mb-0" onClick={handleLogin}>
                    Login
                  </button>
                  <p className="mt-4">
                    Not a member,{" "}
                    <span
                      className="text-danger"
                      onClick={() => props.setRegisterSuccess(false)}
                    >
                      Register here
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
