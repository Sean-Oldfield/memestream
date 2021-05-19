import React from 'react';
import logo from '../reddit-logo-orange.png';
import { SearchBar } from './SearchBar.js';

export function Header() {
    return (
        <header>
            <div className="logo-section">
                <img className="app-logo" src={logo} alt="app-logo" />
                <h1>Reddit Dark Minimal</h1>
            </div>
            <SearchBar />
        </header>
    );
}