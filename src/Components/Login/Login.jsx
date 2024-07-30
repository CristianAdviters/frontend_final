import React from "react";
import "./login.css";

const Login = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log({ formData });
    const formProps = Object.fromEntries(formData);
    console.log({ formProps });
    // handleChange({ formProps });
  }
  return (
    <>
      <form id="login-form" onSubmit={handleSubmit}>
        <label htmlFor="">User</label>
        <input
          type="text"
          id="name-login"
          className="input-form"
          placeholder="Enter your user"
          required
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          id="name-password"
          className="input-form"
          placeholder="Enter your password"
          required
        />
        <div className="div-form">
          <input type="checkbox" required />I swear I'm not a bot
          <input
            type="submit"
            value="Enter"
            onSubmit={(e) => e.preventDefault}
          />
        </div>
        Are you new at x?{" "}
        <a href="" className="a-log-reg">
          Sign up
        </a>
      </form>
    </>
  );
};

export default Login;
