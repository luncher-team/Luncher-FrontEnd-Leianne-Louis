import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSchool, updateSchool, getSchools } from '../store/actions'
import UpdateForm from '../components/UpdateForm';
import { parse } from 'ipaddr.js';
class UpdateSchoolView extends Component {
    
    state = {
        name: '',
        description: '',
        address: '',
        city: '',
        achieved: '',
        donated: '',
        requested_funds: '',
        state: ''
    }
    componentDidMount() {
        this.props.getSchool(parseInt(this.props.match.params.id))
    }
    
    componentDidUpdate() {
        if(this.state.name === '') {
            this.setState({
                name: this.props.selectedSchool.name,
                description: this.props.selectedSchool.description,
                address: this.props.selectedSchool.address,
                city: this.props.selectedSchool.city,
                achieved: this.props.selectedSchool.achieved,
                donated: this.props.selectedSchool.donated,
                requested_funds: this.props.selectedSchool.requested_funds,
                state: this.props.selectedSchool.state
            })
        }
    }
    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    updateSchool = e => {
        e.preventDefault();
        this.props.updateSchool(this.state, parseInt(this.props.match.params.id))
    }
    render() {
        return (
            
            <UpdateForm updateSchool={this.updateSchool} handleChanges={this.handleChanges} update={this.state}/>
        )
    }
}

const mapStateToProps = state => {
   return{
        selectedSchool: state.selectedSchool
    }
}
export default connect(mapStateToProps, {getSchool, updateSchool, getSchools })(UpdateSchoolView);