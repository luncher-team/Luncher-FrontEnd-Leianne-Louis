import React from "react";

const Login = props => {
  console.log(props)
  if(props.isRegistering){
    return (
      <>
      <h1>Sign up</h1>
      <form onSubmit={e => props.signUpUser(e, props.login)}>
          <input type='text' name='username' onChange={props.handleChanges} value={props.username} placeholder='username'/>
          <input type='text' name='password'  onChange={props.handleChanges}  value={props.password} placeholder='password'/>
          <input type='text' name='email'  onChange={props.handleChanges}  value={props.email} placeholder='email'/>
          <button>Next</button>
      </form>
      <button onClick={e => props.loginSelected(e)}>Log in</button>
    </>
    )
  } else {
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
        <button onClick={e => props.signUpSelected(e)}>Sign Up</button>
      </>
    );
  }
    
  };
  
  export default Login;