import React, { Component } from "react";
import { Link } from 'react-scroll'
 
class FooterList extends Component {
  render() {
    return (
      <Link className="footer-nav__link" to="home" spy={true} smooth={true} offset={0} duration={1000}>
       {this.props.title}
    </Link>
    );
  }
}

export default FooterList;
