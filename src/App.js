import React, { Component } from 'react';
import SchoolListView from './views/SchoolListView';
import UpdateSchoolView from './views/UpdateSchoolView';
import './App.css';
import Authenticate from './components/Authenticate';
import LoginView from './views/LoginView';
import { withRouter } from 'react-router-dom'
import { Route } from 'react-router-dom';

import SchoolFormView from './views/SchoolFormView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/schools' render={props => <SchoolListView {...props}  userId={this.props.userId} />} />
        <Route exact path='/schools/create' render={props => <SchoolFormView {...props}  userId={this.props.userId} />} />
        <Route exact path='/schools/:id/edit' render={props => <UpdateSchoolView {...props}  userId={this.props.userId} />} />

      </div>
    );
  }
}

export default withRouter(Authenticate(App)(LoginView));
