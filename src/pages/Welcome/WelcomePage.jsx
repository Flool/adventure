import React from 'react';
import {Link} from 'react-router-dom';

const WelcomePage = (props) => {
  
  var links = props.pokemon.map((poke, pokeIdx) => (
    <Link to={`pokemon/${pokeIdx}`}>
      <img key={pokeIdx} src={poke.sprites.front_default} height='370' width='370' alt=''></img>
    </Link>
  ));
  return (
    <div>
      <h1>Welcome Page</h1>
      {/* <button type="button" onClick='handleProgress'>Up Progress</button> */}
      <div>
        {links}
      </div>
    </div>
  )
}

export default WelcomePage;