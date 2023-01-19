import React from "react";

import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="container-fluid">
      <ul className="nav justify-content-center">
        <li className="sn-icon d-flex justify-content-center align-items center">
          <a 
            href="https://github.com/LonelyMitoc"
            target="_blank"
            rel="noreferrer"
            className="text-dark"
          >
            <BsGithub />
          </a>
        </li>
        <li className="sn-icon d-flex justify-content-center align-items center">
        <a 
            href="https://github.com/LonelyMitochttps://www.linkedin.com/in/james-matsushita-22016586/"
            target="_blank"
            rel="noreferrer"
            className="text-dark"
          >
            <BsLinkedin />
          </a>
        </li>
      </ul>
      <p className="text-center copyright">Copyright &copy; 2023 James Matsushita</p>
    </footer>
  );
};