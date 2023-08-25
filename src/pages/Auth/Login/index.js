import React, { useState } from "react";
import "./style.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form-container ">
      <form>
        <h4 className="title">LOGIN FORM</h4>

        <div className="mb-3">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter Your Email "
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
            required
            minLength={6}
          />
        </div>
        <div className="mb-3">
          <button type="button" className="btn btn-primary">
            Forgot Password
          </button>
        </div>

        <button type="submit" className="btn btn-primary">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
