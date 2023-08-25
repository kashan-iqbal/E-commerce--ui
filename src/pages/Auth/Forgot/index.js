import React, { useState } from "react";
import "../Login/style.css";

const ForgotPassword = () => {
  //states
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <div className="form-container ">
      <form id="forgot_form">
        <h4 className="title"> Forgot Password</h4>

        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Email "
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Your Favourite Sports"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter New Password"
            required
            minLength={6}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Confirm your Password"
            required
            minLength={6}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Forgot Now
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
