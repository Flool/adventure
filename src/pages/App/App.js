import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css';
import WelcomePage from '../Welcome/WelcomePage';
import PokemonPage from '../Pokemon/PokemonPage';
import BattlePage from '../BattlePage/BattlePage'
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar'

import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';


class App extends Component {

  constructor(props) {
    super(props);
    this.pokemonUrls = [
      /* -------- Starter Pokemon -------- */
      'https://pokeapi.co/api/v2/pokemon/1/',
      'https://pokeapi.co/api/v2/pokemon/4/',
      'https://pokeapi.co/api/v2/pokemon/7/',
      'https://pokeapi.co/api/v2/pokemon/252/',
      'https://pokeapi.co/api/v2/pokemon/255/',
      'https://pokeapi.co/api/v2/pokemon/258/',
      'https://pokeapi.co/api/v2/pokemon/387/',
      'https://pokeapi.co/api/v2/pokemon/390/',
      'https://pokeapi.co/api/v2/pokemon/393/', //9
          /*------- Enemy ---------*/
      'https://pokeapi.co/api/v2/pokemon/10/',
      'https://pokeapi.co/api/v2/pokemon/13/',
      'https://pokeapi.co/api/v2/pokemon/19/',
      'https://pokeapi.co/api/v2/pokemon/130/',
      'https://pokeapi.co/api/v2/pokemon/142/',
      'https://pokeapi.co/api/v2/pokemon/149/', //6
    ];
    this.state = { 
      pokemon: [],
      enemyPokemon: [],
      moves: [],
      pokeIdx: 0,
      playerHp: 1,
      enemyHp: 1,
    }
  }
  /*---- Callback Methods ----*/


  handleProgress = (hp) => {
    // this.setState({user.progress})
    // return null;
  }

  splitPoke = () => {
    let newPoke = this.state.pokemon.slice(0, 9)
    let newEnemyPoke = this.state.pokemon.slice(9)
    this.setState({pokemon: newPoke, enemyPokemon: newEnemyPoke})
  }

  choosePoke = (prog) => {
    return this.state.enemyPokemon ? this.state.enemyPokemon[0] : null;
  }

  selectMoves = () => {
    let newArr = [
      /*----- Grass -----*/
      {
        "name": "Vine Whip",
        "type": "grass",
        "power": 15
      },
      {
        "name": "Absorb",
        "type": "grass",
        "power": 10
      },
      {
        "name": "Razor Leaf",
        "type": "grass",
        "power": 25
      },
      {
        "name": "Leech Seed",
        "type": "grass",
        "power": 5
      },
    ]
    // let moveArr = this.state.moves.slice()
    // let newArr = []
    // for(let x=0; x<4; x++){
    //   let randIdx = Math.floor(Math.random() * 3)
    //   moveArr ? newArr.push(moveArr[randIdx].name) : 'fuckyou';
    //   moveArr.splice(randIdx, 1)
    // }
    return newArr;
  }

  setHp = (maxP, maxE) => {
    this.setState({playerHp: maxP, enemyHp: maxE})
  }

  handleSelection = (selPoke) => {
    this.setState({pokeIdx: selPoke})
  }

  handleTurn = (move) => {
    
  }

  calcHp = (type) => {
    
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

    // Battle Callbacks //

    /*---- Functions (probably don't go here lol) ----*/
      // User picks move
      // Check speed
      // 1st move goes first - calculate damage(type/stat boosts)
      // check for win/lose
      // 2nd move goes next - calculate damage(type/stat boosts)
      // check for win/lose
      // run end of turn events

    


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
        this.setState({pokemon})
        this.splitPoke();
    });
    
    fetch(`/pokemon`).then( (data) => data.json()).then((data) => {
      this.setState({moves: data})
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
                moves={this.state.moves}
                handleSelection={this.handleSelection}
              />
            }/>
            <Route path='/battle/' render={(props) =>
              <BattlePage
                {...props}
                pokemon={this.state.pokemon}
                enemyPokemon={this.state.enemyPokemon}
                pokeIdx={this.state.pokeIdx}
                moves={this.state.moves}
                handleSelection={this.handleSelection}
                handleProgress={this.handleProgress}
                selectMoves={this.selectMoves}
                handleTurn={this.handleTurn}
                calcHp={this.calcHp}
                choosePoke={this.choosePoke}
                playerHp={this.state.playerHp}
                enemyHp={this.state.enemyHp}
                setHp={this.setHp}
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
