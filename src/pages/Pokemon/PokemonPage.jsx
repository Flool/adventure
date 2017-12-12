import React from 'react';
import './PokemonPage.css';

const PokemonPage = (props) => {
  return (
    <div>
      <img src={`${props.pokemon[0] ? props.pokemon[0].sprites.front_default : null}`} height='200' width='200' alt='Loading'/>
      <h1> {props.pokemon[0] ? props.pokemon[0].name : 'loading'} </h1>
      <h3>Type: {props.pokemon[0] && props.pokemon[0].types.map((word) => <p key={word.type.name}>{word.type.name} </p> )}</h3>
    </div>
  )
}

export default PokemonPage;



//pokemon.types[0].type.name