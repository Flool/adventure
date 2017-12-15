import React from 'react';
import './BattlePage.css';
import EnemyInfo from '../../components/EnemyInfo/EnemyInfo'
import PlayerInfo from '../../components/PlayerInfo/PlayerInfo'

const BattlePage = (props) => {
  
  /*---- Variables ----*/
  let playerPoke = props.pokemon[props.pokeIdx];
  let playerMoves = props.selectMoves();
  let playerMaxHp = Math.floor(Math.random() * (60 - 50) + 50);
  let enemyPoke = props.choosePoke(1);
  // let enemyMoves = props.choosePoke();
  let enemyMaxHp = Math.floor(Math.random() * (60 - 50) + 50) /* times 0.7 times progress */;
  
  
  return (
    <div className="BattlePage">
      {/* <p>{playerPoke ? playerPoke.name + ' is the pokemon that is the pokemon in the props that is chosesn' : 'loading'}</p> */}
      <p>{props.pokeIdx >= 0 ? props.pokeIdx + ' is the pokemon idx please wokr please' : 'loading'}</p>
      <h3>{playerMoves && playerMoves.map((move) => <button key={move.name} onClick={props.handleTurn(move)}>{move.name}</button> )}</h3>
      <div className="EnemyInfo">
        <EnemyInfo 
          poke={enemyPoke}
          // moves={enemyMoves}
          maxHp={enemyMaxHp}
        />
      </div>

      <div className="PlayerInfo">
        <PlayerInfo
          poke={props.playerPoke}
          moves={props.playerMoves}
          maxHp={props.playerMaxHP}
        />
      </div>

    </div>
  )
}

export default BattlePage;


