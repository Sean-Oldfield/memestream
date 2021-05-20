import React, { useState, useEffect } from 'react';
import './Header.css';
import { HiOutlineSearch } from 'react-icons/hi';
import { FaReddit } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm, setSelectedSubreddit } from '../../store/redditSlice.js';

export function Header() {

    const [searchTermLocal, setSearchTermLocal] = useState('');
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();

    useEffect(() => {
        setSearchTermLocal(searchTerm)
    }, [searchTerm]);

    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value);
    }

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal));
      };
  
    return (
        <header>
            <div className="logo-section" onClick={() => dispatch(setSelectedSubreddit('/r/memes'))}>
                <FaReddit className="app-logo-icon" />
                <h1>MEME<span className="stream-selector">STREAM</span></h1>
            </div>
            <form className="search-section" onSubmit={onSearchTermSubmit}>
                <input className="main-search-bar" placeholder="Search" type="text" onChange={onSearchTermChange} value={searchTermLocal} />
                <button type="submit" className="search-button" onClick={onSearchTermSubmit}>
                    <HiOutlineSearch className="main-search-bar-icon" />
                </button>
            </form>
        </header>
    );
}