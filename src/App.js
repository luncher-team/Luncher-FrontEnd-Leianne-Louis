import React, { Component } from 'react';
import SchoolListView from './views/SchoolListView';
import UpdateSchoolView from './views/UpdateSchoolView';
import './App.css';
import Authenticate from './components/Authenticate';
import LoginView from './views/LoginView';
import { withRouter, NavLink, Link } from 'react-router-dom'
import { Route } from 'react-router-dom';
import Footer from './components/Footer'
import SchoolFormView from './views/SchoolFormView';
import DonateView from './views/DonateView';
class App extends Component {
  state = {
  }
  
  
  mySchools = (e) => {
    e.preventDefault()
    if(window.location.href.includes('/schools')) {
      this.setState({ viewAllSchools: false })
      window.location.href = '/'
    } else {
      this.setState({ viewAllSchools: false })
    }
  }
  
  allSchools = (e) => {
      e.preventDefault()
      
      if(window.location.href.includes('/schools')) {
        this.setState({ viewAllSchools: true })
        window.location.href = '/'
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
          <NavLink to='/' onClick={(e) => this.allSchools(e)} >all schools</NavLink>
          <br/>
          <NavLink to='/' onClick={(e) => this.mySchools(e)}   >my schools</NavLink>
          <NavLink to='/schools/create'  >create a school</NavLink>
          </div>
          
        </header>
      <div className="App">
        
        <Route exact path='/' render={props => <SchoolListView {...props}  mySchool={this.mySchools} allSchools={this.allSchools} viewAllSchools={this.state.viewAllSchools} userId={this.props.userId} />} />
        <Route exact path='/schools/create' render={props => <SchoolFormView {...props}  userId={this.props.userId} />} />
        <Route exact path='/schools/:id/edit' render={props => <UpdateSchoolView {...props}  userId={this.props.userId} />} />
        <Route exact path='/schools/:id/donate' render={props => <DonateView {...props} />} />
      <Footer />
      </div>
      </>
    );
  }
}

export default withRouter(Authenticate(App)(LoginView));
