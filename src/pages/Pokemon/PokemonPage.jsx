import React from 'react';
import './PokemonPage.css';
import {Link} from 'react-router-dom';


const PokemonPage = (props) => {
  let num = (parseInt((props.location.pathname).slice(9)))
  let pokemon = props.pokemon[num]
  

  
  return (
    <div className="row">
      <div className="col s12 m5">
          <div className="card blue lighten-3 opacity">
            <div class="card-image">
              <img src={pokemon ? pokemon.sprites.front_default : null} height='500' width='500' alt=''/>
            </div>
          </div>
        </div>






      <div className="col s12 m7">
        <div className="card blue-grey darken-1 opacity">
          <div className="card-content black-text normal">
            <span className="card-title normal"><h3> {pokemon ? pokemon.name : 'loading'} </h3> </span>
            <h5>Type: {pokemon && pokemon.types.map((word) => <span key={word.type.name}>{word.type.name} </span> )}</h5>

          </div>
          <div className="card-action normal">
            <h5>Learnable Moves: {pokemon ? (props.moves.filter(move => move.type == pokemon.types[0].type.name)).map(move =>  <p key="idx">{move.name}</p> ) : 'loading' }</h5>
          </div>
        </div>
      </div>

      <div>
        <div>
        </div>
        
        
        
        {/* <button type="button" onClick={() => props.handleSelection(num)}>Choose this pokemon</button> */}
       </div>
    </div>
  )
}

export default PokemonPage;



//pokemon.types[0].type.name