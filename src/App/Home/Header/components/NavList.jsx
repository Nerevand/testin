import React from "react";
import { NavLink } from 'react-router-dom';
function NavList(props) {
    return (
      <li className="header-nav__item">
        <NavLink exact to={props.src} activeClassName="is-active" className="header-nav__link">
          {props.text}
        </NavLink>
      </li>
    );
}

export default NavList;