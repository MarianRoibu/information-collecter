import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBarStyle.css'; // Importing the CSS file for styling

const Header = () =>
{
    return (
        <header className="header">
            <nav className="navigation">
                <NavLink to="/" exact className="nav-link" activeClassName="nav-link-active">
                    Home
                </NavLink>
                <NavLink to="/user" className="nav-link" activeClassName="nav-link-active">
                    user
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
