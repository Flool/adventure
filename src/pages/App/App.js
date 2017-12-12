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
import NavBar from '../../components/NavBar/NavBar'

import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      pokemon: ''
    }
  }

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
    fetch('https://pokeapi.co/api/v2/pokemon/4/')
    .then(res => res.json())
    .then(json => this.setState({ pokemon: json }))
  }

  render() {
    return (
      <div className="App">
        <Router>
        <div>
          <div>
            <NavBar handleLogout={this.handleLogout} />
          </div>
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
                pokemon={this.state.pokemon}
              />
            }/>
            
          </Switch>
          </div>
        </Router>
      </div>
      
    );
  }
}

export default App;
