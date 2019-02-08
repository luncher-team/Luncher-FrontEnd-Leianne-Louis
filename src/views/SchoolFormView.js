import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createSchool, getSchools } from '../store/actions'
import SchoolForm from '../components/SchoolForm';

class SchoolFormView extends Component {
    state = {
        name: '',
        requested_funds: '',
        address: '',
        city: '',
        state: '',
        donated: '',
        description: '',
        admin_id: parseInt(localStorage.getItem('userid'))
    }
    
    componentDidMount() {
        
    }
    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    createSchool = e => { 
        e.preventDefault()
        const info = this.state;
        if(info.name === '' || info.requested_funds === '' ||info.address === ''||info.city === ''||info.state === ''||info.donated === ''||info.description === '') {
            alert('Please fill in all fields')
        } else {
            this.props.createSchool(this.state)
        }
    }
    
    render(){
        return(
            <SchoolForm handleChanges={this.handleChanges} addInputs={this.state} createSchool={this.createSchool}/>
        )
    }
}

export default withRouter(connect(null, {createSchool, getSchools })(SchoolFormView));