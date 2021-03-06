import React, { Component } from 'react';
import axios from 'axios';

import LoginView from '../views/LoginView';
import { userInfo } from 'os';
const Authenticate = App => Login =>{
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        token: null,
        userId: null,
        isRegistering: false,
        isLoggingIn: true
      };
    }
    componentDidMount() {
      if (!localStorage.getItem('token')) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }

    loginUser = (e, userinfo) => {
      e.preventDefault();
      this.setState({
        ...this.state, 
        isLoading: true
      })
      axios.post(`https://luncher-app-backend.herokuapp.com/api/login`, userinfo)
        .then(res => {
          this.setState({ loggedIn: true, token: res.data.token })
          localStorage.setItem("token", res.data.token)
          localStorage.setItem("userid", res.data.id)
          this.setState({
            ...this.state,
            isLoading: false
          })
          this.props.history.push('/')
        })
        .catch(err => alert('Theres an issue with your username and password'))
    }

    signUpUser = ( e, info) => {
      e.preventDefault();
      if(info.username === '' || info.password === '' || info.email === '') {
        alert('Please fill in all of the information')
      } else {
        axios.post(`https://luncher-app-backend.herokuapp.com/api/register`, info)
        .then(res => {
          this.setState({ loggedIn: true, token: res.data.token })
          localStorage.setItem("token", res.data.token)
          localStorage.setItem("userid", res.data.id)
          this.props.history.push('/')
        })
        .catch(err => alert('There is an issue with your sign up information please try again'))
      }
      
    }
    signUpSelected = (e) => {
      e.preventDefault();
      this.setState({ isRegistering: true, isLoggingIn: true})
    }
    loginSelected = e => {
      e.preventDefault();
      this.setState({ isRegistering: false, isLoggingIn: true })
    }
    render() {
      if (this.state.loggedIn) return <App userId={this.state.userId}/>;
      if(this.state.isLoggingIn) return <LoginView signUpUser={this.signUpUser} signUpSelected={this.signUpSelected} isLoading={this.state.isLoading} loginSelected={this.loginSelected} isRegistering={this.state.isRegistering} loginUser={this.loginUser} />;
    

    }
  };
}
  

export default Authenticate;