import React, { Component } from 'react';
import { connect } from 'react-redux';

import { donateFunds } from '../store/actions';
import Donate from '../components/Donate';
class DonateView extends Component {

    state={
        donation: {
            name: '',
            amount: ''
        }
    }
    handleChanges = e => {
        this.setState({
            donation: {
                ...this.state.donation,
                [e.target.name]: e.target.value
            }
        })
        const id = parseInt(this.props.match.params.id)
        this.props.donateFunds(id, this.state.donation)
    }

    donate = (e )=> {
        e.preventDefault();
        const id = parseInt(this.props.match.params.id)
        this.props.donateFunds(id, this.state.donation)
    }
    render() {
        return (
            <Donate donation={this.state.donation} handleChanges={this.handleChanges} donate={this.donate}/>
        )
    }
}

export default connect(null, { donateFunds })(DonateView);