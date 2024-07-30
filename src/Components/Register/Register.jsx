import React from "react";
import "./register.css";

const Register = () => {
  return (
    <form action="" id="register-form">
      <label htmlFor="">User</label>
      <input
        type="text"
        className="input-register"
        placeholder="Enter your user"
        required
      />
      <label htmlFor="">Email</label>
      <input
        type="email"
        className="input-register"
        placeholder="Enter your email"
        required
      />
      <label htmlFor="">Password</label>
      <input
        type="password"
        className="input-register"
        placeholder="Enter your password"
        required
      />
      <label htmlFor="">Repeat password</label>
      <input
        type="password"
        className="input-register"
        placeholder="Repeat your password"
        required
      />
      <div className="div-register">
        <input type="checkbox" className="register-input" required />I didn't
        come from Cuevana
        <input type="submit" className="register-input" required />
      </div>
      Already have an account?
      <a href="" className="a-log-reg">
        Sign in
      </a>
    </form>
  );
};

export default Register;
