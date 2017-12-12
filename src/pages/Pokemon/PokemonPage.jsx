import React from 'react';

const PokemonPage = (props) => {
  return (
    <div>
      <img src={`${props.pokemon ? props.pokemon.sprites.front_default : null}`} height='200' width='200' alt='Loading'/>

      <h1> {props.pokemon ? props.pokemon.name : 'loading'} </h1>
      <h3>
        {/* Type: {props.pokemon ? props.pokemon.types[0].type.name + ' / ' + props.pokemon.types[1].type.name : 'loading'}  */}
        Type: {props.pokemon ? props.pokemon.types[0].type.name : 'loading'} 
      </h3>
    </div>
  )
}

export default PokemonPage;



//pokemon.types[0].type.name