import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = props => {
  let nav = props.user ? (
    <div>
      <Link exact to='/'>
        HOME
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link exact to='/add'>
        ADD A CHIRP
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' onClick={props.handleLogout} className='NavBar-link'>
        LOG OUT
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </div>
  ) : (
    <div>
      <Link to='/login' className='NavBar-link'>
        LOG IN
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>
        SIGN UP
      </Link>
    </div>
  );

  return <div className='NavBar'>{nav}</div>;
};

export default NavBar;
