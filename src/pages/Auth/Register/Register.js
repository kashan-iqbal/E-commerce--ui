import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [answer, setAnswer] = useState("");
  const [address, setaddress] = useState("");

  return (
    <div className="form-container ">
      <form id="register_form">
        <h4 className="title">REGISTER NOW</h4>
        <div className="mb-3 register_margin">
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="form-control"
            placeholder="Enter Your Name"
          />
        </div>

        <div className="mb-3 register_margin">
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Email"
            required
          />
        </div>

        <div className="mb-3 register_margin">
          <input
            type="text"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Adress "
            required
          />
        </div>
        <div className="mb-3 register_margin">
          <input
            type="number"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Phone "
            required
            minLength={11}
            maxLength={11}
          />
        </div>

        <div className="mb-3 register_margin">
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
            minLength={6}
            required
          />
        </div>
        <div className="mb-3 register_margin">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Your Favourite Sports "
            required
          />
        </div>
        <div className="mb-3 register_margin">
          <button type="submit" className="btn btn-primary">
            Register Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
