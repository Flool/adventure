import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav1 = 
    <ul className='nav1'>
      <li><Link to="/" className='NavBar-link' >Home</Link></li>
      <li><Link to="/pokemon" className='NavBar-link' ></Link></li>
    </ul>

  let nav2 = 
    props.user ?
    <ul className='right nav2'>
      <li className='right'><Link to="" className='right' onClick={props.handleLogout} >LOG OUT</Link></li>
      <li className='right'><span className='right'>WELCOME, {props.user.name}</span></li>
    </ul> :
    <ul>
      <li className='right'><Link to="/login" className='right'>LOG IN</Link></li>
      <li className='right'><Link to="/signup" className='right'>SIGN UP</Link></li>
    </ul>;

  return (
    <nav>
      <div className='nav-wrapper'>
        {nav1}
        {nav2}
      </div>
    </nav>
  );
};

export default NavBar;