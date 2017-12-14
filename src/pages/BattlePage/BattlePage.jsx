import React from 'react';
import './BattlePage.css';

const BattlePage = (props) => {
  
  /*---- Variables ----*/
  let playerPoke = props.pokemon[props.pokeIdx];
  let moves = props.selectMoves();
  
  
  
  return (
    <div className="BattlePage">
      {/* <p>{playerPoke ? playerPoke.name + ' is the pokemon that is the pokemon in the props that is chosesn' : 'loading'}</p> */}
      <p>{props.pokeIdx ? props.pokeIdx + ' is the pokemon idx please wokr please' : 'loading'}</p>
      <h3>{moves && moves.map((move) => <button key={move.name} onClick={props.handleTurn(move)}>{move.name}</button> )}</h3>
    </div>
  )
}

export default BattlePage;


