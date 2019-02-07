import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {  } from '../store/actions/'
import Login from '../components/Login';

class LoginView extends Component {
    state = {
            username: '',
            password: '',
            email: '',
    }

    componentDidMount() {
        if(!this.props.isRegistering) {
            delete this.state.email
            console.log(this.state)
        }
    }
    handleChanges = e => {
        console.log(this.state)
        this.setState({
                [e.target.name]: e.target.value
        })
    }

    
    render() {
        console.log(this.props)
        return (
            <Login loginSelected={this.props.loginSelected} loginUser={this.props.loginUser} isRegistering={this.props.isRegistering}signUpSelected={this.props.signUpSelected} handleChanges={this.handleChanges} login={this.state} signUpUser={this.props.signUpUser}/>
        )
    }
}


export default withRouter(connect(null, {  })(LoginView));