import React from 'react';
import './Header.css';
import { HiOutlineSearch } from 'react-icons/hi';
import { FaReddit } from 'react-icons/fa';

export function Header() {
    return (
        <header>
            <div className="logo-section">
                <FaReddit className="app-logo-icon" />
                <h1>MEME<span className="stream-selector">STREAM</span></h1>
            </div>
            <div className="search-section">
                <input className="main-search-bar" placeholder="Search" type="text" />
                <HiOutlineSearch className="main-search-bar-icon" />
            </div>
        </header>
    );
}