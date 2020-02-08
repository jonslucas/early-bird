import React from 'react';
import './Header.css';
import Avatar from './Avatar';

const Header = () => (
  <div className="container">
    <div className="app-name"><h2>Tracker</h2></div>
    <div className="avatar"><Avatar /></div>
  </div>
);

export default Header;
