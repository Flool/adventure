import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
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
    this.pokemonUrls = [
      'https://pokeapi.co/api/v2/pokemon/1/',
      'https://pokeapi.co/api/v2/pokemon/4/',
      'https://pokeapi.co/api/v2/pokemon/7/',
      'https://pokeapi.co/api/v2/pokemon/152/',
      'https://pokeapi.co/api/v2/pokemon/155/',
      'https://pokeapi.co/api/v2/pokemon/158/',
      'https://pokeapi.co/api/v2/pokemon/252/',
      'https://pokeapi.co/api/v2/pokemon/255/',
      'https://pokeapi.co/api/v2/pokemon/258/',
    ];
    this.state = { 
      pokemon: []
    }
  }
  /*---- Callback Methods ----*/


  handleProgress = () => {
    // this.setState({user.progress})
    // return null;
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

    let promises = [];
    this.pokemonUrls.forEach(url => {
      promises.push(fetch(url).then(res => res.json()));
    });
    Promise.all(promises)
    .then(pokemon => {
      this.setState({pokemon});
    });


    // Promise.all([
    // fetch('https://pokeapi.co/api/v2/pokemon/1/')
    //   .then(res => res.json()),
    //   // .then(json => this.setState({ pokemon1: json }))
    // fetch('https://pokeapi.co/api/v2/pokemon/4/')
    //   .then(res => res.json()),
    //   // .then(json => this.setState({ pokemon2: json }))
    // fetch('https://pokeapi.co/api/v2/pokemon/7/')
    //   .then(res => res.json())
    //   // .then(json => this.setState({ pokemon3: json }))
    // ]).then(results => {
    //   this.setState({ pokemon1: results[0], pokemon2: results[1], pokemon3: results[2]});
    // });
  }

  render() {
    return (
      <div className="App">
        <Router>
        <div>
          <div>
            <NavBar 
              user={this.state.user}
              handleLogout={this.handleLogout} />
          </div>
          <Switch>
            <Route exact path='/' render={() =>
              <WelcomePage
                pokemon={this.state.pokemon}
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
            <Route path='/pokemon/:id' render={(props) =>
              <PokemonPage
                {...props}
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
