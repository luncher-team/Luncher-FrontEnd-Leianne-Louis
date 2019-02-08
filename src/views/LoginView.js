import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Loader from "react-loader-spinner";
import {} from "../store/actions/";
import Login from "../components/Login";

class LoginView extends Component {
  state = {
    username: "",
    password: "",
    email: ""
  };

  componentDidMount() {
    if (!this.props.isRegistering) {
      delete this.state.email;
    }
  }
  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    
    if (this.props.isLoggingIn) {
      return (
          <h1>LOADING</h1>
        // <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
      );
    } else {
      return (
        <Login
          loginSelected={this.props.loginSelected}
          loginUser={this.props.loginUser}
          isRegistering={this.props.isRegistering}
          signUpSelected={this.props.signUpSelected}
          handleChanges={this.handleChanges}
          login={this.state}
          signUpUser={this.props.signUpUser}
        />
      );
    }
  }
}

export default withRouter(
  connect(
    null,
    {}
  )(LoginView)
);
