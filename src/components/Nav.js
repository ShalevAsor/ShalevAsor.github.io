import React, { useState } from 'react';
import logo from '../assets/img/my_logo.png';
import './Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <img
        src={logo}
        alt="Shalev Asor logo"
        className="nav__logo"
        id="logo"
      />
      <div className="nav__menu-icon" onClick={toggleMenu}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
      <ul className={`nav__links ${isOpen ? 'nav__links--open' : ''}`}>
        <li className="nav__item">
          <a className="nav__link" href="#section--1">About Me</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#section--projects">My Projects</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#section--2">My Expertise</a>
        </li>
        <li className="nav__item">
          <a className="nav__link nav__link--btn" href="#section--contact">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;