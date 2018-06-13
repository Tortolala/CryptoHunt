import React, { Component } from 'react';
import { LandingPage } from './Auth/LandingPage';
import Auth from './Auth/Auth';

class App extends Component {

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }


  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        {
          !isAuthenticated() && (
              <LandingPage auth={new Auth()}/>
          )
        }
      </div>
    );
  }
}
export default App;
