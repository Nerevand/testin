import React, { Component } from "react";
import "./Footer.css";
import list from "./footer-list";
import FooterList from "./components/FooterList";
import { Link } from 'react-scroll'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Link to="home" spy={true} smooth={true} offset={0} duration={1000}>
          <h3 className="footer-title">UpsideDown</h3>
        </Link>
        <nav className="footer-nav" id="footer-navigation">
          {list.map(({title}, index) => {
            return <FooterList key={index} title={title} />;
          })}
        </nav>
      </footer>
    );
  }
}

export default Footer;
