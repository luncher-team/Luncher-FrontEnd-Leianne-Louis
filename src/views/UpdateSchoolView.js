import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSchool, updateSchool, getSchools } from '../store/actions'
import UpdateForm from '../components/UpdateForm';
class UpdateSchoolView extends Component {
    
    state = {
        name: this.props.selectedSchool.name,
        description: '',
        address: '',
        city: '',
        achieved: '',
        donated: '',
        requested_funds: '',
        state: ''
    }
    componentDidMount() {
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
    console.log(state, state.selectedSchool)
    return{
        selectedSchool: state.selectedSchool
    }
}
export default connect(mapStateToProps, {getSchool, updateSchool, getSchools })(UpdateSchoolView);