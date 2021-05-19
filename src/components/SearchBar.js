import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export function SearchBar() {
    return (
        <div>
            <input className="main-search-bar" type="text" />
            <FontAwesomeIcon icon={faSearch} className="main-search-bar-icon" />
        </div>
    );
}