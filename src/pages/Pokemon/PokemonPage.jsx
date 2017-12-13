import React from 'react';
import './PokemonPage.css';

const PokemonPage = (props) => {
  let num = (parseInt((props.location.pathname).slice(9)))
  
  return (
    <div>
      <div>
        {(props.moves.filter(move => move.type == 'fire')).map(move =>  <li key="idx">{move.name}</li> ) }
      </div>
      
      <img src={`${props.pokemon[num] ? props.pokemon[num].sprites.front_default : null}`} 
        height='200' width='200' alt='Loading'/>
      <h1> {props.pokemon[num] ? props.pokemon[num].name : 'loading'} </h1>
      <h3>Type: {props.pokemon[num] && props.pokemon[num].types.map((word) => <p key={word.type.name}>{word.type.name} </p> )}</h3>
      <button type="button" onClick={() => props.handleSelection(num)}>Choose this pokemon</button>
    </div>
  )
}

export default PokemonPage;



//pokemon.types[0].type.name