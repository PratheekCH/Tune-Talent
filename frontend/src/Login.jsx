import React from "react";
import "./Login.css";

function Login() {
  return (
    <div>
      <h2>Login</h2>

      <form>
        <input type="text" placeholder="Enter Username"/>
        <input type="password" placeholder="Enter your password"/>
        <button type="submit"> Login</button>
      </form>
    </div>
  );
}

export default Login;