import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

export default function Navbar() {
  const [click, setClick] = useState(false);
  
  const handleClick = () => {
      setClick(!click);
    };

    const closeMobileMenu= ()=>{
        setClick(false);
    }

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          WEB
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <RiCloseLine /> : <AiOutlineMenuFold />}
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-itme">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>

          <li className="nav-itme">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              DOWNLOADS
            </Link>
          </li>

          <li className="nav-itme">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              BLOG
            </Link>
          </li>

          <li className="nav-itme">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              SERVICES
            </Link>
          </li>

          <li className="nav-itme">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
