import React from 'react';
import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

export function Post(props) {
    const { post } = props;

    return (
        <div className="post-container">
            <div className="voting-container">
                <FontAwesomeIcon icon={faArrowUp} className="voting-arrow" />
                <h3 className="vote-count">500</h3>
                <FontAwesomeIcon icon={faArrowDown} className="voting-arrow" />
            </div>
            <div className="post-body-container">
                <h2 className="post-title">{post.title}</h2>
                <img className="post-img" src={post.url} alt="" />
            </div>
            <div className="post-footer-container">
                <p>{post.author}</p>
                <p>{post.created}</p>
                <p><FontAwesomeIcon icon={faComment} className="speech-icon" /> 50</p>
            </div>
        </div>
    );
}