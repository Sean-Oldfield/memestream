import React from 'react';
import logo from '../../reddit-logo-orange.png';
import './Header.css';
import { HiOutlineSearch } from 'react-icons/hi';

export function Header() {
    return (
        <header>
            <div className="logo-section">
                <img className="app-logo" src={logo} alt="app-logo" />
                <h1>MEMESTREAM</h1>
            </div>
            <div>
                <input className="main-search-bar" placeholder="Search" type="text" />
                <HiOutlineSearch className="main-search-bar-icon" />
            </div>
        </header>
    );
}