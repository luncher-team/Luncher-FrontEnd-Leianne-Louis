import React, { Component } from 'react';
import SchoolListView from './views/SchoolListView';
import UpdateSchoolView from './views/UpdateSchoolView';
import './App.css';
import Authenticate from './components/Authenticate';
import LoginView from './views/LoginView';
import { withRouter, NavLink, Link } from 'react-router-dom'
import { Route } from 'react-router-dom';

import SchoolFormView from './views/SchoolFormView';

class App extends Component {
  state = {
    
  }
  
  mySchools = (e) => {
    e.preventDefault()
    if(window.location.href === 'http://localhost:3000/schools') {
      this.setState({ viewAllSchools: false })
      console.log(this.props)
    } else {
      this.setState({ viewAllSchools: false })

    }

  }
  
  allSchools = (e) => {
      e.preventDefault()
      if(window.location.href === 'http://localhost:3000/schools') {
        this.setState({ viewAllSchools: true })
      } else {
        this.setState({ viewAllSchools: true })
  
      }

  }
  render() {
    return (
      <>
      <header>
          <h2>luncher</h2>
          <div id='navlinks'>
          <NavLink to='/schools' onClick={(e) => this.allSchools(e)} component={SchoolListView} >all schools</NavLink>
          <br/>
          <NavLink exact to='/schools'  onClick={(e) => this.mySchools(e)} component={SchoolListView} >my schools</NavLink>
          <NavLink to='/schools/create' component={SchoolFormView} >create a school</NavLink>
          </div>
          
        </header>
      <div className="App">
        
        <Route exact path='/schools' render={props => <SchoolListView {...props}  mySchool={this.mySchools} allSchools={this.allSchools} viewAllSchools={this.state.viewAllSchools} userId={this.props.userId} />} />
        <Route exact path='/schools/create' render={props => <SchoolFormView {...props}  userId={this.props.userId} />} />
        <Route exact path='/schools/:id/edit' render={props => <UpdateSchoolView {...props}  userId={this.props.userId} />} />

      </div>
      <footer>
          <h2>luncher</h2>
          <div id='navlinks'>
          <NavLink to='/schools' onClick={(e) => this.allSchools(e)} component={SchoolListView} >all schools</NavLink>
          <br/>
          <NavLink exact to='/schools'  onClick={(e) => this.mySchools(e)} component={SchoolListView} >my schools</NavLink>
          <NavLink to='/schools/create' component={SchoolFormView} >create a school</NavLink>
          </div>
          
        </footer>
      </>
    );
  }
}

export default withRouter(Authenticate(App)(LoginView));
