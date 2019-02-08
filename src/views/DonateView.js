import React, { Component } from "react";
import { connect } from "react-redux";

import { donateFunds, getSchools } from "../store/actions";
import Donate from "../components/Donate";
class DonateView extends Component {
  state = {
    name: "",
    amount: "",
    cc: "",
    cvv: ""
  };
  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentWillMount() {
    this.props.getSchools();
  }
  donate = e => {
    e.preventDefault();
    const id = parseInt(this.props.match.params.id);
    const school = this.props.schools.find(school => school.id === id);
    const donatedTtl = parseInt(school.donated) + parseInt(this.state.amount);
    //this.props.donateFunds(id, donatedTtl)
  };
  render() {
    return (
      <Donate
        {...this.props}
        donation={this.state}
        school={this.props.schools}
        handleChanges={this.handleChanges}
        donate={this.donate}
      />
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    schools: state.schools.data
  };
};
export default connect(
  null,
  { donateFunds, getSchools }
)(DonateView);
