import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import logo from '../assets/images/logo.svg';

class Header extends Component {

    render() {
        return (
            <header id="header">
                <div className="center">
                    {/* LOGO */}
                    <div id="logo">
                        <NavLink to="/">
                            <img src={logo} className="app-logo" alt="Logotipo" />
                        </NavLink>
                        <span id="brand">
                            <strong>Blog</strong>React
                        </span>
                    </div>

                    {/* MENU */}
                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/home">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="blog">Blog</NavLink>
                            </li>
                        </ul>
                    </nav>

                    {/* LIMPIAR FLOTADOS */}
                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }

}

export default Header;