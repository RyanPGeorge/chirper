import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div>
        <header className='header-footer'>Chriper: Coming Soon....</header>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <NavBar user={this.state.user} handleLogout={this.handleLogout} />
            )}
          />
          <Route
            exact
            path='/signup'
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path='/login'
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          :
          <Redirect to='/login' />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
