import React, { Component } from 'react';
import { connect } from 'react-redux';

import {  getSchools } from '../store/actions';
import SchoolList from '../components/SchoolList';

class SchoolListView extends Component {
    
    componentDidMount() {
        this.props.getSchools();
    }

    donateSelected = (e, id) => {
        e.preventDefault();
        this.props.history.push(`/schools/${id}/donate`)
    }

    createSelected = e => {
        e.preventDefault();
        this.props.history.push(`/schools/create`)
    }
    render(){
        console.log(this.props)
        return (
            <SchoolList donateSelected={this.donateSelected} userId={this.props.userId} createSelected={this.createSelected} schools={this.props.schools}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        schools: state.schools.data
    }
}
export default connect(mapStateToProps, { getSchools })(SchoolListView);