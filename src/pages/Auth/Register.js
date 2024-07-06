import React, { useState } from "react";
import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";
const initialState = { firstName: "", lastName: "", email: "", password: "" };

export let users = [];

export default function Register({ onRegisterSuccess }) {
  const [state, setState] = useState(initialState);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };


  const handleRegister = () => {
    localStorage.setItem("user", JSON.stringify(state));
    console.log("FormData :>> ", state);
    users.push(state);
    Toastify({
      text:"Registering...",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #bc4e9c, #f80759)",
      },
    }).showToast();
    console.log("users :>> ", users);
    setTimeout(() => {
      Toastify({
      text:"Registered Successfully",
      duration: 1000,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #bc4e9c, #f80759)",
      },
    }).showToast();
      onRegisterSuccess();
    }, 4000);
  };
  return (
    <main className="">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="card p-5 mt-5" id="registercard">
                  <div className="fs-3">Clarity</div>
                  <p className="mt-3 mb-1">
                    <b>Register</b>
                  </p>
                  <p>To continue you need to register</p>
                  <div className="row mb-3">
                    <div className="col-6">
                      <label htmlFor="first-name">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="first-name">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <p htmlFor="email" className="d-block mb-0">
                    Email address
                  </p>
                  <input type="email" name="email" onChange={handleChange} />
                  <div className="d-flex mt-3">
                    <label className="d-block" htmlFor="password">
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    className="mt-0 mb-2"
                    name="password"
                    onChange={handleChange}
                  />
                  <label htmlFor="question">
                    <b>Security question</b><br/>
                    <p>Your primary school name?</p>
                  </label>
                  <input
                    type="text"
                    className="mt-0 mb-5"
                    name="school"
                    onChange={handleChange}
                  />
                  <button
                    className="btn btn-danger mb-0"
                    onClick={handleRegister}
                  >
                    Register
                  </button>
                  <p className="mt-3">
                    Already a member, <span className = "text-danger" onClick={()=>{onRegisterSuccess()}}>login here</span>
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
