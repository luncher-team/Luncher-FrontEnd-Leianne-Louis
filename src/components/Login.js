import React from "react";

const Login = props => {
    return (
      <>
        <h1>Sign in</h1>
        <form onSubmit={e => props.loginUser(e, props.login)}>
          <input
            onChange={props.handleChanges}
            type="text"
            name="username"
            value={props.username}
            placeholder="username"
          />
          <input
            onChange={props.handleChanges}
            type="text"
            name="password"
            value={props.password }
            placeholder="Password"
          />
          <button>Sign into Luncher</button>
        </form>
      </>
    );
  };
  
  export default Login;