import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {

  render() {
    return(
      <nav className='navBar'>
      <ul>
        <li>
         <Link to='/'>Home</Link>
        </li>
        <li>
         <Link to='/pets'>Pets</Link>
        </li>
        <li>
         <Link to='/adopt'>Adopt</Link>
        </li>
      </ul>
        
      </nav>
    )
  }
}