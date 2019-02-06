import React, { Component } from 'react';
import { connect } from 'react-redux';

import {  } from '../store/actions/'
import Login from '../components/Login';

class LoginView extends Component {
    state = {
            username: '',
            password: ''
    }

    handleChanges = e => {
        this.setState({
                ...this.state,
                [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Login loginUser={this.props.loginUser} handleChanges={this.handleChanges} login={this.state}/>
        )
    }
}


export default connect(null, {  })(LoginView);