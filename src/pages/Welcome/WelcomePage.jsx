import React from 'react';
import './WelcomePage.css';
import {Link} from 'react-router-dom';

const WelcomePage = (props) => {
  
  var links = props.pokemon.map((poke, pokeIdx) => (
   
  <div key={poke.name} className="col s12 m4">
    <div className="card blue lighten-3 opacity">
      <div className="card-image">
      <Link className ='normal'to={`pokemon/${pokeIdx}`}>
        <img src={poke.sprites.front_default} height='400' width='400' alt=''/>
      </Link>
      <span className="card-title black-text">{poke.name}</span>
      </div>
    </div>
  </div>
        
  ));
  return (
    <div>
      <h2>Starter Pokemon</h2>
      {/* <button type="button" onClick='handleProgress'>Up Progress</button> */}
      <div className='row normal'>
        {links}
      </div>
    </div>
  )
}

export default WelcomePage;