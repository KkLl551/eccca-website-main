import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { strings } from "./util/local";
import "./Navbar.css";

function Navbar({ lang, setLang, cookies, setCookie }) {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  useEffect(() => {
    setCookie("language", lang);
  }, [lang, setCookie]);

  useEffect(() => {
    if (click) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [click]);
  
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  strings.setLanguage(lang);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="https://www.eccca.net/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="/eccca_banner.jpeg" alt="logobanner"></img>
          </a>
          <div className="homeSubTitle">
            <p>{strings.homeSubTitle}</p>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <p>
              <i className={click ? "fas fa-times" : "fas fa-bars"} /> {strings.menu}
            </p>
          </div>
          <div className="language-box">
            <FormControl variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">
                {strings.langTag}
              </InputLabel>
              <Select
                value={lang}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={(e) => {
                  setLang(e.target.value);
                }}
                label="Language"
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="ch">中文</MenuItem>
              </Select>
            </FormControl>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-time">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                {strings.NavHome}
              </Link>
            </li>
            <li className="symbol">
              <img src="/symbol.png" alt="symbols" />
            </li>
            <li className="nav-time">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                {strings.NavAbout}
              </Link>
            </li>
            <li className="symbol">
              <img src="/symbol.png" alt="symbols" />
            </li>
            <li className="nav-time">
              <Link
                to="/announce"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {strings.NavAnno}
              </Link>
            </li>
            <li className="symbol">
              <img src="/symbol.png" alt="symbols" />
            </li>
            <li className="nav-time">
              <Link
                to="/Activity"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {strings.NavActivity}
              </Link>
            </li>
            <li className="symbol">
              <img src="/symbol.png" alt="symbols" />
            </li>
            <li className="nav-time">
              <Link
                to="/evergreen"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {strings.NavEver}
              </Link>
            </li>
            <li className="symbol">
              <img src="/symbol.png" alt="symbols" />
            </li>
            <li className="nav-time">
              <Link
                to="/gallery"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {strings.NavGallery}
              </Link>
            </li>
            <li className="symbol">
              <img src="/symbol.png" alt="symbols" />
            </li>
            <li className="nav-time">
              <Link
                to="/Directory"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {strings.NavDirectory}
              </Link>
            </li>
            <li className="symbol">
              <img src="/symbol.png" alt="symbols" />
            </li>
            <li className="nav-time">
              <Link
                to="/Support"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {strings.NavSupport}
              </Link>
            </li>
            <li className="symbol">
              <img src="/symbol.png" alt="symbols" />
            </li>
            <li className="nav-time">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {strings.NavContact}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
