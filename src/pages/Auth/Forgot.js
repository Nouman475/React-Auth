import React, { useState } from "react";
import { users } from "./Register";
import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";
const initialState = { email: "", text: "" };

export default function Forgot() {
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

  const handleSubmit = () => {
    let { email,question} = state;
    console.log("email,text :>> ", email,question);
    let user = users.find((user) => user.email === email);
    if(!user){
       notify("user not found","error")
    }else if(user.school !==  question){
      notify("wrong answer","error")
      console.log('user.question,question :>> ', user.question,question);
    }else{
      notify(`your passwod is ${user.password}`,"success")
    }
  };

  return (
    <main className="py-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="card p-5 mt-5">
                  <div className="fs-3">Clarity</div>
                  <p className="mt-3 mb-1">
                    <b>Forgot password</b>
                  </p>
                  <p>Enter email and answer question to get password</p>
                  <p htmlFor="email" className="d-block mb-0">
                    Email address
                  </p>
                  <input type="email" name="email" onChange={handleChange} />
                  <p htmlFor="email" className="d-block mt-3 mb-0">
                    Your primary school?
                  </p>
                  <input type="text" name="question" onChange={handleChange} />
                  <button
                    className="btn btn-danger mt-3"
                    onClick={handleSubmit}
                  >
                    submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
