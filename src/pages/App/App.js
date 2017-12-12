import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import logo from '../../logo.svg';
import './App.css';
import WelcomePage from '../Welcome/WelcomePage';
import PokemonPage from '../Pokemon/PokemonPage';
import userService from '../../utils/userService';

import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';


class App extends Component {

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }

  /*--- Lifecycle Methods ---*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }

  render() {
    return (
      <div className="App">
        <header className='nav'>Adventure :)</header>
        <Router>
          <Switch>
            <Route exact path='/' render={() =>
              <WelcomePage
            
              />
            }/>
            <Route exact path='/signup' render={(props) => 
              <SignupPage
                {...props}
                handleSignup={this.handleSignup}
              />
            }/>
            <Route exact path='/login' render={(props) => 
              <LoginPage
                {...props}
                handleLogin={this.handleLogin}
              />
            }/>
            <Route path='/pokemon' render={() =>
              <PokemonPage
            
              />
            }/>
            
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
