import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {  getSchools ,getSchool, deleteSchool } from '../store/actions';
import MyList from '../components/MyList';
import SchoolList from '../components/SchoolList';

class SchoolListView extends Component {
    
    state = {
        viewAllSchools: false
    }
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

    editSelected = (e, school) => {
        console.log(school)
        this.props.getSchool(school.id)
        this.props.history.push(`/schools/${school.id}/edit`)
    }
    deleteSelected = (e, id) => {
        this.props.deleteSchool(id)
    }
    mySchools = (e) => {
        e.preventDefault()
        this.setState({ viewAllSchools: false })
    }
    allSchools = (e) => {
        e.preventDefault()
        this.setState({ viewAllSchools: true })
    }
    render(){
        this.props.schools && console.log(this.props.schools)
        if(this.state.viewAllSchools){
            return (
                <SchoolList donateSelected={this.donateSelected} editSelected={this.editSelected} userId={this.props.userId} createSelected={this.createSelected} schools={this.props.schools} deleteSelected={this.deleteSelected} mySchools={this.mySchools}/>
            )
        } else {
            return (
                <MyList donateSelected={this.donateSelected} editSelected={this.editSelected} userId={this.props.userId} createSelected={this.createSelected} schools={this.props.schools} deleteSelected={this.deleteSelected} allSchools={this.allSchools}/>
            )
        }
        
    }
}

const mapStateToProps = state => {
    return {
        schools: state.schools.data
    }
}
export default withRouter(connect(mapStateToProps, { getSchool, getSchools, deleteSchool })(SchoolListView));