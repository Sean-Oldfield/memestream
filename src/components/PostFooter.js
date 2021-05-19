import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

export function PostFooter() {
    return (
        <div className="post-footer-container">
            <p>OAFINS</p>
            <p>11 HOURS AGO</p>
            <p><FontAwesomeIcon icon={faComment} className="speech-icon" /> 50</p>
        </div>
    );
}