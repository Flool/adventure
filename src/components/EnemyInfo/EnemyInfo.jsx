import React from 'react';
import './EnemyInfo.css';

const EnemyInfo = (props) => {
  return (
    <div className="EnemyInfo">
      <div className="EnemyStats">
        {props.poke ? props.poke.name : 'loading'}
        {`${props.maxHp}/${props.maxHp}`}
      </div>

      <div className="EnemyPortrait">
        {props.poke ? <img src={props.poke.sprites.front_default} 
        height='300' width='300' alt=''/>  : 'Loading..'}
        
      </div>
    </div>
  );
}

export default EnemyInfo;
