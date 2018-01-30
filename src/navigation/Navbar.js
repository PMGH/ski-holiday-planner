import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul id='navbar'>
      <li className='navbar-item'>
        <Link to='/'><img className='icon' src='../icons/home.png' alt='Home icon' /></Link>
      </li>
      <li className='navbar-item'>
        <Link to='/members'><img className='icon' src='../icons/members.png' alt='Members icon' /></Link>
      </li>
      <li className='navbar-item'>
        <Link to='/flights'><img className='icon' src='../icons/flights.png' alt='Flights icon' /></Link>
      </li>
      <li className='navbar-item'>
        <Link to='/transfers'><img className='icon' src='../icons/transfers.png' alt='Transfers icon' /></Link>
      </li>
      <li className='navbar-item'>
        <Link to='/accommodation'><img className='icon' src='../icons/accommodation.png' alt='Accommodation icon' /></Link>
      </li>
      <li className='navbar-item'>
        <Link to='/passes'><img className='icon' src='../icons/passes.png' alt='Passes icon' /></Link>
      </li>
      <li className='navbar-item'>
        <Link to='/equipment'><img className='icon' src='../icons/equipment.png' alt='Equipment icon' /></Link>
      </li>
    </ul>
  );
}

export default Navbar;
