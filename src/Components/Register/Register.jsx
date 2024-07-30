import React from "react";
import "./register.css";

const Register = () => {
  return (
    <>
      <form action="" id="register-form">
        <input
          type="text"
          placeholder="Enter your username"
          className="input-register"
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="input-register"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="input-register"
        />
        <input
          type="password"
          placeholder="repeat your password"
          className="input-register"
        />
        <div className="div-register">
          <input type="checkbox" />
          I'm not a bot
          <input type="submit" value="Sign up" />
        </div>
      </form>
    </>
  );
};
export default Register;
