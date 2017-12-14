import React from 'react';
import './PokemonPage.css';
import {Link} from 'react-router-dom';


const PokemonPage = (props) => {
  let num = (parseInt((props.location.pathname).slice(9)))
  let pokemon = props.pokemon[num]
  
  return (
    <div>
      <div>
        {pokemon ? (props.moves.filter(move => move.type == pokemon.types[0].type.name)).map(move =>  <li key="idx">{move.name}</li> ) : 'loading' }
      </div>
      
      <img src={`${pokemon ? pokemon.sprites.front_default : null}`} 
        height='200' width='200' alt='Loading'/>
      <h1> {pokemon ? pokemon.name : 'loading'} </h1>
      <h3>Type: {pokemon && pokemon.types.map((word) => <p key={word.type.name}>{word.type.name} </p> )}</h3>
      <button type="button" onClick={() => props.handleSelection(num)}>Choose this pokemon</button>
      <Link to={`battle`}>Battle</Link>
    </div>
  )
}

export default PokemonPage;



//pokemon.types[0].type.name