import React from "react";
import { Button } from 'reactstrap';
import {LoginContainer, Form } from '../styles/LoginStyles'
import '../styles/Login.css'
const Login = props => {
  if(props.isRegistering){
    return (
      
      <LoginContainer >
        <div className='loginContainer' >
          <h1>welcome | sign up to make a difference</h1>
          <Form onSubmit={e => props.signUpUser(e, props.login)}>
          <input type='text' name='username' onChange={props.handleChanges} value={props.username} placeholder='username'/>
          <input type='text' name='password'  onChange={props.handleChanges}  value={props.password} placeholder='password'/>
          <input type='text' name='email'  onChange={props.handleChanges}  value={props.email} placeholder='email'/>
          <Button color="primary" >Sign Up</Button>
      </Form>
      <br/>
      <Button className='loginBtn' onClick={e => props.loginSelected(e)}>Log in</Button>
        </div>
    </LoginContainer>
    )
  } else {
    return (
      <LoginContainer  >
        <div className='loginContainer'>
        
        <h1>welcome back :) | sign in</h1>
        <Form onSubmit={e => props.loginUser(e, props.login)}>
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
          <Button color='primary' >Sign into Luncher</Button>
        </Form>
        <br/>
        <p>Don't have an account ?</p>
        <Button onClick={e => props.signUpSelected(e)}>Sign Up</Button>
        </div>
        
        </LoginContainer>
    );
  }
    
  };
  
  export default Login;