import React from 'react';

const WelcomePage = (props) => {
  return (
    <div>
      <h1>Welcome Page</h1>
      {props.pokemon.map(poke => <img src={poke.sprites.front_default} height='200' width='200'/>)}
      {/* <img src={`${props.pokemon1 ? props.pokemon1.sprites.front_default : null}`} height='200' width='200' alt='Loading... '/> */}
    </div>
  )
}

export default WelcomePage;