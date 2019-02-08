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
    if(window.location.href === 'http://localhost:3000/') {
      this.setState({ viewAllSchools: false })

    } else {
      this.setState({ viewAllSchools: false })
      window.location.href = '/'
    }
  }
  
  allSchools = (e) => {
      e.preventDefault()
      if(window.location.href === 'http://localhost:3000/') {
        this.setState({ viewAllSchools: true })
      } else {
        this.setState({ viewAllSchools: true })
        window.location.href = '/'
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

      </div>
      <footer>
          <h2>luncher</h2>
          <div >
          <section class="contact" id="contact">
      <div class="navlinks">
        <h3>Contact Us</h3>
        <p class=" text" id="mapid">
          get@luncher.app
        </p>
        <p class="social-text">Follow us on Twitter!</p>
        <p class=" text" id="mapid">
          1-800-YUM-GIFT
        </p>
        <p class="social-text">Be our patrons on Patreon!</p>
        <p class="social-text">Share this page!</p>
      </div>
    </section>
          </div>
          
        </footer>
      </>
    );
  }
}

export default withRouter(Authenticate(App)(LoginView));
