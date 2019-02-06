import React, { Component } from 'react';
import SchoolListView from './views/SchoolListView';
import './App.css';
import Authenticate from './components/Authenticate';
import LoginView from './views/LoginView';
import SchoolFormView from './views/SchoolFormView';
import { Route } from 'react-router-dom';
class App extends Component {
  render() {
    console.log(this.props)

    return (
      <div className="App">
        <Route exact path='/' render={props => <SchoolListView {...props}  userId={this.props.userId} />} />
        <Route exact path='/schools/create' render={props => <SchoolFormView {...props}  userId={this.props.userId} />} />
      </div>
    );
  }
}

export default Authenticate(App)(LoginView);
