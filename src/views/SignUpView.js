import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signUp } from '../store/actions'
import SignUp from '../components/SignUp'

class SignUpView extends Component {
    state = {
        signUp: {
            username: '',
            password: '',
            email: ''
        }
    }

    handleChanges = e => {
        this.setState({
            signUp: {
                [e.target.name]: e.target.value
            }
        })
    }

    signUp = e => {
        e.preventDefault();
        this.props.signUp(this.state.signUp)
    }
    render() {
        return (
            <SignUp handleChanges={this.handleChanges} signUp={this.signUp} />
        )
    }
} 

export default connect(null, { signUp })(SignUpView);