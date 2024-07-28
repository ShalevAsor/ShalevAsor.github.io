import React from 'react';
import logo from '../assets/img/my_logo.png';
import myPhoto from '../assets/img/myphoto.png';

const Header = () => (
  <header className="header">
    <nav className="nav">
      <img src={logo} alt="Shalev Asor logo" className="nav__logo" id="logo" />
      <ul className="nav__links">
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
    <div className="header__title">
      <h1>
        Shale<span className="highlight">v A</span>sor
      </h1>
      <img src={myPhoto} className="header__img" alt="Shalev Asor" />
      <div className="header__content">
        <h4>Full Stack Developer</h4>
        <a href="https://www.linkedin.com/in/shalev-asor-43067b1b1/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/shalevasor" target="_blank" rel="noopener noreferrer" className="icon-link">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  </header>
);

export default Header;