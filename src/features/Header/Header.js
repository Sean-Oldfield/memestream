import React from 'react';
import logo from '../../reddit-logo-orange.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export function Header() {
    return (
        <header>
            <div className="logo-section">
                <img className="app-logo" src={logo} alt="app-logo" />
                <h1>MEMESTREAM</h1>
            </div>
            <div>
                <input className="main-search-bar" placeholder="Search" type="text" />
                <FontAwesomeIcon icon={faSearch} className="main-search-bar-icon" />
            </div>
        </header>
    );
}