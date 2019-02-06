import React, { Component } from 'react';
import axios from 'axios';

import LoginView from '../views/LoginView';

const Authenticate = App => Login => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        token: null,
        userId: null
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
      axios.post(`https://luncher-app-backend.herokuapp.com/api/login`, userinfo)
        .then(res => {
          this.setState({ loggedIn: true, token: res.data.token })
          localStorage.setItem("token", res.data.token)
          localStorage.setItem("userid", res.data.id)
        })
        .catch(err => alert('Theres an issue with your username and password'))
    }
    render() {
      console.log(this.state)
      if (this.state.loggedIn) return <App userId={this.state.userId}/>;
      return <LoginView loginUser={this.loginUser} />;
    }
  };
}
  

export default Authenticate;