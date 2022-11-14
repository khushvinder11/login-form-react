import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import "./LoginFormStyle.css";

const LoginForm = () => {
  const [data, setuserdata] = useState({});
  const [submitdata, setsubmit] = useState();
  //  submit from........
  const submit = () => {
    setsubmit(data);
    setuserdata({
      user: "",
      pass: "",
    });
  };
  console.log(submitdata, "user");

  // showpassword.........
  const [passwordShown, setPasswordShown] = useState(false);
  //

  return (
    <div className="body">
      <div className="form">
        <div className="form-left-image">
          <img src="https://img.freepik.com/premium-vector/illustration-cute-young-girl-freelancer-with-laptop-lamp-abstract-background_484720-1396.jpg?w=2000" />
        </div>
        {/* ... */}
        <div className="form-right-content">
          <div className="input-field">
            <h1 className="sing-up">Sign up</h1>
            <div className="user-input">
              <i class="fa-solid fa-user"></i>{" "}
              <input
                type={"text"}
                placeholder="User name"
                required="required"
                value={data.user}
                onChange={(e) => setuserdata({ ...data, user: e.target.value })}
              />
            </div>

            <div className="user-input">
              <i class="fa-solid fa-lock"></i>{" "}
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                required
                value={data.pass}
                onChange={(e) => setuserdata({ ...data, pass: e.target.value })}
              />
              {passwordShown ? (
                <i
                  class="fa-solid fa-eye"
                  onClick={() => setPasswordShown(false)}
                ></i>
              ) : (
                <i
                  className="fa-regular fa-eye-slash"
                  onClick={() => setPasswordShown(true)}
                ></i>
              )}
              {/* ... */}
              <div className="check-field">
                <input type={"checkbox"} className="check" />
                <span className="check-remember">Remember me</span>
              </div>
            </div>

            <button className="form-btn-login" onClick={submit}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
