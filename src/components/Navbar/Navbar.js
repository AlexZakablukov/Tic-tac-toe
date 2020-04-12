import React from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';
import BackArrow from "../../icons/backArrow";

const Navbar = ({isBackArrow, links}) => {
  return (
    <div className="navbar">
      <div className="navbar-backArrow">
        {isBackArrow ? (
          <Link to="/game">
            <BackArrow/>
          </Link>
        ) : null}
      </div>
      <nav className="navbar-nav">
        {links && links.length ? (
          <ul>
            {links.map((link, index)=>(
              <li key={index}>
                <Link to={link.to}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </nav>
    </div>
  );
};

export default Navbar