import React from 'react';

const Nav = () => {
  return (
    <nav className="nav">
      <img
        src="assets/img/my_logo.png"
        alt="Bankist logo"
        className="nav__logo"
        id="logo"
        designer="Jonas"
        data-version-number="3.0"
      />
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
          <a className="nav__link nav__link--btn btn--show-modal" href="#"
            >Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;