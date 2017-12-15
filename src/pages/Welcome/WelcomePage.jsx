import React from 'react';
import {Link} from 'react-router-dom';

const WelcomePage = (props) => {
  
  var links = props.pokemon.map((poke, pokeIdx) => (
    <Link to={`pokemon/${pokeIdx}`}>
      <img key={pokeIdx} src={poke.sprites.front_default} height='400' width='400' alt=''></img>
    </Link>
  ));
  return (
    <div>
      <h2>Starter Pokemon</h2>
      {/* <button type="button" onClick='handleProgress'>Up Progress</button> */}
      <div>
        {links}
      </div>
    </div>
  )
}

export default WelcomePage;