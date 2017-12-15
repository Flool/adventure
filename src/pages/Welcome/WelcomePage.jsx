import React from 'react';
import './WelcomePage.css';
import {Link} from 'react-router-dom';

const WelcomePage = (props) => {
  
  var links = props.pokemon.map((poke, pokeIdx) => (
   
    <div class="col s12 m4">
    <div class="card red lighten-2 opacity">
      <div class="card-content black-text normal">
        <span class="card-title normal">{poke.name}</span>
        <Link class ='normal'to={`pokemon/${pokeIdx}`}>
          <img class="normal" key={pokeIdx} src={poke.sprites.front_default} height='400' width='400' alt=''></img>
        </Link>
      </div>
      <div class="card-action normal">
        <Link to={`pokemon/${pokeIdx}`}>See this Pokemon</Link>
      </div>
    </div>
  </div>
        
  ));
  return (
    <div>
      <h2>Starter Pokemon</h2>
      {/* <button type="button" onClick='handleProgress'>Up Progress</button> */}
      <div class='row normal'>
        {links}
      </div>
    </div>
  )
}

export default WelcomePage;