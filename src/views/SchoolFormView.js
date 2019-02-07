import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createSchool, getSchools } from '../store/actions'
import SchoolForm from '../components/SchoolForm';

class SchoolFormView extends Component {
    state = {
        name: '',
        description: '',
        address: '',
        requested_funds: '',
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
        this.props.createSchool(this.state)
    }
    
    render(){
        return(
            <SchoolForm handleChanges={this.handleChanges} addInputs={this.state} createSchool={this.createSchool}/>
        )
    }
}

export default withRouter(connect(null, {createSchool, getSchools})(SchoolFormView));