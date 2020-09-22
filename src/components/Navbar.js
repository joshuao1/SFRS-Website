import React, { useState } from "react";
import { NavLink }         from 'react-router-dom';

import "../stylesheets/navbar.css";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav
            className="navbar-container">

            <div
                className="navbar-logo">
                <NavLink
                    to="/">
                    SFRS
                </NavLink>
            </div>

            <div
                className={ `navbar-navlinks ${ showMenu ? "open" : "closed" }` }>
                <ul>
                    <li>
                        <NavLink
                            className="navbar-navlink"
                            activeClassName="navbar-navlink--active"
                            to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="navbar-navlink"
                            activeClassName="navbar-navlink--active"
                            to="/blog">
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <a
                            type="button">
                            Sign Up
                        </a>
                    </li>
                </ul>

            </div>

            <button
                className={ `toggle-btn ${ showMenu ? "open" : "closed" }` }
                onClick={ () => setShowMenu(!showMenu) }>
                <div
                    className="line">
                </div>
            </button>
        </nav>
    )
}

export default Navbar;
