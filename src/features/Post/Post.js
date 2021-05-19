import React from 'react';
import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import cheetah from '../../cheetah.JPG';

export function Post() {
    return (
        <div className="post-container">
            <div className="voting-container">
                <FontAwesomeIcon icon={faArrowUp} className="voting-arrow" />
                <h3 className="vote-count">500</h3>
                <FontAwesomeIcon icon={faArrowDown} className="voting-arrow" />
            </div>
            <div className="post-body-container">
                <h2 className="post-title">A Buddhist Monk praying and holding the hand of a man who died sitting at a train station in China</h2>
                <img className="post-img" src={cheetah} alt="cheetah" />
            </div>
            <div className="post-footer-container">
                <p>OAFINS</p>
                <p>11 HOURS AGO</p>
                <p><FontAwesomeIcon icon={faComment} className="speech-icon" /> 50</p>
            </div>
        </div>
    );
}