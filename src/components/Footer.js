import React from 'react';

const Footer = () => (
  <footer className="footer">
    <p className="footer__copyright">
      &copy; {new Date().getFullYear()} by
      <a
        className="footer__link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/ShalevAsor"
      >
        Shalev Asor
      </a>
      . All rights reserved.
    </p>
  </footer>
);

export default Footer;