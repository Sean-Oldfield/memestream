import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


export function Voting() {
    return (
        <div className="voting-container">
            <FontAwesomeIcon icon={faArrowUp} className="voting-arrow" />
            <h3 className="vote-count">500</h3>
            <FontAwesomeIcon icon={faArrowDown} className="voting-arrow" />
        </div>
    );
}