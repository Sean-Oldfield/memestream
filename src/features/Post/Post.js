import React from 'react';
import './Post.css';
import {
    TiArrowUpOutline,
    TiArrowDownOutline,
    TiMessage,
} from 'react-icons/ti';
import { formatDate } from '../../utils/utils.js';

export function Post(props) {
    const { post } = props;
    const date = formatDate(post.created);
    
    return (
        <div className="post-wrapper card">
            <div className="voting-container">
                <TiArrowUpOutline className="voting-arrow up-arrow" />
                <h3 className="vote-count">{post.score}</h3>
                <TiArrowDownOutline className="voting-arrow down-arrow" />
            </div>
            <div className="post-container">
                <h2 className="post-title">{post.title}</h2>
                <img className="post-img" src={post.url} alt="" />
                <div className="post-footer-container">
                    <p className="author-name">{post.author}</p>
                    <p>{date}</p>
                    <div className="post-comments-container">
                        <TiMessage className="speech-icon" /> 
                        <p>{post.num_comments}</p>
                    </div>
                </div>
            </div>
        </div>
    );
    
}